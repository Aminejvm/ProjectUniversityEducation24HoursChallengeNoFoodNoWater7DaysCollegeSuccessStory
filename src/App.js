import React from "react";
import { Layout, Menu } from "antd";
import { Box } from "atomic-layout";
import Registration from "./components/Registration";
import LandingPage from "./components/Home";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";

const { Header, Content, Footer } = Layout;
function App() {
  return (
    <Router>
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
            <Menu.Item key="1">
              <Link to="/signup">Signup</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/contactus">Contact Us</Link>
            </Menu.Item>
          </Menu>
        </Box>
        <Content style={{ padding: "0px 48px", marginTop: "78px" }}>
          <div
            style={{
              backgroundColor: "#fff",
              minHeight: "calc(100vh - 150px)"
            }}
          >
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/signup" component={Registration}></Route>
            <Route exact path="/search" component={Search}></Route>
            <Route exact path="/search/:query" component={Search}></Route>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Edu Solu ©2019 Created by ExSuptem
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
