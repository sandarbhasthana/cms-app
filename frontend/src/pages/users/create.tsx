// src/pages/users/create.tsx
import { useGetIdentity, useNavigation } from "@refinedev/core";
import { Create, useForm } from "@refinedev/antd";
import { Form, Input, Select, Card, notification } from "antd";
import { useEffect } from "react";
import { Role } from "@cms-app/prisma";

type IUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  orgId: string;
};

export const UserCreate = () => {
  const { data: identity, isLoading: identityLoading } =
    useGetIdentity<IUser>();
  const { list } = useNavigation();

  // 🚫 Restrict non-admins
  useEffect(() => {
    // Don't check authorization until identity is loaded
    if (identityLoading) return;

    if (identity?.role !== Role.ADMIN && identity?.role !== Role.SUPER_ADMIN) {
      notification.error({
        message: "Unauthorized",
        description: "You are not allowed to access this page."
      });
      list("users"); // redirect
    }
  }, [identity, identityLoading, list]);

  const { formProps, saveButtonProps } = useForm({
    resource: "users",
    redirect: "list"
  });

  // Show loading while checking identity
  if (identityLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Create title="Add New User" saveButtonProps={saveButtonProps}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
          padding: "20px"
        }}
      >
        <Card
          style={{
            width: "100%",
            maxWidth: 500,
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
          }}
        >
          <Form {...formProps} layout="vertical">
            <Form.Item
              label="Full Name"
              name="name"
              rules={[{ required: true, message: "Please enter name" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Please enter email" },
                { type: "email", message: "Enter valid email" }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please enter password" },
                { min: 6, message: "Password must be at least 6 characters" }
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              label="Role"
              name="role"
              rules={[{ required: true, message: "Please select a role" }]}
            >
              <Select placeholder="Select role">
                {Object.values(Role).map((role) => (
                  <Select.Option key={role as string} value={role as string}>
                    {role as string}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </Create>
  );
};
