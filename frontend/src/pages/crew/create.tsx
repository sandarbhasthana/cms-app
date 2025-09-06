import React, { useMemo } from "react";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select } from "antd";
import { useSelect } from "@refinedev/antd";
import { useDataProvider } from "@refinedev/core";
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

type CrewCreatePayload = {
  userId: string;
  firstName: string;
  lastName: string;
  primaryDepartment: "DECK" | "ENGINE" | "CATERING";
  rank: VesselRole;
  status?: "ACTIVE" | "INACTIVE" | "ON_LEAVE";
};

export const CrewCreate: React.FC = () => {
  const { formProps, saveButtonProps } = useForm<CrewCreatePayload>({});
  const dataProvider = useDataProvider();

  // Users select — only show CREW-role users ideally.
  // Your dataProvider should translate these filters to ?role=CREW&search=<q>
  const { selectProps: userSelectProps } = useSelect({
    resource: "users",
    optionLabel: "email",
    optionValue: "id",
    filters: [{ field: "role", operator: "eq", value: "CREW" }],
    searchField: "search" // your API supports ?search=
  });

  // Function to split name into first and last name (fallback for users without crew data)
  const splitName = (name: string): { firstName: string; lastName: string } => {
    const parts = (name ?? "").trim().split(/\s+/);
    if (parts.length === 0) return { firstName: "", lastName: "" };
    if (parts.length === 1) return { firstName: parts[0], lastName: "" };
    return {
      firstName: parts.slice(0, -1).join(" "),
      lastName: parts.slice(-1)[0]
    };
  };

  // Handle user selection
  const handleUserSelect = async (userId: string) => {
    if (!userId) return;

    try {
      // Fetch user details including crew data
      const { data: user } = await dataProvider().getOne({
        resource: "users",
        id: userId
      });

      // If user has crew data, use it; otherwise split the name
      if (user.crew) {
        const crew = user.crew;
        formProps.form?.setFieldsValue({
          firstName: crew.firstName,
          lastName: crew.lastName,
          primaryDepartment: crew.primaryDepartment,
          rank: crew.rank
        });
      } else {
        // Fallback: split the user's name
        const { firstName, lastName } = splitName(user.name);
        formProps.form?.setFieldsValue({
          firstName,
          lastName
        });
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  };

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
    <Create saveButtonProps={saveButtonProps} title="Add Crew">
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="User"
          name="userId"
          rules={[{ required: true, message: "Select linked user" }]}
        >
          <Select
            {...userSelectProps}
            showSearch
            placeholder="Search user by email"
            style={{ width: "100%" }}
            onChange={(value) => {
              userSelectProps.onChange?.(value);
              if (typeof value === "string") {
                handleUserSelect(value);
              }
            }}
          />
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
          <Select
            showSearch
            optionFilterProp="label"
            options={roleOptions}
            placeholder="Select rank"
          />
        </Form.Item>

        <Form.Item label="Status" name="status" initialValue="ACTIVE">
          <Select options={STATUSES} />
        </Form.Item>
      </Form>
    </Create>
  );
};
