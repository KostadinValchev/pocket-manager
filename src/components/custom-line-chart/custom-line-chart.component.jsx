import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectIntervals } from "../../redux/wallet/wallet.selectors";

import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
} from "recharts";

import { createExpenseChartObject } from "./custom-line-chart.utils";

import "./custom-line-chart.styles.css";

const CustomLineChart = ({ intervals }) => {
  let date = new Date();
  let categories =
    intervals &&
    Object.values(intervals.head.value[date.getMonth() + 1].expense);
  let chartData = categories && createExpenseChartObject(categories);
  let items = [];
  return (
    <React.Fragment>
      <h2>Last {chartData && chartData.length} days</h2>
      {categories ? (
        <LineChart
          width={700}
          height={400}
          data={chartData}
          margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
        >
          <Legend />
          {categories.map((cat, index) => {
            if (!items.includes(cat.category)) {
              items.push(cat.category);
              return (
                <Line
                  type="monotone"
                  dataKey={cat.category}
                  stroke={cat.color}
                  key={index}
                  // activeDot={{ r: 8 }}
                />
              );
            }
            return null;
          })}
          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="dayAndMonth" />
          <YAxis />
          <Tooltip />
        </LineChart>
      ) : (
        <h2>No Data</h2>
      )}
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  intervals: selectIntervals,
});

export default connect(mapStateToProps)(CustomLineChart);
