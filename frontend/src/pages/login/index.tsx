import { useLogin } from "@refinedev/core";
import { Form, Input, Button, Card, Typography } from "antd";
import { LockOutlined, MailOutlined } from "@ant-design/icons";

const { Title } = Typography;

export default function LoginPage() {
  const { mutate: login, isPending } = useLogin();

  const onFinish = (values: { email: string; password: string }) => {
    login(values);
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5"
      }}
    >
      <Card style={{ width: 360, padding: 24, boxShadow: "0 4px 12px #ccc" }}>
        <Title level={3} style={{ textAlign: "center" }}>
          Login to CMS
        </Title>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
          >
            <Input prefix={<MailOutlined />} placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your password" }]}
          >
            <Input.Password prefix={<LockOutlined />} placeholder="Password" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" loading={isPending} block>
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
