import React from "react";

import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import { selectExpense } from "../../redux/wallet/wallet.selectors";

import {
  setupChartCollection,
  renderCustomizedLabel,
} from "./custom-pie-chart.component.utils";

import { PieChart, Pie, Cell, LabelList } from "recharts";

import "./custom-pie-chart.styles.css";

const CustomPieChart = ({ expense }) => {
  let data = expense && setupChartCollection(expense);

  const total =
    data &&
    data.reduce((acc, obj) => {
      return acc + obj.amount;
    }, 0);

  const renderPercentage = (item) => {
    return ((item.amount / total) * 100).toFixed(0) + "%";
  };

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
        dataKey="amount"
      >
        {data &&
          data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        <LabelList dataKey={renderPercentage} />
      </Pie>
    </PieChart>
  );
};

const mapStateToProps = createStructuredSelector({
  expense: selectExpense,
});

export default connect(mapStateToProps)(CustomPieChart);
