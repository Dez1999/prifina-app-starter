import React, { PureComponent } from "react";

import { CircularProgress, CircularProgressLabel } from "@blend-ui/progress";
import { ThemeProvider, Text, Avatar, Flex } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";
import Box from "@blend-ui/core/dist/esm/Box";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Day 5",
    uv: 4000,
    Calories: 2400,
    amt: 2400,
  },
  {
    name: "Day 10",
    uv: 3000,
    Calories: 1398,
    amt: 2210,
  },
  {
    name: "Day 15",
    uv: 2000,
    Calories: 9800,
    amt: 2290,
  },
  {
    name: "Day 20",
    uv: 2780,
    Calories: 3908,
    amt: 2000,
  },
  {
    name: "Day 25",
    uv: 1890,
    Calories: 4800,
    amt: 2181,
  },
  {
    name: "Day 30",
    uv: 2390,
    Calories: 3800,
    amt: 2500,
  },
  {
    name: "Day 35",
    uv: 3490,
    Calories: 4300,
    amt: 2100,
  },
];

const background = {
  background:
    " linear -gradient( 179.82deg, rgba(255, 212, 106, 0.5) 0.16%, rgba(255, 212, 106, 0.17) 46.76%, rgba(255, 212, 106, 0.12) 65.81%, rgba(255, 212, 106, 0) 96.25%)",
};

function Graphs() {
  return (
    <Flex
      marginLeft={251}
      paddingLeft={70}
      paddingTop={55}
      justifyContent={"space-between"}
    >
      <Box width={900} height={800}>
        <Text fontSize={34} color="#5F6AC4">
          Graphs
        </Text>
        <div style={{ width: "100%", marginTop: 50 }}>
          {/* <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </LineChart>
        </ResponsiveContainer>
        <p>Maybe some other content</p>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Calories"
              stroke="#82ca9d"
              fill="#82ca9d"
            />
            <Brush />
          </LineChart>
        </ResponsiveContainer> */}
          <Flex>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={431}
                height={343}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  vertical={false}
                />
                <XAxis dataKey="name" tick={false} />
                <YAxis tick={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Calories"
                  stroke="orange"
                  fill="#FFD46A"
                  // fill=" linear -gradient( 179.82deg, rgba(255, 212, 106, 0.5) 0.16%, rgba(255, 212, 106, 0.17) 46.76%, rgba(255, 212, 106, 0.12) 65.81%, rgba(255, 212, 106, 0) 96.25%)"
                />
              </AreaChart>
            </ResponsiveContainer>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart
                width={431}
                height={343}
                data={data}
                syncId="anyId"
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  horizontal={false}
                  vertical={false}
                />
                <XAxis dataKey="name" tick={false} />
                <YAxis tick={false} />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="Calories"
                  stroke={"orange"}
                  fill="#FFD46A"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Flex>
        </div>
      </Box>
    </Flex>
  );
}

export default Graphs;
