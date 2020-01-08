import React from "react";
import Row from "../Row";
import Button from "../Button";
import Solver from "../../solver";

import { CellTypes } from "../../constants";
import "./index.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const { boardData } = props;
    this.state = {
      board: boardData,
      updateQueue: []
    };
  }
  renderRows() {
    const { board } = this.state;
    return board.map((cellData, idx) => {
      return <Row key={idx} cellData={cellData} />;
    });
  }
  startSolve = () => {
    const { board } = this.state;
    const solver = new Solver(board, this.queueUpdates);
    solver.solveSudoku();
    setInterval(this.applyUpdates, 1);
  };

  applyUpdates = () => {
    const { updateQueue } = this.state;
    if (updateQueue.length > 0) {
      const { row, col, value } = updateQueue.shift();
      const { board } = this.state;
      board[row][col] = {
        value: Number(value),
        cellType: value !== 0 ? CellTypes.GENERATED : CellTypes.BLANK
      };
      this.setState({
        board
      });
    }
  };

  queueUpdates = (value, row, col) => {
    const { updateQueue } = this.state;
    updateQueue.push({ row, col, value });
  };
  render() {
    return (
      <div>
        <div className="board">{this.renderRows()}</div>
        <div className="btn-group">
          <Button buttonText="Reset Board" />
          <Button buttonText="Solve Board" onClick={this.startSolve} />
        </div>
      </div>
    );
  }
}

export default Board;
