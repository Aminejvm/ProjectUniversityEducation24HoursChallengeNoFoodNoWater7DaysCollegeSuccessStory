import React from "react";
import { List, Button, Skeleton, Card } from "antd";
import { Box } from "atomic-layout";
import { useFetch } from "../../lib";
import axios from "axios";
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const getData = callback => {
  axios.get(fakeDataUrl).then(res => callback(res));
};

const ListEngine = () => {
  const [cLoading, cData, cError] = useFetch(fakeDataUrl);
  console.log(cLoading);
  console.log(cData);
  const [{ initLoading, loading, data, list }, setFetch] = React.useState({
    initLoading: true,
    loading: false,
    data: [],
    list: []
  });

  const onLoadMore = () => {
    setFetch({
      loading: true,
      list: data.concat(
        [...new Array(count)].map(() => ({ loading: true, name: {} }))
      )
    });
    getData(res => {
      const newData = data.concat(res.data.results);
      setFetch({ data: newData, list: data, loading: false });
    });
  };

  React.useEffect(() => {
    getData(res =>
      setFetch({
        initLoading: false,
        data: res.data.results,
        list: res.data.results
      })
    );
  }, []);

  const LoadMore =
    !initLoading && !loading ? (
      <div
        style={{
          textAlign: "center",
          marginTop: 12,
          height: 32,
          lineHeight: "32px"
        }}
      >
        <Button onClick={onLoadMore}>loading more</Button>
      </div>
    ) : null;

  return (
    <Box
      marginHorizontal="auto"
      paddingHorizontal={32}
      width="80%"
      marginTop={64}
    >
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
        loading={initLoading}
        loadMore={LoadMore}
        dataSource={list}
        renderItem={item => (
          <List.Item>
            <Skeleton avatar title={false} loading={item.loading} active>
              <Card title={item.name.last}>to suptem or not to suptem</Card>
            </Skeleton>
          </List.Item>
        )}
      ></List>
    </Box>
  );
};

export default ListEngine;
