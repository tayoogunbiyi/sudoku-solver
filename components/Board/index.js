import React from "react";
import Row from "../Row";
import Button from "../Button";
import Solver from "../../solver";
import { buildBoard } from "../../util";
import { CellTypes } from "../../constants";
import "./index.css";

class Board extends React.Component {
  constructor(props) {
    super(props);
    const { boardData } = props;
    this.state = {
      board: boardData,
      updateQueue: [],
      solving: false
    };
  }
  renderRows() {
    const { board } = this.state;
    return board.map((cellData, idx) => {
      return <Row key={idx} cellData={cellData} />;
    });
  }
  startSolve = () => {
    if (this.state.solving) return;
    const { board } = this.state;
    this.setState({ solving: true });
    const solver = new Solver(board, this.queueUpdates);
    solver.solveSudoku(err => {
      if (err) {
        alert(err);
      }
      this.setState({
        solving: false
      });
    });
    const intervalNumber = setInterval(this.applyUpdates, 1);
    this.setState({
      intervalNumber
    });
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
  clearUpdateBoardInterval = () => {
    const { intervalNumber } = this.state;
    if (intervalNumber) {
      clearInterval(intervalNumber);
    }
  };
  resetBoard = () => {
    if (this.state.solving) return;
    this.clearUpdateBoardInterval();
    this.setState({
      solving: false,
      board: buildBoard(),
      updateQueue: []
    });
  };
  render() {
    return (
      <div>
        <div className="board">{this.renderRows()}</div>
        <div className="btn-group">
          <Button
            disabled={this.state.solving}
            buttonText="Reset Board"
            onClick={this.resetBoard}
          />
          <Button
            disabled={this.state.solving}
            buttonText="Solve Board"
            onClick={this.startSolve}
          />
        </div>
      </div>
    );
  }
}

export default Board;
