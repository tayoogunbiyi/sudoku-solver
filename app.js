import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./index.css";
import Button from "./components/Button";
import { CellTypes } from "./constants";

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

const boardInitialData = [];

for (let i = 0; i < 9; i++) {
  boardInitialData.push([...cellData]);
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Board boardData={boardInitialData} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
