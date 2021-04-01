import React from "react";

import { connect } from "react-redux";

import { selectIntervals } from "../../../redux/wallet/wallet.selectors";

import { transformToArray } from "../../../utils/intervals-utils";

import "./cost-preview.styles.css";

const CostPreview = ({ categories }) => {
  return (
    <div className="cp-wraper">
      <div className="cf-header-cont">
        <p>Last Month</p>
        <span>-158,60 $</span>
      </div>
      {categories &&
        transformToArray(categories.head.value, "expense").map((item) => (
          <React.Fragment key={item.date}>
            <div className="cf-label">
              <span>{item.category}</span> <span>{item.amount}$</span>
            </div>
            <div className="meter" style={{ background: `${item.color}` }}>
              <span></span>
            </div>
          </React.Fragment>
        ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  categories: selectIntervals(state),
});

export default connect(mapStateToProps)(CostPreview);
