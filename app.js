import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./index.css";
import Button from "./components/Button";

class App extends React.Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
