import {
  List,
  useTable,
  CreateButton,
  EditButton,
  DeleteButton
} from "@refinedev/antd";
import { LogicalFilter, useGetIdentity, useNavigation } from "@refinedev/core";
import { Table, Input, Select, Space, notification } from "antd";
import { useEffect, useState } from "react";
import { Role } from "@cms-app/prisma";

const { Option } = Select;

type IUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  orgId: string;
};

export const UserList = () => {
  const { data: identity, isLoading: identityLoading } =
    useGetIdentity<IUser>();
  const { list, edit } = useNavigation();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState<string | undefined>();

  const { tableProps, setFilters, filters } = useTable({
    resource: "users",
    filters: {
      mode: "server"
    },
    sorters: {
      mode: "server"
    }
  });

  // 🚫 Restrict access to authorized roles only
  useEffect(() => {
    if (identityLoading) return;
    const allowedRoles = [Role.ADMIN, Role.SUPER_ADMIN, Role.HR];
    if (
      !identity?.role ||
      !allowedRoles.some((role) => role === identity.role)
    ) {
      notification.error({
        message: "Unauthorized",
        description: "You are not allowed to access this page."
      });
      list("dashboard");
    }
  }, [identity, identityLoading, list]);

  // Sync refine filters → dropdown state (only on initial mount)
  useEffect(() => {
    const roleFilter = filters?.find((f) => "field" in f && f.field === "role");
    if (
      roleFilter &&
      "value" in roleFilter &&
      typeof roleFilter.value === "string"
    ) {
      setSelectedRole(roleFilter.value);
    } else {
      setSelectedRole(undefined);
    }
  }, [filters]);

  const updateFilters = (search?: string, role?: string) => {
    const filters: LogicalFilter[] = [];

    if (search) {
      filters.push({
        field: "search",
        operator: "contains" as const,
        value: search
      });
    }

    if (role) {
      filters.push({
        field: "role",
        operator: "eq" as const,
        value: role
      });
    }

    setFilters(filters.length > 0 ? filters : [], "replace");
  };

  if (identityLoading) return <div>Loading...</div>;

  return (
    <List
      title="Users"
      headerButtons={
        <CreateButton resource="users" title="Add New User">
          Add New User
        </CreateButton>
      }
    >
      <Space style={{ marginBottom: 16 }}>
        <Input.Search
          placeholder="Search by name or email"
          allowClear
          value={searchTerm}
          onChange={(e) => {
            const value = e.target.value;
            setSearchTerm(value);
            updateFilters(value, selectedRole);
          }}
          style={{ width: 250 }}
        />
        <Select
          placeholder="Filter by role"
          allowClear
          value={selectedRole}
          style={{ width: 180 }}
          onChange={(value) => {
            setSelectedRole(value);
            updateFilters(searchTerm, value);
          }}
        >
          {Object.values(Role).map((role) => (
            <Option key={role as string} value={role as string}>
              {role as string}
            </Option>
          ))}
        </Select>
      </Space>

      <Table {...tableProps} rowKey="id">
        <Table.Column
          dataIndex="name"
          title="Name"
          sorter
          render={(_, record: IUser) => (
            <a
              onClick={() => edit("users", record.id)}
              style={{ color: "#1677ff", fontWeight: 500, cursor: "pointer" }}
            >
              {record.name}
            </a>
          )}
        />
        <Table.Column dataIndex="email" title="Email" sorter />
        <Table.Column dataIndex="role" title="Role" sorter />
        <Table.Column dataIndex="orgId" title="Organization ID" />

        {(identity?.role === Role.ADMIN ||
          identity?.role === Role.SUPER_ADMIN) && (
          <Table.Column
            title="Actions"
            dataIndex="actions"
            render={(_, record: IUser) => (
              <Space>
                <EditButton size="small" hideText recordItemId={record.id} />
                <DeleteButton size="small" hideText recordItemId={record.id} />
              </Space>
            )}
          />
        )}
      </Table>
    </List>
  );
};
