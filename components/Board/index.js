import React from "react";
import Row from "../Row";
import Button from "../Button";

import { CellTypes } from "../../constants";
import "./index.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const { boardData } = props;
    this.state = {
      board: boardData
    };
  }
  renderRows() {
    const value = Math.ceil(1 + Math.random() * 8);
    const row = Math.floor(Math.random() * 8);
    const col = Math.floor(Math.random() * 8);
    setTimeout(() => this.updateBoardAt(value, row, col), 1000);
    const { board } = this.state;
    return board.map((cellData, idx) => {
      return <Row key={idx} cellData={cellData} />;
    });
  }
  updateBoardAt = (value, row, col) => {
    const { board } = this.state;
    console.log(board[row]);
    board[row][col] = {
      value,
      cellType: CellTypes.GENERATED
    };
    console.log(board[row]);
    this.setState({
      board
    });
  };
  render() {
    return (
      <div>
        <div className="board">{this.renderRows()}</div>
        <div className="btn-group">
          <Button buttonText="Reset Board" />
          <Button buttonText="Solve Board" />
        </div>
      </div>
    );
  }
}

export default Board;
