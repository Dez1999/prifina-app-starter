import React from "react";
import { Link } from "react-router-dom";

import { ThemeProvider, Text, Avatar, Flex } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";
import Box from "@blend-ui/core/dist/esm/Box";

import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

function ProgressCard({ title, subtitle, color, value }) {
  return (
    <Flex
      flex={1}
      width="353px"
      height="137px"
      borderRadius={10}
      style={styles}
      padding={20}
    >
      <CircularProgress
        variant="determinate"
        value={value}
        style={{ width: 95, height: 95 }}
        color={color}
      />
      <Box marginLeft={35}>
        <Box marginBottom={5} marginTop={27}>
          <Text color="#5F6AC4" fontSize={28}>
            {title}
          </Text>
        </Box>
        <Box>
          <Text color="#5F6AC4" fontSize={18}>
            {subtitle}
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}

export default ProgressCard;
