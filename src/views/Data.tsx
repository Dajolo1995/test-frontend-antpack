import { useState, useEffect } from "react";
import LayoutApp from "../components/layout/LayoutApp";
import { Row, Col, Button, Modal, Input } from "antd";
import clienteAxios from "../config/clientAxios";
import { SearchOutlined } from "@ant-design/icons";
import DataAuth from "../components/dataAuth/DataAuth";
import CreateData from "../components/dataAuth/CreateData";
import { useNavigate } from "react-router-dom";

function Data() {
  const navigate = useNavigate();

  const id = localStorage.getItem("userId");

  const [dataSource, setDataSource] = useState([]);
  const [copia, setCopia] = useState([]);
  const [test, setTest] = useState(true);
  const [filter, setFilter] = useState("");
  const getData = async () => {
    try {
      const res = await clienteAxios.get(`/datas/${id}`);

      setCopia(res.data.response.data);
      setDataSource(res.data.response.data);

      if (res?.data?.response?.data > 0) {
        setTest(false);
      }



      if (!res?.data?.response?.data) setTest(false);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearchs = (value: any) => {
    let filters: any;
    if (value === "") {
      setDataSource(copia);
      filters = copia;
    } else {
      filters = copia.filter(
        (u: any) =>
          u.id === value ||
          u.title.toLowerCase().includes(value.toLowerCase()) ||
          u.body.toLowerCase().includes(value.toLowerCase())
      );
    }
    setDataSource(filters);
  };

  useEffect(() => {
    if (test === true) {
      getData();
    }
  }, [test]);

  useEffect(() => {
    onSearchs(filter);
    // eslint-disable-next-line
  }, [filter]);

  const showModal = () => {
    navigate("/create-data");
  };

  return (
    <LayoutApp>
      <Row>
        <Col span={12}>
          <Input
            name="filter"
            onChange={(e: any) => setFilter(e.target.value)}
            size="small"
            placeholder="Search"
            suffix={<SearchOutlined />}
          />
        </Col>
        <Col span={12} style={{ display: "flex", justifyContent: "right" }}>
          <Button
            onClick={showModal}
            style={{ background: "green", border: "1px solid green" }}
            type="primary"
          >
            Crear
          </Button>
        </Col>
      </Row>

      <Row>
        {dataSource.map((m: any) => (
          <Col span={24}>
            <DataAuth datos={m} />
          </Col>
        ))}
      </Row>
    </LayoutApp>
  );
}

export default Data;
