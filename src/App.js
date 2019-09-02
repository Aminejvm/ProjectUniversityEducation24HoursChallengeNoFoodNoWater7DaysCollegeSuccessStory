import React from "react";
import logo from "./logo.svg";
import Button from "antd/es/button";
import { Layout, Menu } from "antd";
import { Box } from "atomic-layout";
import Inscription from "./components/Registration/inscription";
import Registration from "./components/Registration";
import "./App.css";
const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Layout>
      <Box
        as={Header}
        flex
        justifyContent="space-between"
        alignItems="center"
        style={{ position: "fixed", zIndex: 1, width: "100%" }}
      >
        <h1>Edu</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ linHeight: "74px" }}
        >
          <Menu.Item key="1">Signup</Menu.Item>
          <Menu.Item key="2">Login</Menu.Item>
          <Menu.Item key="3">Contact Us</Menu.Item>
        </Menu>
      </Box>
      <Content style={{ padding: "0px 48px", marginTop: "78px" }}>
        <div style={{ backgroundColor: "#fff", height: "100vh" }}>
          <Registration></Registration>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Edu Solu ©2019 Created by ExSuptem
      </Footer>
    </Layout>
  );
}

export default App;
