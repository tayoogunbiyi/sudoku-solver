import React from "react";
import { CellTypes } from "../../constants";

import "./index.css";

const CellWrapper = ({ children }) => (
  <div className="cell-wrapper">{children}</div>
);

const buildCellClassName = cellType => {
  if (cellType == CellTypes.GENERATED) {
    return `cell generated-cell`;
  }
  return `cell default-cell`;
};

const Cell = ({ value, cellType }) => {
  const classNameString = buildCellClassName(cellType);
  return (
    <CellWrapper>
      <div className={classNameString}>{value}</div>
    </CellWrapper>
  );
};

export default Cell;
