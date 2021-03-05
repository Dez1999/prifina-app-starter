import React from "react";
<<<<<<< HEAD

import { Text, Flex } from "@blend-ui/core";

import Box from "@blend-ui/core/dist/esm/Box";

import {
  extendTheme,
  ThemeProvider,
  CircularProgress,
  CircularProgressLabel,
} from "@chakra-ui/react";
=======
import { Link } from "react-router-dom";

import { ThemeProvider, Text, Avatar, Flex } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";
import Box from "@blend-ui/core/dist/esm/Box";

import CircularProgress from "@material-ui/core/CircularProgress";
>>>>>>> d1769936e657d3c122d68a687780bd0fcdc59a32

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

<<<<<<< HEAD
const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function ProgressCard({ title, subtitle, color, value }) {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        flex={1}
        width="353px"
        height="137px"
        borderRadius={10}
        style={styles}
        padding={20}
      >
        <CircularProgress
          value={value}
          color={color}
          thickness="11px"
          size="95px"
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
    </ThemeProvider>
=======
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
>>>>>>> d1769936e657d3c122d68a687780bd0fcdc59a32
  );
}

export default ProgressCard;
