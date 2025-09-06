import React, { useMemo } from "react";
import { Drawer, Form, Select, DatePicker, Space, Button } from "antd";
import { SaveButton } from "@refinedev/antd";
import { useSelect } from "@refinedev/antd";
import {
  useCustomMutation,
  useInvalidate,
  useNotification,
  HttpError
} from "@refinedev/core";
import dayjs from "dayjs";
import { filterRolesByDept, humanizeEnum } from "./utils";
import { useAssignCrewModal, AssignCrewFormValues } from "./useAssignCrewModal";

type Dept = "DECK" | "ENGINE" | "CATERING";

// Import the VesselRole enum from Prisma
import { VesselRole } from "@cms-app/prisma";

// Get all vessel roles from the Prisma enum
const ALL_ROLES: VesselRole[] = Object.values(VesselRole);

export const AssignCrewDrawer: React.FC<{
  crewId: string;
  crewDepartment?: Dept;
  modal: ReturnType<typeof useAssignCrewModal>;
}> = ({ crewId, crewDepartment, modal }) => {
  const { modalProps, formProps, close } = modal;
  const [form] = Form.useForm<AssignCrewFormValues>();
  const invalidate = useInvalidate();
  const { open } = useNotification();

  const { mutate: assignMutate, mutation } = useCustomMutation();

  // Vessels select
  const { selectProps: vesselSelectProps } = useSelect({
    resource: "vessels",
    optionLabel: "name",
    optionValue: "id",
    // enables server search when typing
    searchField: "search"
  });

  const roleOptions = useMemo(
    () =>
      filterRolesByDept(ALL_ROLES, crewDepartment).map((r) => ({
        label: humanizeEnum(r),
        value: r
      })),
    [crewDepartment]
  );

  const onFinish = (values: AssignCrewFormValues) => {
    assignMutate(
      {
        url: `crew/${crewId}/assign`,
        method: "post",
        values: {
          ...values,
          assignedAt: values.assignedAt ?? undefined
        }
      },
      {
        onSuccess: async () => {
          open?.({
            type: "success",
            message: "Assigned",
            description: "Crew assigned to vessel."
          });
          // refresh list + detail if open
          await invalidate({
            resource: "crew",
            invalidates: ["list", "detail"]
          });
          await invalidate({
            resource: "vessels",
            invalidates: ["list", "detail"]
          });
          form.resetFields();
          close();
        },
        onError: (err: HttpError) => {
          open?.({
            type: "error",
            message: "Assignment failed",
            description:
              err?.response?.data?.message ??
              err?.message ??
              "Could not assign crew (might already have an active assignment)."
          });
        }
      }
    );
  };

  return (
    <Drawer
      title="Assign Crew to Vessel"
      width={520}
      open={modalProps.open}
      onClose={() => close()}
      destroyOnClose
    >
      <Form
        {...formProps}
        form={form}
        layout="vertical"
        onFinish={(vals) =>
          onFinish({
            vesselId: vals.vesselId,
            role: vals.role,
            assignedAt: vals.assignedAt
              ? dayjs(vals.assignedAt).toISOString()
              : undefined
          })
        }
        initialValues={{ assignedAt: dayjs() }}
      >
        <Form.Item
          label="Vessel"
          name="vesselId"
          rules={[{ required: true, message: "Select a vessel" }]}
        >
          <Select
            {...vesselSelectProps}
            showSearch
            placeholder="Search vessel by name"
          />
        </Form.Item>

        <Form.Item
          label="Role"
          name="role"
          rules={[{ required: true, message: "Select a role" }]}
        >
          <Select
            showSearch
            optionFilterProp="label"
            options={roleOptions}
            placeholder="Select role"
          />
        </Form.Item>

        <Form.Item label="Assigned At" name="assignedAt">
          <DatePicker showTime style={{ width: "100%" }} />
        </Form.Item>

        <Space style={{ marginTop: 8 }}>
          <SaveButton htmlType="submit" loading={mutation.isPending} />
          <Button onClick={() => close()}>Cancel</Button>
        </Space>
      </Form>
    </Drawer>
  );
};
