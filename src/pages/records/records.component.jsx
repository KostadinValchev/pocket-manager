import React from "react";

import IntervalDate from "../../components/interval-date/interval-date.component";

import Filter from "../../components/filter/filter.component";
import MultiFilter from "../../components/multi-filter/multi-filter.component";

import "./records.styles.css";

const Records = () => {
  return (
    <section className="record-section">
      <IntervalDate />
      <div className="filter-section">
        <Filter
          title="Sorting By"
          options={["The latest", "The oldest", "Amount (the smallest)", "Amount (the largest)"]}
        />
        <MultiFilter />
      </div>
    </section>
  );
};

export default Records;
