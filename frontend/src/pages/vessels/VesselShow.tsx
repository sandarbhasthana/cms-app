// src/pages/vessels/VesselShow.tsx
import { Show, EditButton } from "@refinedev/antd";
import {
  Descriptions,
  Tag,
  Space,
  Typography,
  Divider,
  Card,
  Table,
  Form,
  Input,
  DatePicker,
  Modal,
  Select,
  Button
} from "antd";
import { useCustom, useShow, useCustomMutation } from "@refinedev/core";
import dayjs from "dayjs";
import { useState } from "react";
import { useDocumentTitle } from "@refinedev/react-router";

type RankRequirement = { role: string; requiredCount: number };
type Vessel = {
  id: string;
  name: string;
  imoNumber: string;
  vesselType?: string;
  engineMake?: string;
  tonnageUnit?: string;
  inspectionDueDate?: string | null;
  createdAt?: string;
  updatedAt?: string;
  rankRequirements?: RankRequirement[];
};

const { Title } = Typography;

const InspectionBadge: React.FC<{ iso?: string | null }> = ({ iso }) => {
  if (!iso) return <Tag>—</Tag>;
  const due = dayjs(iso);
  const daysLeft = Math.ceil(due.diff(dayjs(), "day", true));
  if (daysLeft < 0)
    return <Tag color="error">Overdue by {Math.abs(daysLeft)}d</Tag>;
  if (daysLeft === 0) return <Tag color="error">Due today</Tag>;
  if (daysLeft <= 7) return <Tag color="warning">Due in {daysLeft}d</Tag>;
  if (daysLeft <= 30) return <Tag color="processing">In {daysLeft}d</Tag>;
  return <Tag>{due.format("DD MMM YYYY")}</Tag>;
};

const OccupancyTag: React.FC<{ vesselId: string }> = ({ vesselId }) => {
  const { query } = useCustom<{
    vesselId: string;
    occupancy: number;
  }>({
    url: `/vessels/${vesselId}/occupancy`,
    method: "get",
    queryOptions: { staleTime: 10_000 }
  });
  const { data, isLoading } = query;
  const occ = data?.data?.occupancy ?? 0;
  return <Tag>{isLoading ? "…" : `On board: ${occ}`}</Tag>;
};

export default function VesselShow() {
  const { query } = useShow<Vessel>();
  const { data, isLoading } = query;
  const record = data?.data;
  useDocumentTitle(record ? `${record.name} (${record.imoNumber})` : "Vessel");

  return (
    <Show
      isLoading={isLoading}
      title={record ? record.name : "Vessel"}
      headerButtons={() => (
        <Space>
          {record?.id && (
            <EditButton resource="vessels" recordItemId={record.id} />
          )}
        </Space>
      )}
      breadcrumb={false}
    >
      {record && (
        <Space direction="vertical" size={16} style={{ width: "100%" }}>
          <Card>
            <Space
              align="baseline"
              size={12}
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <Title level={4} style={{ margin: 0 }}>
                {record.name}
              </Title>
              <Space>
                <OccupancyTag vesselId={record.id} />
                <InspectionBadge iso={record.inspectionDueDate ?? null} />
              </Space>
            </Space>

            <Divider />

            <Descriptions bordered size="middle" column={2}>
              <Descriptions.Item label="IMO Number">
                {record.imoNumber}
              </Descriptions.Item>
              <Descriptions.Item label="Vessel Type">
                {record.vesselType
                  ? record.vesselType.replaceAll("_", " ")
                  : "—"}
              </Descriptions.Item>
              <Descriptions.Item label="Engine Make">
                {record.engineMake || "—"}
              </Descriptions.Item>
              <Descriptions.Item label="Tonnage Unit">
                {record.tonnageUnit || "—"}
              </Descriptions.Item>
              <Descriptions.Item label="Inspection Due">
                <InspectionBadge iso={record.inspectionDueDate ?? null} />
              </Descriptions.Item>
              <Descriptions.Item label="Updated">
                {record.updatedAt
                  ? dayjs(record.updatedAt).format("DD MMM YYYY, HH:mm")
                  : "—"}
              </Descriptions.Item>
            </Descriptions>
          </Card>

          <Card title="Rank Requirements">
            <Table
              rowKey={(r) => r.role}
              dataSource={record.rankRequirements ?? []}
              pagination={false}
              columns={[
                { title: "Role", dataIndex: "role" },
                {
                  title: "Required Count",
                  dataIndex: "requiredCount",
                  width: 160
                }
              ]}
              locale={{ emptyText: "No rank requirements configured" }}
            />
          </Card>

          <CrewTab vesselId={record.id} />
        </Space>
      )}
    </Show>
  );
}

/** ---------------- Crew Tab ---------------- */

type CrewRow = {
  id: string; // assignment id
  role: string;
  assignedAt: string;
  releasedAt?: string | null;
  crew: { id: string; firstName: string; lastName: string; rank?: string };
};

