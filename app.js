import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./index.css";
import Button from "./components/Button";
import { CellTypes, Boards } from "./constants";

const buildBoard = () => {
  const n = Boards.length - 1;
  const boardIdx = Math.floor(Math.random() * (n + 1));
  const board = Boards[boardIdx];
  for (let i = 0; i < board.length; i++) {
    board[i] = {
      value: board[i],
      cellType: CellTypes.DEFAULT
    };
  }
  console.log(board);
  return board;
};

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
    console.log(buildBoard());
    return (
      <div>
        <Board boardData={boardInitialData} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
