import React from "react";
import { Steps } from "antd";
import Inscription from "./inscription";
import Payment from "./Payment";
import Congrats from "./Congrats";
import { Box } from "atomic-layout";

const { Step } = Steps;

const steps = [
  {
    title: "Inscription"
  },
  { title: "Payment" },
  { title: "Last" }
];

const Registration = () => {
  const [current, setCurrent] = React.useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  return (
    <Box
      flex
      flexDirection="column"
      paddingVertical={32}
      paddingHorizontal={64}
    >
      <Steps current={current}>
        {steps.map(item => (
          <Step key={item.title} title={item.title}></Step>
        ))}
      </Steps>
      <Box marginTop={64} marginHorizontal="auto" width="70%">
        {current === 0 && <Inscription next={next}></Inscription>}
        {current === 1 && <Payment prev={prev} next={next}></Payment>}
        {current === 2 && <Congrats></Congrats>}
      </Box>
    </Box>
  );
};

export default Registration;
