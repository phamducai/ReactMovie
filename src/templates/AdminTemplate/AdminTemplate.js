import React from "react";
import { PieChartOutlined, UserOutlined } from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LayDanhSachKhachHang } from "redux/actions/QuanLyNguoiDungAction";
const { Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem(<Link to="/admin">User</Link>, "1", <UserOutlined />),

  getItem("Films", "sub1", <PieChartOutlined />, [
    getItem(<Link to="/admin/films">Films</Link>, "2"),
    getItem(<Link to="/admin/films/addfilm">Add Film</Link>, "3"),
  ]),
];

export default function AdminTemplate() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(LayDanhSachKhachHang());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();

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
        <img
          src="https://cyberlearn.vn/wp-content/uploads/2020/03/cyberlearn-min-new-opt2.png"
          alt="haha"
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
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
}