const CrewTab: React.FC<{ vesselId: string }> = ({ vesselId }) => {
  const [refreshKey, setRefreshKey] = useState(0);

  const { query } = useCustom<CrewRow[]>({
    url: `/vessels/${vesselId}/crew`,
    method: "get",
    queryOptions: {
      staleTime: 5_000,
      queryKey: ["crew", vesselId, refreshKey]
    }
  });
  const { data, isLoading } = query;

  const { query: gapQuery } = useCustom<
    Array<{
      role: string;
      required: number;
      onboard: number;
      shortfall: number;
    }>
  >({
    url: `/vessels/${vesselId}/requirements-gap`,
    method: "get",
    queryOptions: {
      staleTime: 5_000,
      queryKey: ["gap", vesselId, refreshKey]
    }
  });
  const { data: gapData } = gapQuery;

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={16}>
      <Card
        title="Assignments (Active)"
        extra={
          <AssignCrewButton
            vesselId={vesselId}
            onSuccess={() => setRefreshKey((k) => k + 1)}
          />
        }
      >
        <Table<CrewRow>
          rowKey="id"
          loading={isLoading}
          dataSource={data?.data ?? []}
          pagination={false}
          columns={[
            {
              title: "Crew",
              render: (_, r) => `${r.crew.firstName} ${r.crew.lastName}`
            },
            { title: "Rank", render: (_, r) => r.crew.rank || "—" },
            { title: "Role on Vessel", dataIndex: "role" },
            {
              title: "Assigned At",
              dataIndex: "assignedAt",
              render: (v) => dayjs(v).format("DD MMM YYYY")
            },
            {
              title: "Actions",
              render: (_, r) => (
                <ReleaseButton
                  assignmentId={r.id}
                  onSuccess={() => setRefreshKey((k) => k + 1)}
                />
              ),
              width: 140
            }
          ]}
          locale={{ emptyText: "No active assignments" }}
        />
      </Card>

      <Card title="Requirements Coverage">
        <Table
          rowKey={(r) => r.role}
          dataSource={gapData?.data ?? []}
          pagination={false}
          columns={[
            { title: "Role", dataIndex: "role" },
            { title: "Required", dataIndex: "required" },
            { title: "Onboard", dataIndex: "onboard" },
            {
              title: "Shortfall",
              dataIndex: "shortfall",
              render: (v: number) =>
                v > 0 ? (
                  <Tag color="error">{v}</Tag>
                ) : (
                  <Tag color="success">0</Tag>
                )
            }
          ]}
        />
      </Card>
    </Space>
  );
};

const AssignCrewButton: React.FC<{
  vesselId: string;
  onSuccess: () => void;
}> = ({ vesselId, onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  const { mutate, mutation } = useCustomMutation();

  // simple crew search by name; swap to your actual endpoint if different
  const [crewSearch, setCrewSearch] = useState("");
  const { query: crewQuery } = useCustom<
    { id: string; firstName: string; lastName: string; rank?: string }[]
  >({
    url: `/crew${crewSearch ? `?q=${encodeURIComponent(crewSearch)}` : ""}`,
    method: "get"
  });
  const { data: crewOptions } = crewQuery;

  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        Assign crew
      </Button>
      <Modal
        title="Assign crew"
        open={open}
        onCancel={() => setOpen(false)}
        onOk={() => form.submit()}
        confirmLoading={mutation.isPending}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={(values) => {
            const payload = {
              vesselId,
              crewId: values.crewId,
              role: values.role,
              assignedAt: values.assignedAt
                ? values.assignedAt.toISOString()
                : undefined
            };
            mutate(
              {
                url: `/assignments`,
                method: "post",
                values: payload
              },
              {
                onSuccess: () => {
                  setOpen(false);
                  form.resetFields();
                  onSuccess();
                }
              }
            );
          }}
        >
          <Form.Item name="crewId" label="Crew" rules={[{ required: true }]}>
            <Select
              showSearch
              placeholder="Search crew..."
              filterOption={false}
              onSearch={setCrewSearch}
              options={(crewOptions?.data ?? []).map(
                (c: {
                  id: string;
                  firstName: string;
                  lastName: string;
                  rank?: string;
                }) => ({
                  value: c.id,
                  label: `${c.firstName} ${c.lastName}${
                    c.rank ? ` • ${c.rank}` : ""
                  }`
                })
              )}
            />
          </Form.Item>
          <Form.Item
            name="role"
            label="Role on vessel"
            rules={[{ required: true }]}
          >
            <Input placeholder="e.g., Chief Engineer" />
          </Form.Item>
          <Form.Item name="assignedAt" label="Assigned at">
            <DatePicker style={{ width: "100%" }} />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

const ReleaseButton: React.FC<{
  assignmentId: string;
  onSuccess: () => void;
}> = ({ assignmentId, onSuccess }) => {
  const { mutate, mutation } = useCustomMutation();
  return (
    <Button
      danger
      loading={mutation.isPending}
      onClick={() =>
        mutate(
          {
            url: `/assignments/${assignmentId}/release`,
            method: "patch",
            values: {}
          },
          { onSuccess }
        )
      }
    >
      Release
    </Button>
  );
};
