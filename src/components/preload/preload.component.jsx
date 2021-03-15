import React from "react";

import Loader from "react-loader-spinner";

const Preload = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "48vh" }}>
      <Loader type="Oval" color="#00BFFF" height={100} width={100} />
    </div>
  );
};

export default Preload;
