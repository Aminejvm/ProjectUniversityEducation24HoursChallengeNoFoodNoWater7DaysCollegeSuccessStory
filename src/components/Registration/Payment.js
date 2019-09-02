import React from "react";
import {
  Elements,
  StripeProvider,
  CardElement,
  injectStripe
} from "react-stripe-elements";
import { Box } from "atomic-layout";
import { Button, Typography } from "antd";
const { Paragraph, Title } = Typography;
const Form = props => {
  const submit = async e => {
    let { token } = await props.stripe.createToken({ name: "uni" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });
    if (response.ok) console.log("Purchase Complete!");
  };
  return (
    <div>
      <Paragraph>Enter your card informations below</Paragraph>
      <CardElement style={{ padding: "12px" }} className="input"></CardElement>
      <Box flex>
        <Button onClick={props.prev}>Previous</Button>
        <Button
          style={{ marginLeft: "8px" }}
          type="primary"
          onClick={props.next}
        >
          Proceed
        </Button>
      </Box>
    </div>
  );
};

const Injected = injectStripe(Form);

const Payment = props => (
  <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
    <div>
      <Title level={1}>Membership payment</Title>
      <Elements>
        <Injected {...props} />
      </Elements>
    </div>
  </StripeProvider>
);

export default Payment;
