import { Navigate } from "react-router-dom";

export const PrivateApp = ({ children }: any) => {
  const id = localStorage.getItem("userId");

  return !id ? <Navigate to="/" /> : children;
};
