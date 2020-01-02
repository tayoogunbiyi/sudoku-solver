import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const CellWrapper = ({ children }) => (
  <div className="cell-wrapper">{children}</div>
);

const Cell = ({ value }) => {
  console.log(value || 1020);
  return (
    <CellWrapper>
      <div className="cell">{value}</div>
    </CellWrapper>
  );
};

export default Cell;
