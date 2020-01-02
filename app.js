import React from "react";
import ReactDOM from "react-dom";
import Board from "./components/Board";
import "./index.css";

class App extends React.Component {
  render() {
    return <Board />;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
