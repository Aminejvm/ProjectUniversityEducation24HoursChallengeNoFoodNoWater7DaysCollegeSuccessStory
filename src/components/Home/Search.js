import React from "react";
import { Typography, Input } from "antd";
import { Box } from "atomic-layout";
const { Search } = Input;
const { Title } = Typography;
const SearchEngine = () => {
  return (
    <Box flex width="100%" flexDirection="column" alignItems="center">
      <Title level={1}>Search for your favorite college !</Title>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        style={{ width: "50%" }}
        onSearch={value => console.log(value)}
      />{" "}
    </Box>
  );
};
export default SearchEngine;
