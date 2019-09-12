import React from "react";
import Header from "./Header";
import Body from "./Body";
import { withRouter } from "react-router-dom";
import { useFetch } from "../../lib";
const Univ = ({ match: { params } }) => {
  const [loading, data, error] = useFetch(
    `http://localhost:2000/university/${params.id}`
  );
  return (
    <>
      <Header item={data}></Header>
      <Body title={data.uniname} paragraph={data.uniabout}></Body>
    </>
  );
};
export default withRouter(Univ);
