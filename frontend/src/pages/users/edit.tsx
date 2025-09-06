// src/pages/users/edit.tsx
import { Edit, useForm } from "@refinedev/antd";
import { Form, Input, Select, Skeleton } from "antd";
import { useGetIdentity } from "@refinedev/core";
import { useParams } from "react-router-dom";
import { Role } from "@cms-app/prisma";

const { Option } = Select;

type IUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  orgId: string;
};

export const UserEdit = () => {
  const { id } = useParams();
  const { data: identity, isLoading: identityLoading } =
    useGetIdentity<IUser>();

  const { formProps, saveButtonProps, formLoading } = useForm<IUser>({
    resource: "users",
    action: "edit",
    id: id,
    redirect: "list"
  });

  const isSuperAdmin = identity?.role === Role.SUPER_ADMIN;

  return (
    <Edit saveButtonProps={saveButtonProps} title="Edit">
      {formLoading || identityLoading ? (
        <Skeleton active />
      ) : (
        <Form {...formProps} layout="vertical">
          <Form.Item label="Name" name="name" rules={[{ required: true }]}>
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, type: "email" }]}
          >
            <Input disabled={!isSuperAdmin} />
          </Form.Item>

          <Form.Item label="Role" name="role" rules={[{ required: true }]}>
            <Select disabled={!isSuperAdmin}>
              {Object.values(Role).map((role) => (
                <Option key={role as string} value={role as string}>
                  {role as string}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="New Password"
            name="password"
            tooltip="Leave blank to keep current password"
          >
            <Input.Password placeholder="Leave blank to keep current password" />
          </Form.Item>
        </Form>
      )}
    </Edit>
  );
};
