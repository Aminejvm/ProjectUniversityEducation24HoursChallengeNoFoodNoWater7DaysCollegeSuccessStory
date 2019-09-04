import React from "react";
import { Box } from "atomic-layout";
import { Link } from "react-router-dom";
import { Typography, Button } from "antd";
import { ReactComponent as Svg } from "./background.svg";
import { withRouter } from "react-router-dom";

const { Title, Paragraph } = Typography;
const NotFound = props => {
  return (
    <Box flex alignItems="center" minHeight="100vh" flexDirection="column">
      <Title style={{ marginTop: "1rem" }}>Oh No! Page Not Found!</Title>
      <Svg style={{ width: "70%", marginTop: "1rem" }}></Svg>
      <Paragraph style={{ margin: "2rem" }}>
        Seems like you stumbled upon the wrong link
      </Paragraph>
      <Button type="primary" onClick={() => props.history.push("/")}>
        Go Back
      </Button>
    </Box>
  );
};
export default withRouter(NotFound);
