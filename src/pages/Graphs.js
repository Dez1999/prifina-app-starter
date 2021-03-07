import React, { useState, useEffect } from "react";

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

import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import Select from "react-select";

// -----------------------FUNCTIONS----------------------

import { Device } from "../data/dataFunctions";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#43425d",
      primary: "#3c4a64",
    },
  };
}

// -------------DATA----------------

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
};

const deviceOptions = [
  { label: "Fitbit", value: "fitbit" },
  { label: "Oura", value: "oura" },
];

const timeOptions = [
  { label: "Last Month", value: "fitbit" },
  { label: "Last Week", value: "oura" },
  { label: "This Month", value: "oura" },
  { label: "This Week", value: "oura" },
];

const dataOptions = [
  { label: "Total calories", value: "Calories" },
  { label: "acitvity", value: "activity" },
];

function getDeviceData(device) {
  return Device(device);
}

function getDeviceDataTwo(deviceTwo) {
  return Device(deviceTwo);
}

const defaultDevice = deviceOptions[0];

const defaultData = {};

// --------------------------APP FUNCTION--------------------------------

function Graphs() {
  const [device, setDevice] = useState(defaultDevice.value);
  const [deviceTwo, setDeviceTwo] = useState(defaultDevice.value);

  const [graphDataOne, setGraphDataOne] = useState(defaultData);
  const [graphDataTwo, setGraphDataTwo] = useState(defaultData);

  let getName = (x) => {
    return x.Calories;
  };

  const handleDeviceChange = (value) => {
    const device = value.value;
    setDevice(device);
  };
  const handleDeviceChangeTwo = (value) => {
    const deviceTwo = value.value;
    setDeviceTwo(deviceTwo);
  };

  useEffect(() => {
    getDeviceData(device).then((graphDataOne) => {
      setGraphDataOne(graphDataOne);
    });
  }, [device]);

  useEffect(() => {
    getDeviceDataTwo(deviceTwo).then((graphDataTwo) => {
      setGraphDataTwo(graphDataTwo);
    });
  }, [deviceTwo]);

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
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={dataOptions}
                        defaultValue="Data"
                        theme={customTheme}
                        // onChange={handleDeviceChange}
                        width="100px"
                      />
                    </div>
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
                    <Flex>
                      <div style={{ minWidth: 100 }}>
                        <Select
                          options={timeOptions}
                          defaultValue="Time"
                          theme={customTheme}
                          // onChange={handleDeviceChange}
                          width="100px"
                        />
                      </div>
                    </Flex>
                  </Flex>
                  <Flex>
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={deviceOptions}
                        defaultValue="Device"
                        theme={customTheme}
                        onChange={handleDeviceChange}
                        width="100px"
                      />
                    </div>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={graphDataOne}
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
                      // dataKey="Calories"
                      dataKey={getName}
                      stroke="orange"
                      // fill="#FFD46A"
                      fill="#5F6AC4"
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
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={dataOptions}
                        defaultValue="Data"
                        theme={customTheme}
                        // onChange={handleDeviceChange}
                        width="100px"
                      />
                    </div>
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
                    <Flex>
                      <div style={{ minWidth: 100 }}>
                        <Select
                          options={timeOptions}
                          defaultValue="Time"
                          theme={customTheme}
                          // onChange={handleDeviceChange}
                          width="100px"
                        />
                      </div>
                    </Flex>
                  </Flex>
                  <Flex>
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={deviceOptions}
                        defaultValue="Device"
                        theme={customTheme}
                        onChange={handleDeviceChangeTwo}
                        width="100px"
                      />
                    </div>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={graphDataTwo}
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
                      // dataKey="Calories"
                      dataKey={getName}
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
