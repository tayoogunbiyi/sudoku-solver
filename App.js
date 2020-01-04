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
  return board;
};

class App extends React.Component {
  render() {
    return (
      <div>
        <Board boardData={buildBoard()} />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
