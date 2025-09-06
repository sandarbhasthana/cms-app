import React, { useEffect, useState } from "react";
import { List, useTable, EditButton, DeleteButton } from "@refinedev/antd";
import { Table, Space, Input, Select, InputNumber, Tag, Checkbox } from "antd";
import { DateField } from "@refinedev/antd";
import { useCustom } from "@refinedev/core";
import type { BaseRecord, LogicalFilter } from "@refinedev/core";
import { vesselTypeOptions } from "../../constants/vesselDropdowns";
import { useNavigation } from "@refinedev/core";

const VesselTypeCell: React.FC<{ value?: string }> = ({ value }) =>
  value ? <Tag>{value.replaceAll("_", " ")}</Tag> : <>—</>;

const OccupancyTag: React.FC<{ id: string }> = ({ id }) => {
  const { query } = useCustom<{
    vesselId: string;
    occupancy: number;
  }>({
    url: `/vessels/${id}/occupancy`,
    method: "get",
    queryOptions: { staleTime: 10_000 }
  });
  const { data, isLoading } = query;
  const occ = data?.data?.occupancy ?? 0;
  return <Tag>{isLoading ? "…" : `On board: ${occ}`}</Tag>;
};

export const VesselList = () => {
  // Manual state management for better control
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedVesselType, setSelectedVesselType] = useState<
    string | undefined
  >();
  const [dueInDays, setDueInDays] = useState<number | undefined>();
  const [overdue, setOverdue] = useState<boolean>(false);
  const { show } = useNavigation();

  const { tableProps, setFilters, filters } = useTable({
    resource: "vessels",
    filters: {
      mode: "server"
    },
    sorters: {
      mode: "server"
    },
    syncWithLocation: true
  });

  // Sync URL filters to local state on initial load
  useEffect(() => {
    if (filters && filters.length > 0) {
      filters.forEach((filter) => {
        if ("field" in filter && "value" in filter) {
          if (filter.field === "q") {
            setSearchQuery(filter.value as string);
          } else if (filter.field === "vesselType") {
            setSelectedVesselType(filter.value as string);
          } else if (filter.field === "dueInDays") {
            setDueInDays(filter.value as number);
          } else if (filter.field === "overdue") {
            setOverdue(filter.value as boolean);
          }
        }
      });
    } else {
      // Reset state when no filters
      setSearchQuery("");
      setSelectedVesselType(undefined);
      setDueInDays(undefined);
      setOverdue(false);
    }
  }, [filters]);

  // Update filters function
  const updateFilters = (
    query?: string,
    vesselType?: string,
    dueInDays?: number,
    overdue?: boolean
  ) => {
    const newFilters: LogicalFilter[] = [];

    if (query) {
      newFilters.push({
        field: "q",
        operator: "contains",
        value: query
      });
    }

    if (vesselType) {
      newFilters.push({
        field: "vesselType",
        operator: "eq",
        value: vesselType
      });
    }

    if (dueInDays) {
      newFilters.push({
        field: "dueInDays",
        operator: "eq",
        value: dueInDays
      });
    }

    if (overdue === true) {
      newFilters.push({
        field: "overdue",
        operator: "eq",
        value: true
      });
    }

    setFilters(newFilters.length > 0 ? newFilters : [], "replace");
  };

  return (
    <List title="Vessels" breadcrumb={false}>
      {/* Filter bar */}
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search name / IMO / company"
          allowClear
          value={searchQuery}
          onChange={(e) => {
            const value = e.target.value;
            setSearchQuery(value);
            updateFilters(value, selectedVesselType, dueInDays, overdue);
          }}
          style={{ width: 250 }}
        />
        <Select
          allowClear
          placeholder="Vessel type"
          value={selectedVesselType}
          options={vesselTypeOptions}
          style={{ minWidth: 180 }}
          onChange={(value) => {
            setSelectedVesselType(value);
            updateFilters(searchQuery, value, dueInDays, overdue);
          }}
        />
        <InputNumber
          min={1}
          placeholder="Inspection due in (days)"
          value={dueInDays}
          onChange={(value) => {
            setDueInDays(value || undefined);
            updateFilters(
              searchQuery,
              selectedVesselType,
              value || undefined,
              overdue
            );
          }}
          style={{ width: 200 }}
        />
        <Checkbox
          checked={overdue}
          onChange={(e) => {
            const checked = e.target.checked;
            setOverdue(checked);
            updateFilters(searchQuery, selectedVesselType, dueInDays, checked);
          }}
        >
          Overdue
        </Checkbox>
      </Space>

      <Table {...tableProps} rowKey="id">
        <Table.Column
          title="Ship Name"
          dataIndex="name"
          render={(value: string, record: BaseRecord) => (
            <a onClick={() => record.id && show("vessels", record.id)}>
              {value}
            </a>
          )}
        />
        <Table.Column title="IMO Number" dataIndex="imoNumber" />
        <Table.Column
          title="Vessel Type"
          dataIndex="vesselType"
          render={(v?: string) => <VesselTypeCell value={v} />}
        />
        <Table.Column title="Engine Make" dataIndex="engineMake" />
        <Table.Column title="Tonnage Unit" dataIndex="tonnageUnit" />
        <Table.Column
          title="Created At"
          dataIndex="createdAt"
          render={(value) => <DateField value={value} />}
        />
        {/* Optional Occupancy column */}
        <Table.Column
          title="Occupancy"
          dataIndex="id"
          render={(id: string) => <OccupancyTag id={id} />}
        />
        <Table.Column
          title="Inspection Due"
          dataIndex="inspectionDueDate"
          render={(value: string | null) => {
            if (!value) return "—";

            const due = new Date(value);
            const now = new Date();
            const msPerDay = 1000 * 60 * 60 * 24;
            const daysLeft = Math.ceil(
              (due.getTime() - now.getTime()) / msPerDay
            );

            let color:
              | "default"
              | "success"
              | "processing"
              | "error"
              | "warning" = "default";
            let label = "";

            if (daysLeft < 0) {
              color = "error";
              label = `Overdue by ${Math.abs(daysLeft)}d`;
            } else if (daysLeft === 0) {
              color = "error";
              label = "Due today";
            } else if (daysLeft <= 7) {
              color = "warning";
              label = `Due in ${daysLeft}d`;
            } else if (daysLeft <= 30) {
              color = "processing";
              label = `In ${daysLeft}d`;
            } else {
              color = "success";
              label = `In ${daysLeft}d`;
            }

            return (
              <Space size={6}>
                {Intl.DateTimeFormat(undefined, { dateStyle: "medium" }).format(
                  due
                )}
                <Tag color={color}>{label}</Tag>
              </Space>
            );
          }}
        />
        <Table.Column
          title="Actions"
          dataIndex="actions"
          render={(_, record: BaseRecord) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
