import React from "react";

import { CircularProgress, CircularProgressLabel } from "@blend-ui/progress";
import { ThemeProvider, Text, Avatar, Flex } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";
import Box from "@blend-ui/core/dist/esm/Box";
import LinearProgress from "@material-ui/core/LinearProgress";
import { SettingsIcon } from "../assets/unusedSettings.svg";

import ProgressContainer from "../components/ProgressContainer";
import ProgressCard from "../components/ProgressCard";

import { createMuiTheme } from "@material-ui/core/styles";

import blue from "@material-ui/core/colors/blue";

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

function Dashboard() {
  return (
    <Flex
      marginLeft={251}
      paddingLeft={70}
      paddingTop={55}
      justifyContent={"space-between"}
    >
      <Box>
        <Box marginBottom={75}>
          <Flex marginBottom={60}>
            <Text fontSize={34} color="#5F6AC4">
              Health Overview
            </Text>
          </Flex>
          <Flex
            flex={1}
            width="634px"
            height="308px"
            paddingTop={85}
            borderRadius={10}
            style={styles}
          >
            <ProgressContainer text="Week 1" />
            <ProgressContainer text="Week 2" />
            <ProgressContainer text="Week 3" />
            <ProgressContainer text="Week 4" />
          </Flex>
        </Box>
        <Box>
          <Box marginBottom={30}>
            <Text fontSize={34} color="#5F6AC4">
              Monthly Goals
            </Text>
          </Box>
          <Flex>
            <Box height={299}>
              <ProgressCard
                title="2832 kcal"
                subtitle="out of 4000"
                color="primary"
                value="78"
              />
              <ProgressCard
                title="15 miles"
                subtitle="out of 25"
                color="secondary"
                value="65"
              />
            </Box>
            <Box height={299}>
              <ProgressCard
                title="13lb"
                subtitle="out of 16"
                color="third"
                value="85"
              />
              <ProgressCard
                title="52 hours"
                subtitle="out of 240"
                color="primary"
                value="70"
              />
            </Box>
            <ProgressCard
              title="18 583 steps"
              subtitle="out of 30 000"
              color="secondary"
              value="62"
            />
          </Flex>
        </Box>
      </Box>
      <Box marginRight={50}>{/* <Text>Settings Logo</Text> */}</Box>
    </Flex>
  );
}

export default Dashboard;
