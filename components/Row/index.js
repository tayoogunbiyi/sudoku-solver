import React from "react";
import ReactDOM from "react-dom";
import Cell from "../Cell";
import "./index.css";

const Row = ({ cellData }) => {
  return (
    <div className="row">
      {cellData.map(({ value }, idx) => (
        <Cell key={idx} value={value} />
      ))}
    </div>
  );
};

export default Row;
