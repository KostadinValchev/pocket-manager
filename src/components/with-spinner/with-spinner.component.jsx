import React from "react";

import Loader from "react-loader-spinner";

const WithSpinner = (WrappedComponent) => {
  const Spinner = ({ isLoading, ...otherProps }) => {
    return isLoading ? (
      <div style={{ textAlign: "center", marginTop: "48vh" }}>
        <Loader type="Oval" color="#00BFFF" height={100} width={100} />
      </div>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
