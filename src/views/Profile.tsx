import { useState, useEffect } from "react";
import { Row, Col, Image, Input, Select, Button } from "antd";
import clienteAxios from "../config/clientAxios";
import LayoutApp from "../components/layout/LayoutApp";
import Swal from "sweetalert2";
import Country from "../utils/countries.json";

const { Option } = Select;

function Profile() {
  const [dataSource, setDataSource] = useState({
    name: "",
    lastName: "",
    nickName: "",
    email: "",
    country: "",
    city: "",
    phone: "",
    image: "",
  } as any);
  const [test, setTest] = useState(true);

  const id = localStorage.getItem("userId");

  const {
    name,
    image,
    lastName,
    nickName,
    recoverPassword,
    email,
    country,
    city,
    phone,
  } = dataSource;

  const paises =
    country === ""
      ? []
      : Country.countries.filter((f: any) => f.name_en === country);

  const onChange = (e: any) => {
    setDataSource({
      ...dataSource,
      [e.target.name]: e.target.value,
    });
  };

  const handleChange = (value: any) => {
    setDataSource({
      ...dataSource,
      country: value,
    });
  };

  const getData = async () => {
    const res = await clienteAxios.get(`/user/${id}`);

    setDataSource({
      name: res.data.user.name,
      image: "",
      lastName: res.data.user.lastName,
      nickName: res.data.user.nickName,
      email: res.data.user.email,
      country: res.data.user.country,
      city: res.data.user.city,
      phone: res.data.user.phone,
    });

    if (res.data.data > 0) {
      setTest(false);
    }
  };

  useEffect(() => {
    if (test === true) {
      getData();
    }
  }, [test]);

  const onClickSave = async () => {
    if (
      name === "" ||
      lastName === "" ||
      nickName === "" ||
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
    } else {
      try {
        const res: any = await clienteAxios.put(`/user/${id}`, dataSource);

        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "User Update!!",
        });
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
    <LayoutApp>
      {dataSource?.image === "" ? (
        <Image
          style={{ borderRadius: "50%" }}
          width={200}
          height={200}
          src="error"
          fallback="data:image/png;base64,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"
        />
      ) : (
        <Image
          preview={{ visible: false }}
          width={200}
          src={dataSource?.image}
        />
      )}

      <Row style={{ marginTop: "20px" }}>
        <Col span={8} style={{ marginBottom: "20px" }}>
          <Input
            onChange={onChange}
            style={{ width: "98%" }}
            name="name"
            value={name}
          />
        </Col>
        <Col span={8} style={{ marginBottom: "20px" }}>
          <Input
            onChange={onChange}
            style={{ width: "98%" }}
            name="lastName"
            value={lastName}
          />
        </Col>
        <Col span={8} style={{ marginBottom: "20px" }}>
          <Input
            onChange={onChange}
            style={{ width: "98%" }}
            name="nickName"
            value={nickName}
          />
        </Col>

        <Col span={6} style={{ marginBottom: "20px" }}>
          <Input
            onChange={onChange}
            style={{ width: "98%" }}
            name="name"
            value={email}
          />
        </Col>
        <Col span={6} style={{ marginBottom: "20px" }}>
          <Select
            onChange={handleChange}
            style={{ width: "98%" }}
            placeholder={country}
          >
            {Country.countries.map((m: any) => (
              <Option value={m.name_en}>{m.name_en}</Option>
            ))}
          </Select>
        </Col>
        <Col span={6} style={{ marginBottom: "20px" }}>
          <Input
            onChange={onChange}
            style={{ width: "98%" }}
            name="lastName"
            value={city}
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
        <Col span={6} style={{ marginBottom: "20px" }}>
          <Input
            onChange={onChange}
            style={{ width: "98%" }}
            name="nickName"
            value={phone}
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

      <Row style={{ marginTop: "20px" }}>
        <Col span={24} style={{ marginBottom: "20px" }}>
          <Button onClick={onClickSave} type="primary" block>
            Save
          </Button>
        </Col>
      </Row>
    </LayoutApp>
  );
}

export default Profile;
