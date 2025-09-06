import React, { useState } from "react";
import { Show, TagField, DateField } from "@refinedev/antd";
import {
  Typography,
  Descriptions,
  Divider,
  List,
  Tag,
  Space,
  Button,
  Modal
} from "antd";
import {
  useShow,
  useCustomMutation,
  useInvalidate,
  useNotification,
  HttpError
} from "@refinedev/core";
import { humanizeEnum } from "./utils";
import { AssignCrewDrawer } from "./AssignCrewDrawer";
import { useAssignCrewModal } from "./useAssignCrewModal";

const { Title, Text } = Typography;

type Assignment = {
  id: string;
  vesselId: string;
  role: string;
  assignedAt: string;
  releasedAt?: string | null;
  vessel?: { name: string };
};

type CrewDetail = {
  id: string;
  firstName: string;
  lastName: string;
  primaryDepartment: "DECK" | "ENGINE" | "CATERING";
  rank: string;
  status: string;
  dateJoined?: string | null;
  dateLeft?: string | null;
  user?: { email: string; createdAt: string };
  VesselAssignment?: Assignment[];
};

// Status tag component with colors (same as crew list)
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

export const CrewShow: React.FC = () => {
  const { query } = useShow<CrewDetail>();
  const record = query?.data?.data;
  const invalidate = useInvalidate();
  const { open } = useNotification();
  const { mutate: releaseMutate, mutation } = useCustomMutation();
  const releasing = mutation.isPending;

  // Assign drawer
  const assignModal = useAssignCrewModal();
  const [assignOpen, setAssignOpen] = useState(false);

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
                id: record?.id,
                invalidates: ["detail"]
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
    <Show isLoading={query?.isLoading} title="Crew Details">
      <Space align="center" style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => {
            setAssignOpen(true);
            assignModal.show();
          }}
        >
          Assign
        </Button>
        <Title level={4} style={{ margin: 0 }}>
          {record ? `${record.firstName} ${record.lastName}` : "Crew"}
        </Title>
        {record?.status && <StatusTag status={record.status} />}
      </Space>

      <Descriptions bordered size="middle" column={2}>
        <Descriptions.Item label="Email">
          {record?.user?.email ?? "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Department">
          <TagField
            value={record ? humanizeEnum(record.primaryDepartment) : ""}
          />
        </Descriptions.Item>
        <Descriptions.Item label="Rank">
          {record ? humanizeEnum(record.rank) : "-"}
        </Descriptions.Item>
        <Descriptions.Item label="Status">
          <TagField value={record ? humanizeEnum(record.status) : ""} />
        </Descriptions.Item>
        <Descriptions.Item label="Joined">
          {(() => {
            const dateToShow = record?.dateJoined || record?.user?.createdAt;
            return dateToShow ? (
              <DateField value={dateToShow} format="DD MMM YYYY" />
            ) : (
              "-"
            );
          })()}
        </Descriptions.Item>
        <Descriptions.Item label="Left">
          {record?.dateLeft ? (
            <DateField value={record.dateLeft} format="DD MMM YYYY" />
          ) : (
            "-"
          )}
        </Descriptions.Item>
      </Descriptions>

      <Divider />

      <Title level={5}>Assignments (Latest First)</Title>
      <List
        dataSource={record?.VesselAssignment ?? []}
        renderItem={(a) => (
          <List.Item
            key={a.id}
            actions={
              a.releasedAt
                ? []
                : [
                    <Button
                      danger
                      onClick={() => doRelease(a.id)}
                      key="release"
                    >
                      Release
                    </Button>
                  ]
            }
          >
            <List.Item.Meta
              title={`${a.vessel?.name ?? a.vesselId} — ${humanizeEnum(
                a.role
              )}`}
              description={
                <>
                  <Text>From: </Text>
                  <DateField value={a.assignedAt} format="DD MMM YYYY HH:mm" />
                  <Text> &nbsp;To: </Text>
                  {a.releasedAt ? (
                    <DateField
                      value={a.releasedAt}
                      format="DD MMM YYYY HH:mm"
                    />
                  ) : (
                    <Text type="success">Active</Text>
                  )}
                </>
              }
            />
          </List.Item>
        )}
      />
      {record && assignOpen ? (
        <AssignCrewDrawer
          crewId={record.id}
          crewDepartment={record.primaryDepartment}
          modal={assignModal}
        />
      ) : null}
    </Show>
  );
};
