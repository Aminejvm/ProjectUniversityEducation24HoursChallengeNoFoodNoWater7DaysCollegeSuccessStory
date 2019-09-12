import React from "react";
import { Typography, Icon } from "antd";
import { Box } from "atomic-layout";
import styled from "styled-components";

const { Title, Paragraph } = Typography;

const Wrapper = styled(Box)`
  max-width: 712px;
  box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.3);
`;
const Body = ({ title, paragraph }) => {
  return (
    <Wrapper
      flex
      alignItems="center"
      padding="64px 24px"
      marginHorizontal="auto"
      flexDirection="column"
    >
      <Icon style={{ fontSize: "2rem", marginBottom: "24px" }} type="down" />
      <Title level={1}>Introduction :</Title>
      <Title level={2}> {title}</Title>
      <Paragraph>{paragraph}</Paragraph>
    </Wrapper>
  );
};
export default Body;
