import { useEffect, useState } from "react";
import { Row, Col, Input, Divider } from "antd";
import LayoutNotAuth from "../components/layout/LayoutNotAuth";
import { SearchOutlined } from "@ant-design/icons";
import clienteAxios from "../config/clientAxios";
import Data from "../components/data/Data";

const Home = () => {
  const [datas, setDatas] = useState([] as any);
  const [test, setTest] = useState(true);
  const [filter, setFilter] = useState("");
  const [dataSource, setdataSource] = useState([]);

  const getData = async () => {
    try {
      const res = await clienteAxios.get(`/datas`);

      const response: any = res.data;

      setDatas(response.data);
      setdataSource(response.data);

      if (response.length > 0) {
        setTest(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (test === true) {
      getData();
    }
  }, [test]);

  const onSearchs = (value: any) => {
    let filters: any;
    if (value === "") {
      setdataSource(datas);
      filters = datas;
    } else {
      filters = datas.filter(
        (u: any) =>
          u.id === value || u.title.toLowerCase().includes(value.toLowerCase())
      );
    }
    setdataSource(filters);
  };

  useEffect(() => {
    onSearchs(filter);
    // eslint-disable-next-line
  }, [filter]);

  return (
    <LayoutNotAuth>
      <Row>
        <Col span={4}>
          <Input
            name="filter"
            onChange={(e: any) => setFilter(e.target.value)}
            size="small"
            placeholder="Search"
            suffix={<SearchOutlined />}
          />
        </Col>
      </Row>

      <Divider />

      <Row>
        {dataSource.map((m: any) => (
          <Col span={6}>
            <Data datos={m} />
          </Col>
        ))}
      </Row>
    </LayoutNotAuth>
  );
};

export default Home;
