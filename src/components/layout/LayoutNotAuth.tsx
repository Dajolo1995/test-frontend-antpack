import { Layout, Divider } from "antd";
import "../../css/layout.css";
import React from "react";

import Footers from "./Footers";

const { Header, Footer, Content } = Layout;

function LayoutNotAuth({ children }: any) {
  return (
    <Layout style={{ background: "#fff" }}>
      <Header style={{ background: "#fff" }}>
        <h3>MAGAZINE</h3>
      </Header>

      <Content
        style={{
          margin: "20px",
          padding: "20px",
          overflow: "initial",
          minHeight: "78vh",
          background: "#fff",
        }}
      >
        {children}
      </Content>
      <Footer style={{ background: "#f7f7f7" }}>
        <Footers />
      </Footer>
    </Layout>
  );
}

export default LayoutNotAuth;
