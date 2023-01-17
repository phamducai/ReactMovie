import { DesktopOutlined, FileOutlined, UserOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useState } from "react";
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User", "1", <UserOutlined />),
  getItem("Film", "2", <FileOutlined />),
  getItem("ShowTime", "3", <DesktopOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [render, updateRender] = useState(1);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleClick = (menu) => {
    updateRender(menu.key);
  };

  const style = {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const components = {
    1: <div style={style}>Option 1</div>,
    2: <div style={style}>Option 2</div>,
    3: <div style={style}>Option 3</div>,
    4: <div style={style}>Option 4</div>,
  };

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="logo p-4">
          <img
            src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
            alt="..."
            width="100%"
          />
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={handleClick}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <div>{components[render]}</div>
          </Content>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;
