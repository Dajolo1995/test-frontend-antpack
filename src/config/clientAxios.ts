import axios from "axios";

const clienteAxios = axios.create({
  baseURL: process.env.REACT_APP_API_URL || "http://localhost:4000/api"
});

export default clienteAxios;
