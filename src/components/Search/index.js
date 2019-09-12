import React from "react";
import { withRouter } from "react-router-dom";
import { Typography, Input } from "antd";
import { ReactComponent as Svg } from "./background.svg";
import { List, Skeleton, Card } from "antd";
import { Link } from "react-router-dom";
import { useFetch, truncate } from "../../lib";
import { Box } from "atomic-layout";
const { Search } = Input;
const { Title } = Typography;

const SearchEngine = ({ match: { params }, history }) => {
  const [loading, { products }, error] = useFetch(
    `http://localhost:2000/university/search/${params.query}`
  );
  return (
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
        {params.query
          ? `College Found following your query: ${params.query}`
          : "Search for your favorite college !"}
      </Title>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 2,
          lg: 2,
          xl: 6,
          xxl: 3
        }}
        loading={loading}
        dataSource={products}
        renderItem={item => (
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
              <Link to={`/univ/${item._id}`}>
                <Card
                  cover={
                    <img
                      style={{ height: "300px" }}
                      alt={item.uniname}
                      src={item.uniimg}
                    />
                  }
                  title={item.uniname}
                >
                  {truncate(item.uniabout, 450)}
                </Card>
              </Link>
            </Skeleton>
          </List.Item>
        )}
      ></List>
    </Box>
  );
};

export default withRouter(SearchEngine);
