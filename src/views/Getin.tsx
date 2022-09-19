import { useState } from "react";
import { Card, Input, Button, Row, Col } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Swal from "sweetalert2";
import clienteAxios from "../config/clientAxios";
import { useNavigate } from "react-router-dom";

function Getin(props: any) {
  const { setAuth } = props;

  let navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const onClickAuth = async () => {
    if (email === "" || password === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else {
      try {
        const res: any = await clienteAxios.post(`/auth`, user);

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("userId", res.data.user._id);
        navigate("/users")
      } catch (error: any) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error?.response?.data?.msg,
        });
      }
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card style={{ width: "50%" }}>
        <h2 style={{ textAlign: "center" }}>Ingresar</h2>
        <br />

        <label htmlFor="">Email</label>
        <Input
          required
          type="email"
          placeholder="Insert Email"
          name="email"
          onChange={onChange}
          value={email}
        />
        <label htmlFor="">password</label>
        <Input.Password
          name="password"
          onChange={onChange}
          value={password}
          style={{ marginBottom: "10px" }}
          placeholder="input password"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
        <br />

        <Row>
          <Col span={12}>
            {" "}
            <Button onClick={onClickAuth} type="primary" block>
              Log in
            </Button>
          </Col>
          <Col span={12}>
            {" "}
            <Button type="link" block onClick={() => setAuth(false)}>
              Sign in
            </Button>
          </Col>
        </Row>
      </Card>
      ;
    </div>
  );
}

export default Getin;
