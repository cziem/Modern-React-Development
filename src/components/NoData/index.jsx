import React from "react";
import "./styles.css";

const NoData = ({ message }) => {
  return (
    <div className="no-data-wrap">
      <h5>{message}</h5>
    </div>
  );
};

export default NoData;
