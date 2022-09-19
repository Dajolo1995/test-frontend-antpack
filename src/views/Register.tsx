import { useState } from "react";
import { Card, Input, Button, Row, Col, Select } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import Country from "../utils/countries.json";
import Swal from "sweetalert2";
import clienteAxios from "../config/clientAxios";

const { Option } = Select;

function Register(props: any) {
  const { setAuth } = props;

  const [user, setUser] = useState({
    name: "",
    lastName: "",
    nickName: "",
    password: "",
    recoverPassword: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    status: false,
    deletedAt: null,
  });

  const {
    name,
    lastName,
    nickName,
    password,
    recoverPassword,
    email,
    country,
    city,
    phone,
  } = user;

  const onChange = (e: any) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  console.log(user);

  const handleChange = (value: any) => {
    setUser({
      ...user,
      country: value,
    });
  };

  const paises =
    country === ""
      ? []
      : Country.countries.filter((f: any) => f.name_en === country);

  const onSaveData = async () => {
    if (
      name === "" ||
      lastName === "" ||
      nickName === "" ||
      password === "" ||
      recoverPassword === "" ||
      email === "" ||
      country === "" ||
      city === "" ||
      phone === ""
    ) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else if (password !== recoverPassword) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Passwords are not similar!",
      });
    } else {
      try {
        const res: any = await clienteAxios.post(`/user`, user);

        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "User create Ok!",
        });
        setAuth(true);
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
      <Card style={{ width: "70%", border: "1px solid #000" }}>
        <h2 style={{ textAlign: "center" }}>Register</h2>

        <Row>
          <Col span={8}>
            <label htmlFor="">Name</label>
            <Input
              name="name"
              value={name}
              onChange={onChange}
              style={{ width: "98%" }}
              size="small"
              required
              placeholder="name"
            />
          </Col>

          <Col span={8}>
            <label htmlFor="">LastName</label>
            <Input
              name="lastName"
              value={lastName}
              style={{ width: "98%" }}
              size="small"
              required
              placeholder="last name"
              onChange={onChange}
            />
          </Col>

          <Col span={8}>
            <label htmlFor="">Nickname</label>
            <Input
              name="nickName"
              value={nickName}
              style={{ width: "98%" }}
              size="small"
              required
              placeholder="Nickname"
              onChange={onChange}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="">Email</label>
            <Input
              type="email"
              name="email"
              value={email}
              style={{ width: "98%" }}
              size="small"
              required
              placeholder="Email"
              onChange={onChange}
            />
          </Col>

          <Col span={12}>
            <label htmlFor="">password</label>
            <Input.Password
              name="password"
              value={password}
              onChange={onChange}
              size="small"
              style={{ marginBottom: "10px", width: "98%" }}
              placeholder="input password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="">Recover Password</label>
            <Input.Password
              name="recoverPassword"
              value={recoverPassword}
              onChange={onChange}
              size="small"
              style={{ marginBottom: "10px", width: "98%" }}
              placeholder="input recover password"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="">Country</label>
            <Select
              placeholder="country"
              size="small"
              onChange={handleChange}
              style={{ width: "98%" }}
            >
              {Country.countries.map((m: any) => (
                <Option value={m.name_en}>{m.name_en}</Option>
              ))}
            </Select>
          </Col>

          <Col span={12}>
            <label htmlFor="">phone</label>
            <Input
              name="phone"
              value={phone}
              onChange={onChange}
              style={{ width: "98%" }}
              size="small"
              required
              placeholder="Phone"
              prefix={
                <>
                  {paises.length === 0 ? null : (
                    <img
                      src={`https://flagcdn.com/16x12/${paises[0]?.code?.toLowerCase()}.png`}
                      width="16"
                      height="12"
                      alt="Sudáfrica"
                    />
                  )}
                </>
              }
            />
          </Col>

          <Col span={12}>
            <label htmlFor="">City</label>
            <Input
              name="city"
              value={city}
              onChange={onChange}
              style={{ width: "98%" }}
              size="small"
              required
              placeholder="City"
              prefix={
                <>
                  {paises.length === 0 ? null : (
                    <img
                      src={`https://flagcdn.com/16x12/${paises[0]?.code?.toLowerCase()}.png`}
                      width="16"
                      height="12"
                      alt="Sudáfrica"
                    />
                  )}
                </>
              }
            />
          </Col>
        </Row>

        <br />

        <Row>
          <Col span={12}>
            {" "}
            <Button onClick={onSaveData} type="primary" block>
              Register
            </Button>
          </Col>
          <Col span={12}>
            {" "}
            <Button type="link" block onClick={() => setAuth(true)}>
              Sign Up
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}

export default Register;
