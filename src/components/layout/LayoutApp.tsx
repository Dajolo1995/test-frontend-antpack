import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, Button } from "antd";
import React, { useState } from "react";
import Menus from "./Menu";
import "../../css/layoutApp.css";
import styled from "@emotion/styled";
import {useNavigate} from "react-router-dom"

const DIV = styled.div`
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
`;

const { Header, Content, Footer, Sider } = Layout;






function LayoutApp({ children }: any) {


  const navigate = useNavigate()

  const onClick =() => {
    localStorage.removeItem("token")
    localStorage.removeItem("userId")
    navigate("/")
  }


  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <DIV></DIV>
        <Menus />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
            display: "flex",
            justifyContent: "right",
            alignItems: "center",
          }}
        >
          <Button type="link" onClick={onClick} >Exit</Button>
        </Header>
        <Content style={{ margin: "0 16px", padding: "20px" }}>
          {children}
        </Content>
        <Footer style={{ textAlign: "center" }}>©2022</Footer>
      </Layout>
    </Layout>
  );
}

export default LayoutApp;
