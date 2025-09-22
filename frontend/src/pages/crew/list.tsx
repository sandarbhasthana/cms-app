import React, { useState } from "react";
import {
  List,
  useTable,
  TagField,
  FilterDropdown,
  ShowButton,
  EditButton,
  DateField
} from "@refinedev/antd";
import { Table, Input, Select, Space, Tag, Button, Form, Modal } from "antd";
import Icon from "@ant-design/icons";
import {
  useInvalidate,
  useNotification,
  useCustomMutation,
  useDelete
} from "@refinedev/core";
import type { CrudFilters, HttpError } from "@refinedev/core";
import { DEPARTMENTS, STATUSES, humanizeEnum } from "./utils";
import { AssignCrewDrawer } from "./AssignCrewDrawer";
import { useAssignCrewModal } from "./useAssignCrewModal";
import "./responsive-table.css";

type AssignmentLite = {
  id: string;
  assignedAt: string;
  vessel?: { name: string };
};

type CrewRow = {
  id: string;
  userId: string;
  firstName: string | null;
  lastName: string | null;
  primaryDepartment: "DECK" | "ENGINE" | "CATERING" | null;
  rank: string | null;
  status: "ACTIVE" | "INACTIVE" | "ON_LEAVE" | null;
  dateJoined?: string | null;
  user?: { email: string; createdAt: string };
  VesselAssignment?: AssignmentLite[];
  onboardingStatus: "PENDING" | "IN_PROGRESS" | "ONBOARDED";
};

type SearchForm = { q?: string };

// Custom deactivate icon component
const DeactivateIconSvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 1024 1024" fill="currentColor">
    <path d="M755.749 368.703 931.226 544.18l-42.42 42.42L713.33 411.123z" />
    <path d="m888.807 368.704 42.42 42.42L755.75 586.601l-42.42-42.42zM469.6 518.8c-60.7 0-117.9-23.7-160.8-66.6-43-43-66.6-100.1-66.6-160.8s23.7-117.9 66.6-160.8c43-43 100.1-66.6 160.8-66.6s117.9 23.7 160.8 66.6S697 230.7 697 291.4s-23.7 117.9-66.6 160.8c-43 43-100.1 66.6-160.8 66.6zm0-394.8c-92.3 0-167.4 75.1-167.4 167.4s75.1 167.4 167.4 167.4S637 383.7 637 291.4 561.9 124 469.6 124zM774.4 960H164.6c-44.5 0-80.7-36.2-80.7-80.7V691c0-93.3 46.9-179.2 125.4-229.7l32.5 50.5c-61.3 39.5-97.9 106.5-97.9 179.3v188.4c0 11.4 9.3 20.7 20.7 20.7h609.8c11.3 0 20.6-9.2 20.6-20.6V691h60v188.4c-.1 44.5-36.2 80.6-80.6 80.6z" />
  </svg>
);

const DeactivateIcon = (props: React.ComponentProps<typeof Icon>) => (
  <Icon component={DeactivateIconSvg} {...props} />
);

// Custom deactivate button that looks like DeleteButton but with custom icon
const CustomDeactivateButton: React.FC<{ recordItemId: string }> = ({
  recordItemId
}) => {
  const { mutate } = useDelete();

  const handleDeactivate = () => {
    Modal.confirm({
      title: "Deactivate crew member?",
      content:
        "This will deactivate the crew member. They can be reactivated later.",
      okText: "Deactivate",
      okType: "danger",
      onOk: () => {
        mutate({
          resource: "crew",
          id: recordItemId,
          successNotification: {
            message: "Crew member deactivated successfully",
            type: "success"
          },
          errorNotification: {
            message: "Failed to deactivate crew member",
            type: "error"
          }
        });
      }
    });
  };

  return (
    <Button
      type="text"
      size="small"
      icon={<DeactivateIcon style={{ color: "#ff4d4f" }} />}
      onClick={handleDeactivate}
      title="Deactivate crew member"
      style={{
        border: "1px solid transparent",
        borderRadius: "6px"
      }}
      className="ant-btn-dangerous"
    />
  );
};

