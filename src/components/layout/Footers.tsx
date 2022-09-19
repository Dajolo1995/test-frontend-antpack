import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Row, Col } from "antd";
import Icon, {
  FacebookOutlined,
  TwitterOutlined,
  GithubOutlined,
} from "@ant-design/icons";
{
}

function Footers() {
  return (
    <>
      <Row>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "28px" }}>
            {" "}
            <FacebookOutlined />{" "}
          </p>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "28px" }}>
            {" "}
            <TwitterOutlined />{" "}
          </p>
        </Col>
        <Col span={8} style={{ display: "flex", justifyContent: "center" }}>
          <p style={{ fontSize: "28px" }}>
            {" "}
            <GithubOutlined />{" "}
          </p>
        </Col>
      </Row>

      <Row>
        <Col span={24} style={{ display: "flex", justifyContent: "right" }}>
          <Link to="/auth" style={{ textAlign: "center" }}>
            LOGIN
          </Link>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <h2 style={{ textAlign: "center" }}>©2022</h2>
        </Col>
      </Row>
    </>
  );
}

export default Footers;
