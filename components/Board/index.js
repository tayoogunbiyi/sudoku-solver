import React from "react";
import Row from "../Row";
import Button from "../Button";

import "./index.css";

const cellData = [
  {
    value: 8
  },
  {
    value: 1
  },
  {
    value: 2
  },
  {
    value: 7
  },
  {
    value: 3
  },
  {
    value: 4
  },
  {
    value: 5
  },
  {
    value: 9
  },
  {
    value: 6
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
