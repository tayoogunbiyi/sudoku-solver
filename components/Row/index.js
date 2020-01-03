import React from "react";
import ReactDOM from "react-dom";
import Cell from "../Cell";
import "./index.css";

const Row = ({ cellData }) => {
  return (
    <div className="row">
      {cellData.map(({ value, cellType }, idx) => (
        <Cell key={idx} value={value} cellType={cellType} />
      ))}
    </div>
  );
};

export default Row;
