import { useState } from "react";
import LayoutApp from "../layout/LayoutApp";
import { Input, Row, Col, Button } from "antd";
import Swal from "sweetalert2";
import clienteAxios from "../../config/clientAxios";
import { useNavigate } from "react-router-dom";

const { TextArea } = Input;

function CreateData() {
  const id = localStorage.getItem("userId");
  const navigate = useNavigate();

  const [data, setdata] = useState({
    title: "titlesssssSADakosdhjoasdfsss",
    body: "bodysklsdfnjkldsfsssss",
    userId: id,
    deletedAt: null,
    image: "",
  });

  const { title, body, image } = data;

  const onChange = (e: any) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const onSave = async () => {
    if (title === "" || body === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "All fields are required!",
      });
    } else {
      try {
        const res: any = await clienteAxios.post(`/data`, data);
        Swal.fire({
          icon: "success",
          title: "Oops...",
          text: "Usuar create Ok!",
        });
        navigate("/data");
      } catch (error) {
        console.log(error);
      }
    }
  };

  const back = () => {
    navigate("/data");
  };

  return (
    <LayoutApp>
      <label>Title</label>
      <Input
        name="title"
        value={title}
        onChange={onChange}
        placeholder="title"
        showCount
        maxLength={20}
        required
      />
      <br />
      <br />
      <label>Body</label>
      <TextArea
        name="body"
        value={body}
        onChange={onChange}
        placeholder="body"
        showCount
        maxLength={300}
        required
      />
      <br />
      <br />
      <label>Image</label>
      <Input
        name="image"
        value={image}
        onChange={onChange}
        placeholder="link Image"
      />

      <Row style={{ marginTop: "20px" }}>
        <Col span={11}>
          <Button onClick={onSave} type="primary" block>
            Crear
          </Button>
        </Col>

        <Col span={2}></Col>
        <Col span={11}>
          <Button onClick={back} danger type="primary" block>
            Cancelar
          </Button>
        </Col>
      </Row>
    </LayoutApp>
  );
}

export default CreateData;
