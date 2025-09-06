import type { RefineThemedLayoutHeaderProps } from "@refinedev/antd";
import { useGetIdentity } from "@refinedev/core";
import { getAvatarColors } from "../../utils/color.utils";
import {
  Layout as AntdLayout,
  Avatar,
  Space,
  Switch,
  theme,
  Typography
} from "antd";
import React, { useContext } from "react";
import { ColorModeContext } from "../../contexts/color-mode";

const { useToken } = theme;

type IUser = {
  id: string;
  email: string;
  name: string;
  role: string;
  orgId: string;
};

export const Header: React.FC<RefineThemedLayoutHeaderProps> = ({
  sticky = true
}) => {
  const { token } = useToken();
  const { data: user } = useGetIdentity<IUser>();
  const { mode, setMode } = useContext(ColorModeContext);

  const headerStyles: React.CSSProperties = {
    backgroundColor: token.colorBgElevated,
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    padding: "0px 24px",
    height: "64px"
  };

  const name = user?.name || user?.email || user?.role || "U";
  const initials = name
    .split(" ")
    .map((part) => part.charAt(0)) // + part.charAt(1)
    //.map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const colors = getAvatarColors(name);

  if (sticky) {
    headerStyles.position = "sticky";
    headerStyles.top = 0;
    headerStyles.zIndex = 1;
  }

  return (
    <AntdLayout.Header style={headerStyles}>
      <Space>
        <Switch
          checkedChildren="🌛"
          unCheckedChildren="🔆"
          onChange={() => setMode(mode === "light" ? "dark" : "light")}
          defaultChecked={mode === "dark"}
        />
        {/* For Auth0 users */}
        {/* {user?.name && <Text strong>{user.name}</Text>}
          {user?.avatar && <Avatar src={user?.avatar} alt={user?.name} />} */}
        {user ? (
          <Space style={{ marginLeft: "8px" }} size={"middle"}>
            <Typography.Text strong>
              {user.name || user.email}
              {/* ({user.role}) */}
            </Typography.Text>
            <Avatar style={colors}>{initials}</Avatar>
          </Space>
        ) : (
          <Typography.Text type="secondary">Not Logged In</Typography.Text>
        )}
      </Space>
    </AntdLayout.Header>
  );
};
