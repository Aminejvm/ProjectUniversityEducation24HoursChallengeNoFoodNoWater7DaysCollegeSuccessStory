import React from "react";
import { Carousel, Timeline, Typography } from "antd";
import { Composition } from "atomic-layout";
const template = `
    partner time
`;
const { Title } = Typography;

const TimelineEngine = () => (
  <Composition
    areas={template}
    marginTop={64}
    gap={32}
    paddingHorizontal={32}
    width="80%"
    marginHorizontal="auto"
    templateCols="70% max-content"
  >
    {({ Partner, Time }) => (
      <>
        <Partner flex flexDirection="column">
          <Title level={2}>Our Partners</Title>
          <Carousel
            style={{
              boxShadow: "0px 3px 6px rgba(0,0,0,0.15)",
              borderRadius: "8px"
            }}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </Partner>
        <Time flex flexDirection="column">
          <Title level={2}>Calendar</Title>
          <Timeline>
            <Timeline.Item>Registration for Suptem 15/10/2019</Timeline.Item>
            <Timeline.Item>Concours SiZiXXXX 26/09/2019</Timeline.Item>
            <Timeline.Item>Registration for ensa 15/09/2019</Timeline.Item>
            <Timeline.Item>Registration for encg 08/09/2019</Timeline.Item>
          </Timeline>
        </Time>
      </>
    )}
  </Composition>
);

export default TimelineEngine;