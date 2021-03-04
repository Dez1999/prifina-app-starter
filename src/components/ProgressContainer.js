import React from "react";
import { Link } from "react-router-dom";

import { ThemeProvider, Text, Avatar, Flex } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";
import Box from "@blend-ui/core/dist/esm/Box";

import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  transform: `rotate(${270}deg)`,
};

function ProgressContainer({ text }) {
  return (
    <Flex flexDirection="column">
      <div style={styles}>
        <div style={{ padding: 5, width: 100 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 132 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 147 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 109 }}>
          <LinearProgress variant="determinate" value={0} />
        </div>
        <div style={{ padding: 5, width: 132 }}>
          <LinearProgress variant="determinate" value={100} />
        </div>
        <div style={{ padding: 5, width: 147 }}>
          <LinearProgress variant="determinate" value={100} color="secondary" />
        </div>
        <div style={{ padding: 5, width: 109 }}>
          <LinearProgress variant="determinate" value={100} color="primary" />
        </div>
      </div>
      <div style={{ marginTop: 32, marginLeft: 53 }}>
        <Text color="#95A4B" fontSize={15}>
          {text}
        </Text>
      </div>
    </Flex>
  );
}

export default ProgressContainer;
