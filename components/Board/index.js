import React from "react";
import Row from "../Row";
import Button from "../Button";
import { CellTypes } from "../../constants";
import "./index.css";

const cellData = [
  {
    value: 8,
    cellType: CellTypes.DEFAULT
  },
  {
    value: 1,
    cellType: CellTypes.DEFAULT
  },
  {
    value: 2,
    cellType: CellTypes.GENERATED
  },
  {
    value: 7,
    cellType: CellTypes.DEFAULT
  },
  {
    value: 3,
    cellType: CellTypes.GENERATED
  },
  {
    value: 4,
    cellType: CellTypes.GENERATED
  },
  {
    value: 2,
    cellType: CellTypes.GENERATED
  },
  {
    value: 9,
    cellType: CellTypes.DEFAULT
  },
  {
    value: 6,
    cellType: CellTypes.GENERATED
  }
];

const rowData = [];

for (let i = 0; i < 9; i++) {
  rowData.push(cellData);
}

class Board extends React.Component {
  renderRows(rowData) {
    return rowData.map((cellData, idx) => {
      return <Row key={idx} cellData={cellData} />;
    });
  }
  render() {
    return (
      <div>
        <div className="board">{this.renderRows(rowData)}</div>
        <div className="btn-group">
          <Button buttonText="Reset Board" />
          <Button buttonText="Solve Board" />
        </div>
      </div>
    );
  }
}

export default Board;
