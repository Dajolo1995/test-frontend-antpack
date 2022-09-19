import { useState, useEffect } from "react";
import LayoutApp from "../components/layout/LayoutApp";
import { Row, Col, Table, Input } from "antd";
import Columns from "../components/users/Columns";
import clienteAxios from "../config/clientAxios";
import { SearchOutlined } from "@ant-design/icons";

function Users() {
  const [dataSource, setDataSource] = useState([]);
  const [copia, setCopia] = useState([]);
  const [test, setTest] = useState(true);
  const [filter, setFilter] = useState("");

  const getData = async () => {
    try {
      const res = await clienteAxios.get(`/users`);

      setCopia(res.data.users);
      setDataSource(res.data.users);

      if (res.data.users.length > 0) {
        setTest(false);
      }
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
          u.email.toLowerCase().includes(value.toLowerCase()) ||
          u.nickName.toLowerCase().includes(value.toLowerCase()) ||
          u.country.toLowerCase().includes(value.toLowerCase())
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

  return (
    <LayoutApp>
      <Row style={{marginBottom: "20px"}}>
        <Col span={12}>
          <Input
            name="filter"
            onChange={(e: any) => setFilter(e.target.value)}
            size="small"
            placeholder="Search"
            suffix={<SearchOutlined />}
          />
        </Col>
        <Col span={12}></Col>
      </Row>

      <Table columns={Columns()} dataSource={dataSource} />
    </LayoutApp>
  );
}

export default Users;
