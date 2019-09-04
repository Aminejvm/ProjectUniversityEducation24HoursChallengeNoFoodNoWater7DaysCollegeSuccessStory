import React from "react";
import { Typography, Input } from "antd";
import { ReactComponent as Svg } from "./background.svg";
import { Box } from "atomic-layout";
const { Search } = Input;
const { Title } = Typography;

const SearchEngine = ({ match }) => (
  <Box flex width="100%" flexDirection="column" alignItems="center">
    <Svg style={{ width: "60%" }}></Svg>
    <Search
      placeholder="input search text"
      enterButton="Search"
      size="large"
      style={{ width: "50%", marginTop: "48px" }}
      onSearch={value => console.log(value)}
    />

    <Title level={1} style={{ marginTop: "24px" }}>
      {match.params.query
        ? `College Found following your query: ${match.params.query}`
        : "Search for your favorite college !"}
    </Title>
  </Box>
);

export default SearchEngine;
