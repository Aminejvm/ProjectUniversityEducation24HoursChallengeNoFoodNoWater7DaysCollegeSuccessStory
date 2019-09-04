import React from "react";
import { List, Button, Skeleton, Avatar } from "antd";
import axios from "axios";

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat&noinfo`;
const getData = callback => {
  axios.get(fakeDataUrl).then(res => callback(res));
};

const ListEngine = () => {
  const [{ initLoading, loading, data, list }, setFetch] = React.useState({
    initLoading: true,
    loading: false,
    data: [],
    list: []
  });

  const onLoadMore = () => {
    const newArray = new Array(count);
    setFetch({
      loading: true,
      list: data
    });
    getData(res => {
      const data = data.concat(res.data);
      setFetch({ data, list: data, loading: false });
    });
  };

  React.useEffect(() => {
    getData(res =>
      setFetch({ initLoading: false, data: res.data, list: res.data })
    );
    console.log(data);
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
    <List
      loading={initLoading}
      itemLayout="horizontal"
      loadMore={LoadMore}
      dataSource={list}
      renderItem={item => (
        <List.Item>
          <Skeleton avatar title={false} loading={item.loading} active>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<a href="https://ant.design">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </Skeleton>
        </List.Item>
      )}
    ></List>
  );
};

export default ListEngine;
