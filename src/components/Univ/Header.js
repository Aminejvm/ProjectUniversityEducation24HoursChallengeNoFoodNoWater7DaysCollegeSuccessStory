import React from "react";
import { Composition, Box } from "atomic-layout";
import { Typography, Button, Icon } from "antd";
import styled from "styled-components";

const { Title, Paragraph } = Typography;
const templateLg = `
    image details`;
const template = `
    image
    details
`;
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
const Header = ({ item }) => {
  const { uniname, uniwebsite, uniphone, uniaddress, uniimg } = item;
  return (
    <Composition
      paddingTop={64}
      paddingHorizontal={32}
      minHeight="80vh"
      areas={template}
      areasLg={templateLg}
      gap={64}
    >
      {({ Image, Details }) => (
        <>
          <Image>
            <StyledImage style={{ width: "100%" }} src={uniimg} alt={uniname} />
          </Image>
          <Details flex flexDirection="column">
            <Title>{uniname}</Title>
            <Box marginTop={32} flex alignItems="center">
              <Box flex alignItems="baseline">
                <Title level={4}>
                  <StyledIcon type="ie"></StyledIcon>Site:
                </Title>
                <a href={uniwebsite}>
                  <Button type="link"> Check them out</Button>
                </a>
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
              <StyledParagraph>{uniphone}</StyledParagraph>
            </Box>
            <Box marginTop={12} flex alignItems="baseline">
              <Title level={4}>
                <StyledIcon type="home"></StyledIcon>
                Adresse:
              </Title>
              <StyledParagraph>{uniaddress}</StyledParagraph>
            </Box>
          </Details>
        </>
      )}
    </Composition>
  );
};

export default Header;
