import React from "react";
import ReactDOM from "react-dom";
import Row from "./components/Row";

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

class App extends React.Component {
  renderRows(rowData) {
    return rowData.map((cellData, idx) => {
      return <Row key={idx} cellData={cellData} />;
    });
  }
  render() {
    return <div>{this.renderRows(rowData)}</div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
