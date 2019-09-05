import React from "react";
import { Composition, Box } from "atomic-layout";
import { Typography, Button, Icon } from "antd";
import styled from "styled-components";

const { Title, Paragraph } = Typography;
const template = `
    image details`;

const StyledImage = styled.img`
  border-radius: 8px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.15);
`;
const StyledIcon = styled(Icon)`
  margin-right: 4px;
`;
const StyledParagraph = styled(Paragraph)`
  margin-left: 6px;
`;
const Header = () => {
  return (
    <Composition
      paddingTop={64}
      paddingHorizontal={32}
      minHeight="80vh"
      areas={template}
      gap={64}
    >
      {({ Image, Details }) => (
        <>
          <Image>
            <StyledImage
              src="https://www.moroccoworldnews.com/wp-content/uploads/2017/11/Morocco%E2%80%99s-Al-Akhawayn-University.jpg"
              alt=""
            />
          </Image>
          <Details flex flexDirection="column">
            <Title>Al Akhawayn University</Title>
            <Box marginTop={32} flex alignItems="center">
              <Box flex alignItems="baseline">
                <Title level={4}>
                  <StyledIcon type="ie"></StyledIcon>Site:
                </Title>
                <Button type="link"> Check them out</Button>
              </Box>
              <Box flex alignItems="baseline">
                <Title level={4}>
                  <StyledIcon type="money-collect"></StyledIcon>
                  Secteur:
                </Title>
                <StyledParagraph>Prive</StyledParagraph>
              </Box>
            </Box>
            <Box marginTop={12} flex alignItems="baseline">
              <Title level={4}>
                <StyledIcon type="phone"></StyledIcon>
                N:
              </Title>
              <StyledParagraph>0634562532</StyledParagraph>
            </Box>
            <Box marginTop={12} flex alignItems="baseline">
              <Title level={4}>
                <StyledIcon type="home"></StyledIcon>
                Adresse:
              </Title>
              <StyledParagraph>Derb SeLtAn 99</StyledParagraph>
            </Box>
          </Details>
        </>
      )}
    </Composition>
  );
};

export default Header;
