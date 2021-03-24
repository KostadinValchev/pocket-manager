import React from "react";
import Popup from "reactjs-popup";

import "./record-section.styles.css";

const RecordSection = () => {
  return (
    <Popup trigger={<button> Trigger</button>} position="bottom center">
      <div>Popup content here !!</div>
    </Popup>
  );
};

export default RecordSection;
