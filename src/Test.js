import { DownOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Dropdown, message, Space, Tooltip } from "antd";
import React from "react";

const handleMenuClick = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};
const tem = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
    disabled: true,
  },
];
const menuProps = {
  items: tem,
  onClick: handleMenuClick,
};
const App = () => (
  <Dropdown.Button menu={menuProps} placement="bottom" icon={<UserOutlined />}>
    Dropdown
  </Dropdown.Button>
);
export default App;