// Status tag component with colors
const StatusTag: React.FC<{ status: string | null | undefined }> = ({
  status
}) => {
  if (!status) return <Tag color="default">-</Tag>;

  let color: "success" | "error" | "warning" = "success";

  switch (status) {
    case "ACTIVE":
      color = "success";
      break;
    case "INACTIVE":
      color = "error";
      break;
    case "ON_LEAVE":
      color = "warning";
      break;
    default:
      color = "success";
  }

  return <Tag color={color}>{humanizeEnum(status)}</Tag>;
};

// Onboarding Status tag component with colors
const OnboardingStatusTag: React.FC<{
  status: "PENDING" | "IN_PROGRESS" | "ONBOARDED";
}> = ({ status }) => {
  let color: "default" | "processing" | "success" = "default";
  let text: string = status;

  switch (status) {
    case "PENDING":
      color = "default";
      text = "Pending";
      break;
    case "IN_PROGRESS":
      color = "processing";
      text = "In Progress";
      break;
    case "ONBOARDED":
      color = "success";
      text = "Onboarded";
      break;
    default:
      color = "default";
      text = status;
  }

  return <Tag color={color}>{text}</Tag>;
};

// Custom icons for crew assignment actions
const AssignIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
    <path d="M43.75 21.875h-2.083v-2.083a2.083 2.083 0 1 0-4.167 0v2.083h-2.083a2.083 2.083 0 0 0 0 4.167H37.5v2.083a2.083 2.083 0 1 0 4.167 0v-2.083h2.083a2.083 2.083 0 0 0 0-4.167zm-16.042 3.583a10.251 10.251 0 0 0 3.542-7.75 10.417 10.417 0 0 0-20.833 0 10.25 10.25 0 0 0 3.541 7.75 16.665 16.665 0 0 0-9.791 15.167 2.083 2.083 0 1 0 4.166 0 12.5 12.5 0 0 1 25 0 2.083 2.083 0 1 0 4.167 0 16.666 16.666 0 0 0-9.792-15.167zm-6.875-1.5a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5z" />
  </svg>
);

const ReleaseIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 50 50" fill="currentColor">
    <path d="M43.75 21.875h-8.333a2.083 2.083 0 0 0 0 4.167h8.333a2.083 2.083 0 0 0 0-4.167zm-16.042 3.583a10.251 10.251 0 0 0 3.542-7.75 10.417 10.417 0 0 0-20.833 0 10.25 10.25 0 0 0 3.541 7.75 16.665 16.665 0 0 0-9.791 15.167 2.083 2.083 0 1 0 4.166 0 12.5 12.5 0 0 1 25 0 2.083 2.083 0 1 0 4.167 0 16.666 16.666 0 0 0-9.792-15.167zm-6.875-1.5a6.25 6.25 0 1 1 0-12.5 6.25 6.25 0 0 1 0 12.5z" />
  </svg>
);

const OnboardingIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.97 5.25c-1.88 0-3.42 1.53-3.42 3.42s1.53 3.42 3.42 3.42 3.42-1.53 3.42-3.42-1.53-3.42-3.42-3.42z" />
    <path d="M19 19.89c-.19 0-.39-.08-.54-.23-.29-.3-.29-.77.01-1.06a9.17 9.17 0 0 0 2.77-6.61c0-5.1-4.15-9.25-9.25-9.25-.95 0-1.88.14-2.77.42-.4.12-.82-.1-.94-.49-.12-.4.1-.82.49-.94 1.04-.33 2.12-.49 3.23-.49 5.93 0 10.75 4.82 10.75 10.75 0 2.91-1.15 5.64-3.22 7.68-.15.14-.34.21-.52.21zM12 22.75C6.07 22.75 1.25 17.93 1.25 12c0-2.83 1.09-5.5 3.07-7.53.29-.3.76-.3 1.06-.01s.3.77.01 1.06A9.179 9.179 0 0 0 2.75 12c0 5.1 4.15 9.25 9.25 9.25.95 0 1.88-.14 2.77-.42.4-.12.82.1.94.49.12.4-.1.82-.49.94-1.04.33-2.12.49-3.23.49z" />
    <path d="M20 20.75h-2c-.41 0-.75-.34-.75-.75v-2c0-.41.34-.75.75-.75s.75.34.75.75v1.25H20c.41 0 .75.34.75.75s-.34.75-.75.75zM6 6.75c-.41 0-.75-.34-.75-.75V4.75H4c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h2c.41 0 .75.34.75.75v2c0 .41-.34.75-.75.75zM15.15 11.72c-.8.84-1.93 1.37-3.18 1.37s-2.35-.52-3.16-1.34c-1.35.83-2.23 2.17-2.23 3.67 0 .59.35 1.41 1.99 1.9.92.27 2.13.43 3.43.43s5.42-.17 5.42-2.33c0-1.53-.9-2.87-2.27-3.7z" />
  </svg>
);

