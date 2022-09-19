import React from "react";
import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";
import "../../css/layoutApp.css";

const Span = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

function Menu() {
  const history = useLocation();
  return (
    <>
      <Link to="/users" style={{ textAlign: "center" }}>
        <div
          className={history.pathname === "/users" ? "btn-menus" : "btn-menu"}
        >
          <div className="btn-menu-crtmn icn-crtmn-01"></div>
          <Span className="txt-menu-crtmn">Users</Span>
        </div>
      </Link>

      <Link to="/data" style={{ textAlign: "center" }}>
        <div
          className={
            history.pathname === "/data" || history.pathname === "/create-data"
              ? "btn-menus"
              : "btn-menu"
          }
        >
          <div className="btn-menu-crtmn icn-crtmn-01"></div>
          <Span className="txt-menu-crtmn">Data</Span>
        </div>
      </Link>


      <Link to="/profile" style={{ textAlign: "center" }}>
        <div
          className={
            history.pathname === "/profile" || history.pathname === "/create-data"
              ? "btn-menus"
              : "btn-menu"
          }
        >
          <div className="btn-menu-crtmn icn-crtmn-01"></div>
          <Span className="txt-menu-crtmn">Profile</Span>
        </div>
      </Link>
    </>
  );
}

export default Menu;
