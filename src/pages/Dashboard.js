import React from "react";

import { Text, Flex } from "@blend-ui/core";

import Box from "@blend-ui/core/dist/esm/Box";

import ProgressContainer from "../components/ProgressContainer";
import ProgressCard from "../components/ProgressCard";
import Card from "../components/Card";

import { extendTheme, ThemeProvider, Select } from "@chakra-ui/react";

import SleepIcon from "../assets/sleep.svg";
import HeartIcon from "../assets/heart.svg";
import TemperatureIcon from "../assets/temperature.svg";
import GreenArrowIcon from "../assets/greenArrow.svg";
import RedArrowIcon from "../assets/redArrow.svg";

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function Dashboard() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        marginLeft={251}
        paddingLeft={70}
        paddingTop={55}
        justifyContent={"space-between"}
      >
        <Box>
          <Box marginBottom={75} paddingTop={0}>
            <Flex justifyContent={"space-between"}>
              <Flex marginBottom={0}>
                <Text fontSize={34} color="#5F6AC4">
                  Health Overview
                </Text>
              </Flex>
              <Flex paddingRight={35}>
                <Flex flexDirection="row" paddingRight={35}>
                  <Box>
                    <Select
                      placeholder="This Week"
                      variant="unstyled"
                      borderWidth={0}
                      borderRadius="10px"
                      textColor="#5F6AC4"
                      style={styles}
                      minWidth="166px"
                      minHeight="43px"
                      justifyContent="center"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                    {/* <Box width="57px" width="43px">
                      <Text>...</Text>
                    </Box> */}

                    <Flex paddingRight={300} paddingBottom={27}>
                      <Text fontSize={24} color="#5F6AC4"></Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Flex>
            <Flex>
              <Flex
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
              <Flex paddingLeft={80}>
                <Box paddingRight={30}>
                  <Card
                    icon={SleepIcon}
                    smallIcon={GreenArrowIcon}
                    title="7h 30m"
                    subtitle="sleep"
                    precentage="11%"
                    iconColor="#B794F4"
                    color="#E9D8FD"
                  />
                  <Box paddingTop={15}>
                    <Card
                      icon={HeartIcon}
                      smallIcon={RedArrowIcon}
                      title="89bpm"
                      subtitle="rate"
                      precentage="5%"
                      iconColor="#C53030"
                      color="#FC8181"
                    />
                  </Box>
                </Box>
                <Box>
                  <Card
                    icon={TemperatureIcon}
                    smallIcon={GreenArrowIcon}
                    title="36.6"
                    subtitle="body temp"
                    precentage="10%"
                    iconColor="#319795"
                    color="#B2F5EA"
                  />
                </Box>
              </Flex>
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
                  color="#F6E05E"
                  value="78"
                />
                <ProgressCard
                  title="15 miles"
                  subtitle="out of 25"
                  color="#38B2AC"
                  value="65"
                />
              </Box>
              <Box height={299}>
                <ProgressCard
                  title="13lb"
                  subtitle="out of 16"
                  color="#29C1E2"
                  value="85"
                />
                <ProgressCard
                  title="52 hours"
                  subtitle="out of 240"
                  color="#6B46C1"
                  value="70"
                />
              </Box>
              <Box>
                <ProgressCard
                  title="18 583 steps"
                  subtitle="out of 30 000"
                  color="#ED8936"
                  value="62"
                />
              </Box>
            </Flex>
          </Box>
        </Box>
        <Box marginRight={50}>{/* <Text>Settings Logo</Text> */}</Box>
      </Flex>
    </ThemeProvider>
  );
}

export default Dashboard;
