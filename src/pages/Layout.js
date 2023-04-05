import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div style={styles.navbar}>
        <img src="/logo.svg" style={{ width: 110 }} />
        <ul
          style={{
            display: "flex",
            flex: 1,
            listStyle: "none",
          }}
        >
          <li
            style={{
              marginRight: 24,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              fontWeight: "bold",
              color: "#262626",
            }}
          >
            홈
          </li>
          <li
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              color: "#262626",
            }}
          >
            마이페이지
          </li>
        </ul>
        <button style={styles.btn}>로그인</button>
      </div>
      <Outlet />
    </div>
  );
};

const styles = {
  navbar: {
    borderBottom: "1px solid #F0F0F0",
    display: "flex",
    justifyContent: "space-between",
    padding: "0px 24px",
    height: 58,
  },
  btn: {
    backgroundColor: "#2F54EB",
    border: "none",
    padding: "6px 20px",
    borderRadius: 6,
    color: "#fff",
    margin: "auto",
  },
};

export default Layout;
