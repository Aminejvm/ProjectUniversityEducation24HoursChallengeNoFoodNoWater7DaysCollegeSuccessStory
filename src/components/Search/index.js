import React from "react";
import { withRouter } from "react-router-dom";
import { Typography, Input } from "antd";
import { ReactComponent as Svg } from "./background.svg";
import { Box } from "atomic-layout";
const { Search } = Input;
const { Title } = Typography;

const SearchEngine = ({ match, history }) => (
  <Box flex width="100%" flexDirection="column" alignItems="center">
    <Svg style={{ width: "60%" }}></Svg>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      style={{ width: "50%", marginTop: "48px" }}
      onSearch={value => history.push(`/search/${value}`)}
    />

    <Title level={1} style={{ marginTop: "24px" }}>
      {match.params.query
        ? `College Found following your query: ${match.params.query}`
        : "Search for your favorite college !"}
    </Title>
  </Box>
);

export default withRouter(SearchEngine);
