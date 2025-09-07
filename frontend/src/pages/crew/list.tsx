import React, { useState } from "react";
import {
  List,
  useTable,
  TagField,
  FilterDropdown,
  ShowButton,
  EditButton,
  DateField,
  DeleteButton
} from "@refinedev/antd";
import { Table, Input, Select, Space, Tag, Button, Modal } from "antd";
import {
  useInvalidate,
  useNotification,
  useCustomMutation
} from "@refinedev/core";
import type { CrudFilters, HttpError } from "@refinedev/core";
import { DEPARTMENTS, STATUSES, humanizeEnum } from "./utils";
import { AssignCrewDrawer } from "./AssignCrewDrawer";
import { useAssignCrewModal } from "./useAssignCrewModal";

type AssignmentLite = {
  id: string;
  assignedAt: string;
  vessel?: { name: string };
};

type CrewRow = {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  primaryDepartment: "DECK" | "ENGINE" | "CATERING";
  rank: string;
  status: "ACTIVE" | "INACTIVE" | "ON_LEAVE";
  dateJoined?: string | null;
  user?: { email: string; createdAt: string };
  VesselAssignment?: AssignmentLite[];
};

type SearchForm = { q?: string };

// Status tag component with colors
const StatusTag: React.FC<{ status: string }> = ({ status }) => {
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
    dept?: CrewRow["primaryDepartment"];
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
        <Input.Search
          placeholder="Search name or email"
          onSearch={(v) => searchFormProps.onFinish?.({ q: v })}
          allowClear
        />
      </Space>

      <Table {...tableProps} rowKey="id">
        <Table.Column<CrewRow>
          title="Name"
          dataIndex="name"
          key="name"
          render={(_, r) => `${r.firstName ?? ""} ${r.lastName ?? ""}`.trim()}
          sorter
        />
        <Table.Column<CrewRow>
          dataIndex={["user", "email"]}
          title="Email"
          key="email"
          sorter
        />
        <Table.Column<CrewRow>
          dataIndex="primaryDepartment"
          title="Department"
          key="primaryDepartment"
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
          render={(v) => humanizeEnum(v)}
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
          dataIndex="dateJoined"
          title="Joined"
          key="dateJoined"
          render={(v?: string, record?: CrewRow) => {
            const dateToShow = v || record?.user?.createdAt;
            return dateToShow ? (
              <DateField value={dateToShow} format="DD MMM YYYY" />
            ) : (
              "-"
            );
          }}
          sorter
        />
        <Table.Column<CrewRow>
          title="Onboard Since"
          key="onboardSince"
          render={(_, r) => {
            const a = r.VesselAssignment?.[0];
            return a ? (
              <DateField value={a.assignedAt} format="DD MMM YYYY" />
            ) : (
              "-"
            );
          }}
        />
        <Table.Column<CrewRow>
          title="Actions"
          key="actions"
          render={(_, r) => {
            const active = r.VesselAssignment?.[0];
            return (
              <Space>
                <Button
                  type="primary"
                  onClick={() => {
                    setAssignContext({
                      crewId: r.id,
                      dept: r.primaryDepartment
                    });
                    assignModal.show();
                  }}
                >
                  Assign
                </Button>
                {active ? (
                  <Button danger onClick={() => doRelease(active.id)}>
                    Release
                  </Button>
                ) : null}
                <ShowButton hideText recordItemId={r.id} />
                <EditButton hideText recordItemId={r.id} />
                <DeleteButton hideText recordItemId={r.id} />
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
