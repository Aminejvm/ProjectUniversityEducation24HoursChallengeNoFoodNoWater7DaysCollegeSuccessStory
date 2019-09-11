import React from "react";
import { Composition, Box } from "atomic-layout";
import { ReactComponent as HeroBack } from "./heroBack.svg";
import { Typography, Button } from "antd";
const { Title, Paragraph } = Typography;
const templateMd = `
    block svg
  `;
const template = `
    block 
    svg
`;
const Hero = () => {
  return (
    <Composition
      minHeight="calc(100vh - 78px)"
      areas={template}
      areasLg={templateMd}
      templateCols="512px 1fr"
    >
      {({ Block, Svg, Search }) => (
        <>
          <Block
            justifyContent="center"
            flex
            flexDirection="column"
            paddingLeft="32px"
          >
            <Title level={1} style={{ fontSize: "3.5rem", color: "#398aff" }}>
              Follow your studies in Morocco
            </Title>
            <Paragraph style={{ fontSize: "1.3rem", opacity: 0.6 }}>
              Make your journey easy with all resources you need
            </Paragraph>
            <Button
              style={{ display: "inline", width: "160px" }}
              size="large"
              type="primary"
            >
              Get Started
            </Button>
          </Block>
          <Svg flex justifyContent="flex-start" alignItems="center">
            <HeroBack style={{ width: "200%" }}></HeroBack>
          </Svg>
          <Search></Search>
        </>
      )}
    </Composition>
  );
};

export default Hero;
