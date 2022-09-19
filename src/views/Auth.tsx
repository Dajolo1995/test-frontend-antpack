import { useState } from "react";
import { Row, Col } from "antd";
import Getin from "./Getin";
import Register from "./Register";

function Auth() {
  const [auth, setAuth] = useState(true);

  return (
    <Row style={{height: "100vh"}}>
      <Col span={12} style={{background:"#0D0625"}}>{auth === true ? <Getin setAuth={setAuth} /> : null}</Col>
      <Col span={12}>{auth === false ? <Register setAuth={setAuth} /> : null}</Col>
    </Row>
  );
}

export default Auth;