// Helper function to get onboarding action based on status
const getOnboardingAction = (
  status: "PENDING" | "IN_PROGRESS" | "ONBOARDED",
  userId: string
) => {
  const handleOnboardingClick = () => {
    window.location.href = `/crew/onboarding?userId=${userId}`;
  };

  switch (status) {
    case "PENDING":
      return (
        <Button
          style={{
            backgroundColor: "#52c41a",
            borderColor: "#52c41a",
            color: "white"
          }}
          icon={<OnboardingIcon />}
          onClick={handleOnboardingClick}
        >
          Start Onboarding
        </Button>
      );
    case "IN_PROGRESS":
      return (
        <Button
          type="primary"
          icon={<OnboardingIcon />}
          title="Continue Onboarding"
          onClick={handleOnboardingClick}
        />
      );
    case "ONBOARDED":
      return null; // No onboarding action needed
    default:
      return null;
  }
};

export const CrewList: React.FC = () => {
  const { tableProps, searchFormProps } = useTable<
    CrewRow,
    HttpError,
    SearchForm
  >({
    // Send a single "q" to the API for name/email search (backend reads req.query.q)
    onSearch: (values) =>
      [
        { field: "q", operator: "contains", value: values.q ?? undefined }
      ] as CrudFilters,
    syncWithLocation: true,
    // Enable server-side sorting and filtering
    sorters: {
      mode: "server"
    },
    filters: {
      mode: "server"
    }
  });

  // Assign drawer modal
  const assignModal = useAssignCrewModal();
  const [assignContext, setAssignContext] = useState<{
    crewId: string;
    dept?: "DECK" | "ENGINE" | "CATERING";
  } | null>(null);

  const invalidate = useInvalidate();
  const { open } = useNotification();
  const { mutate: releaseMutate, mutation } = useCustomMutation();
  const releasing = mutation.isPending;

  const doRelease = (assignmentId: string) => {
    Modal.confirm({
      title: "Release assignment?",
      content: "This will mark the assignment as released as of now.",
      okText: "Release",
      okButtonProps: { danger: true, loading: releasing },
      onOk: () =>
        releaseMutate(
          {
            url: `crew/assignments/${assignmentId}/release`,
            method: "patch",
            values: {}
          },
          {
            onSuccess: async () => {
              open?.({ type: "success", message: "Released" });
              await invalidate({
                resource: "crew",
                invalidates: ["list", "detail"]
              });
            },
            onError: (err: HttpError) =>
              open?.({
                type: "error",
                message: "Release failed",
                description: err?.response?.data?.message ?? err?.message
              })
          }
        )
    });
  };

  return (
    <List title="Crew">
      <Space style={{ marginBottom: 12 }}>
        <Form {...searchFormProps}>
          <Form.Item name="q" style={{ margin: 0 }}>
            <Input.Search placeholder="Search name or email" allowClear />
          </Form.Item>
        </Form>
      </Space>

      <Table {...tableProps} rowKey="id" scroll={{ x: "max-content" }}>
        <Table.Column<CrewRow>
          title="Name"
          dataIndex="name"
          key="name"
          width={150}
          render={(_, r) => (
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {`${r.firstName ?? ""} ${r.lastName ?? ""}`.trim()}
            </div>
          )}
          sorter
        />

        <Table.Column<CrewRow>
          dataIndex="primaryDepartment"
          title="Department"
          key="primaryDepartment"
          width={120}
          className="responsive-column-tablet"
          render={(v) => <TagField value={humanizeEnum(v)} />}
          sorter
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                placeholder="Department"
                allowClear
                options={DEPARTMENTS}
                style={{ width: 180 }}
                value={props.selectedKeys?.[0]}
                onChange={(value) => {
                  props.setSelectedKeys(value ? [value] : []);
                  props.confirm();
                }}
                onClear={() => {
                  props.setSelectedKeys([]);
                  props.clearFilters && props.clearFilters();
                  props.confirm();
                }}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column<CrewRow>
          dataIndex="rank"
          title="Rank"
          key="rank"
          width={140}
          className="responsive-column-desktop"
          render={(v) => (
            <div
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis"
              }}
            >
              {humanizeEnum(v)}
            </div>
          )}
          sorter
          // keeps rank as text search in the dropdown
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Input
                placeholder="Filter rank…"
                allowClear
                value={props.selectedKeys?.[0] || ""}
                onChange={(e) => {
                  props.setSelectedKeys(e.target.value ? [e.target.value] : []);
                }}
                onPressEnter={() => props.confirm()}
                onClear={() => {
                  props.setSelectedKeys([]);
                  props.clearFilters && props.clearFilters();
                  props.confirm();
                }}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column<CrewRow>
          dataIndex="status"
          title="Status"
          key="status"
          width={100}
          className="responsive-column-tablet"
          render={(v) => <StatusTag status={v} />}
          sorter
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                placeholder="Status"
                allowClear
                options={STATUSES}
                style={{ width: 160 }}
                value={props.selectedKeys?.[0]}
                onChange={(value) => {
                  props.setSelectedKeys(value ? [value] : []);
                  props.confirm();
                }}
                onClear={() => {
                  props.setSelectedKeys([]);
                  props.clearFilters && props.clearFilters();
                  props.confirm();
                }}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column<CrewRow>
          dataIndex="onboardingStatus"
          title="Onboarding Status"
          key="onboardingStatus"
          width={160}
          render={(v) => <OnboardingStatusTag status={v} />}
          sorter
          filterDropdown={(props) => (
            <FilterDropdown {...props}>
              <Select
                placeholder="Onboarding Status"
                allowClear
                options={[
                  { label: "Pending", value: "PENDING" },
                  { label: "In Progress", value: "IN_PROGRESS" },
                  { label: "Onboarded", value: "ONBOARDED" }
                ]}
                style={{ width: 180 }}
                value={props.selectedKeys?.[0]}
                onChange={(value) => {
                  props.setSelectedKeys(value ? [value] : []);
                  props.confirm();
                }}
                onClear={() => {
                  props.setSelectedKeys([]);
                  props.clearFilters && props.clearFilters();
                  props.confirm();
                }}
              />
            </FilterDropdown>
          )}
        />
        <Table.Column<CrewRow>
          dataIndex="dateJoined"
          title="Joined"
          key="dateJoined"
          width={120}
          className="responsive-column-desktop"
          render={(v?: string, record?: CrewRow) => {
            const dateToShow = v || record?.user?.createdAt;
            return (
              <div style={{ whiteSpace: "nowrap" }}>
                {dateToShow ? (
                  <DateField value={dateToShow} format="DD MMM YYYY" />
                ) : (
                  "-"
                )}
              </div>
            );
          }}
          sorter
        />

        <Table.Column<CrewRow>
          title="Actions"
          key="actions"
          width={200}
          render={(_, r) => {
            const active = r.VesselAssignment?.[0];
            const onboardingAction = getOnboardingAction(
              r.onboardingStatus,
              r.userId
            );

            return (
              <Space>
                {onboardingAction}
                {r.onboardingStatus !== "PENDING" && (
                  <Button
                    type="primary"
                    icon={<AssignIcon />}
                    title="Assign to Vessel"
                    onClick={() => {
                      setAssignContext({
                        crewId: r.id,
                        dept: r.primaryDepartment || undefined
                      });
                      assignModal.show();
                    }}
                  />
                )}
                {active ? (
                  <Button
                    danger
                    icon={<ReleaseIcon />}
                    title="Release from Vessel"
                    onClick={() => doRelease(active.id)}
                  />
                ) : null}
                {r.onboardingStatus !== "PENDING" && (
                  <ShowButton hideText recordItemId={r.id} />
                )}
                {r.onboardingStatus !== "PENDING" && (
                  <EditButton hideText recordItemId={r.id} />
                )}
                {r.onboardingStatus !== "PENDING" && (
                  <CustomDeactivateButton recordItemId={r.id} />
                )}
              </Space>
            );
          }}
        />
      </Table>
      {/* Drawer lives here to avoid remounting */}
      {assignContext ? (
        <AssignCrewDrawer
          crewId={assignContext.crewId}
          crewDepartment={assignContext.dept}
          modal={assignModal}
        />
      ) : null}
    </List>
  );
};
