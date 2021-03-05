import React from "react";

import { Text, Flex } from "@blend-ui/core";
import Box from "@blend-ui/core/dist/esm/Box";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { extendTheme, ThemeProvider, Select } from "@chakra-ui/react";

import { data } from "../data";

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};
const color = {
  fill: "linear-gradient(to right, #4880EC, #019CAD)",
};

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function Graphs() {
  return (
    <ThemeProvider theme={theme}>
      <Flex
        marginLeft={251}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Flex paddingTop={55} paddingLeft={70}>
          <Text fontSize={34} color="#5F6AC4">
            Graphs
          </Text>
        </Flex>
        <Flex
          paddingLeft={70}
          paddingRight={140}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex marginTop={40}>
              <Box style={styles} width={431} height={535} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={30}
                >
                  <Flex>
                    <Select
                      placeholder="Select"
                      variant="unstyled"
                      borderWidth={0}
                      textColor="#5F6AC4"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#5F6AC4"}
                      fontSize={28}
                      fontFamily="Circular Std"
                      fontWeight={900}
                      fontStyle="normal"
                    >
                      25354 calories
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                >
                  <Flex>
                    <Select
                      placeholder="Select data"
                      variant="unstyled"
                      borderWidth={0}
                      textColor="#5F6AC4"
                      size="sm"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <Flex>
                    <Select
                      placeholder="Select data"
                      variant="outline"
                      textColor="#5F6AC4"
                      size="sm"
                      borderRadius="5px"
                    >
                      <option value="option1">Fitbit</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 0,
                      right: 0,
                      left: -60,
                      bottom: 75,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Calories"
                      stroke="orange"
                      fill="#FFD46A"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Box>
          <Box>
            <Flex marginTop={40}>
              <Box style={styles} width={431} height={535} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={30}
                >
                  <Flex>
                    <Select
                      placeholder="Select"
                      variant="unstyled"
                      borderWidth={0}
                      textColor="#5F6AC4"
                    >
                      <option value="option1">Option 1</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#5F6AC4"}
                      fontSize={28}
                      fontFamily="Circular Std"
                      fontWeight={900}
                      fontStyle="normal"
                    >
                      27613 calories
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                >
                  <Flex>
                    <Select
                      placeholder="Select data"
                      variant="unstyled"
                      borderWidth={0}
                      textColor="#5F6AC4"
                      size="sm"
                    >
                      <option value="option1">{data.name}</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                  <Flex>
                    <Select
                      placeholder="Select data"
                      variant="outline"
                      textColor="#5F6AC4"
                      size="sm"
                      borderRadius="5px"
                    >
                      <option value="option1">Oura</option>
                      <option value="option2">Option 2</option>
                      <option value="option3">Option 3</option>
                    </Select>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={data}
                    syncId="anyId"
                    margin={{
                      top: 0,
                      right: 0,
                      left: -60,
                      bottom: 75,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <Area
                      type="monotone"
                      dataKey="Calories"
                      stroke="orange"
                      fill="#FFD46A"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default Graphs;
