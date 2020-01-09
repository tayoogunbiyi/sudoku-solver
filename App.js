import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import { buildBoard } from "./util";
import "./index.css";
import Button from "./components/Button";

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
