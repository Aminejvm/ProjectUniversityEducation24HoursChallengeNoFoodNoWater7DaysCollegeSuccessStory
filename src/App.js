import React from "react";
import { Layout, Menu } from "antd";
import { Box } from "atomic-layout";
import Registration from "./components/Registration";
import Contact from "./components/Contact";
import Privacy from "./components/privacy";
import LandingPage from "./components/Home";
import Search from "./components/Search";
import NotFound from "./components/404";
import Univ from "./components/Univ";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from "axios";
import "./App.css";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const { Header, Content, Footer } = Layout;
function App() {
  React.useEffect(() => {
    axios.get(fakeDataUrl).then(res => {
      console.log(res);
    });
  }, []);
  return (
    <Router>
      <Layout style={{ backgroundColor: "white" }}>
        <Box
          as={Header}
          flex
          justifyContent="space-between"
          alignItems="center"
          style={{ position: "fixed", zIndex: 1, width: "100%" }}
        >
          <Link to="/">
            <h1 style={{ color: "white" }}>UniSearch</h1>
          </Link>
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
              <Link to="/search">Search</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/privacy">Privacy</Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link to="/contact">Contact</Link>
            </Menu.Item>
          </Menu>
        </Box>
        <Content
          style={{
            padding: "0px 48px",
            marginTop: "78px",
            paddingBottom: "32px"
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              minHeight: "calc(100vh - 150px)"
            }}
          >
            <Switch>
              <Route exact path="/" component={LandingPage}></Route>
              <Route exact path="/contact" component={Contact}></Route>
              <Route exact path="/privacy" component={Privacy}></Route>
              <Route exact path="/signup" component={Registration}></Route>
              <Route exact path="/search" component={Search}></Route>
              <Route exact path="/search/:query" component={Search}></Route>
              <Route exact path="/univ/:id" component={Univ}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          UniSearch ©2019 Created by Suptem
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
