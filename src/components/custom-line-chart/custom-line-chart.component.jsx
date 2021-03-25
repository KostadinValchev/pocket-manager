import React from "react";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import "./custom-line-chart.styles.css";

const data = [
  {
    name: "Monday",
    food: 20,
    shopping: 34,
    transport: 5,
    entertainment: 0,
    car: 10,
  },
  {
    name: "Tuesday",
    food: 14,
    shopping: 50,
    transport: 5,
    entertainment: 5,
    car: 0,
  },
  {
    name: "Wednesday",
    food: 18,
    shopping: 14,
    transport: 20,
    entertainment: 10,
    car: 0,
  },
  {
    name: "Thursday",
    food: 7,
    shopping: 0,
    transport: 7.5,
    entertainment: 0,
    car: 15,
  },
  {
    name: "Friday",
    food: 32,
    shopping: 42,
    transport: 12,
    entertainment: 50,
    car: 0,
  },
  {
    name: "Saturday",
    food: 25,
    shopping: 32,
    transport: 0,
    entertainment: 10,
    car: 0,
  },
  {
    name: "Sunday",
    food: 14,
    shopping: 17,
    transport: 50,
    entertainment: 0,
    car: 50,
  },
];
const CustomLineChart = () => {
  return (
    <LineChart
      width={600}
      height={300}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Legend />
      <Line
        type="monotone"
        dataKey="food"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line type="monotone" dataKey="shopping" stroke="#82F67E" />
      <Line type="monotone" dataKey="transport" stroke="#F569E7" />
      <Line type="monotone" dataKey="entertainment" stroke="#69BDF5" />
      <Line type="monotone" dataKey="car" stroke="#F5EB69" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default CustomLineChart;
