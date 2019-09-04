import React from "react";
import { Typography, Input } from "antd";
import { withRouter } from "react-router-dom";
import { Box } from "atomic-layout";
const { Search } = Input;
const { Title } = Typography;
const SearchEngine = ({ history }) => {
  return (
    <Box flex width="100%" flexDirection="column" alignItems="center">
      <Title level={1}>Search for your favorite college !</Title>
      <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        style={{ width: "50%" }}
        onSearch={value => history.push(`/search/${value}`)}
      />
    </Box>
  );
};
export default withRouter(SearchEngine);
