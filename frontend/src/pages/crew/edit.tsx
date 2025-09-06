import React, { useMemo } from "react";
import { Edit, useForm } from "@refinedev/antd";
import { useShow, useParsed } from "@refinedev/core";
import { Form, Input, Select } from "antd";
import {
  humanizeEnum,
  DEPARTMENTS,
  STATUSES,
  filterRolesByDept
} from "./utils";

// Import the VesselRole enum from Prisma
import { VesselRole } from "@cms-app/prisma";

// Get all vessel roles from the Prisma enum
const ALL_ROLES: VesselRole[] = Object.values(VesselRole);

type CrewEditPayload = {
  userId: string;
  firstName: string;
  lastName: string;
  primaryDepartment: "DECK" | "ENGINE" | "CATERING";
  rank: string;
  status?: "ACTIVE" | "INACTIVE" | "ON_LEAVE";
};

export const CrewEdit: React.FC = () => {
  const { id } = useParsed();

  const { formProps, saveButtonProps, formLoading } = useForm<CrewEditPayload>({
    resource: "crew",
    action: "edit",
    id: id,
    redirect: "list"
  });

  const { query } = useShow<CrewEditPayload>({
    resource: "crew",
    id: id
  });
  const record = query?.data?.data;

  const dept = Form.useWatch<"DECK" | "ENGINE" | "CATERING">(
    "primaryDepartment",
    formProps.form
  );
  const roleOptions = useMemo(
    () =>
      filterRolesByDept(ALL_ROLES, dept).map((r) => ({
        label: humanizeEnum(r),
        value: r
      })),
    [dept]
  );

  return (
    <Edit
      saveButtonProps={saveButtonProps}
      title="Edit Crew"
      isLoading={formLoading || query.isLoading}
    >
      <Form {...formProps} layout="vertical">
        <Form.Item label="Linked User" name="userId">
          <Input readOnly value={record?.userId} />
        </Form.Item>

        <Form.Item
          label="First name"
          name="firstName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Last name"
          name="lastName"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Department"
          name="primaryDepartment"
          rules={[{ required: true }]}
        >
          <Select options={DEPARTMENTS} />
        </Form.Item>

        <Form.Item label="Rank" name="rank" rules={[{ required: true }]}>
          <Select showSearch optionFilterProp="label" options={roleOptions} />
        </Form.Item>

        <Form.Item label="Status" name="status">
          <Select options={STATUSES} />
        </Form.Item>
      </Form>
    </Edit>
  );
};
