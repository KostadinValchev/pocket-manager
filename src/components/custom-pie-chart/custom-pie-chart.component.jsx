import React from "react";
import { PieChart, Pie, Cell, LabelList } from "recharts";
import "./custom-pie-chart.styles.css";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group I", value: 650 },
  { name: "Group F", value: 230 },
  { name: "Group G", value: 100 },
  { name: "Group K", value: 50 },
];

const total = data.reduce((acc, obj) => {
  return acc + obj.value;
}, 0);

const renderPercentage = (item) => {
  return ((item.value / total) * 100).toFixed(0) + "%";
};

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#F569E7", "#F5EB69"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
  name,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 1.2;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="outline"
    >
      {`${name}`}
    </text>
  );
};

const CustomPieChart = () => {
  return (
    <PieChart width={600} height={600}>
      <Pie
        data={data}
        cx={300}
        cy={300}
        labelLine={true}
        label={renderCustomizedLabel}
        outerRadius={140}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
        <LabelList dataKey={renderPercentage} />
      </Pie>
    </PieChart>
  );
};

export default CustomPieChart;
