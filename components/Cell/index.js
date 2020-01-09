import React from "react";
import { CellTypes } from "../../constants";

import "./index.css";

const CellWrapper = ({ extraClassName, children }) => (
  <div className={`cell-wrapper ${extraClassName}`}>{children}</div>
);

const buildCellClassName = cellType => {
  if (cellType == CellTypes.GENERATED) {
    return `cell generated-cell`;
  } else if (cellType == CellTypes.BLANK) {
    return `cell blank-cell`;
  }
  return `cell default-cell`;
};

const Cell = ({ value, cellType, extraClassName }) => {
  const classNameString = buildCellClassName(cellType);
  return (
    <CellWrapper extraClassName={extraClassName}>
      <div className={classNameString}>{value}</div>
    </CellWrapper>
  );
};

export default Cell;
