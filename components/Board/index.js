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
    if (this.state.solving) {
      console.log("Board is currently in solving state");
      return;
    }
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

  startInstantSolve = () => {
    if (this.state.solving) {
      console.log("Board is currently in solving state");
      return;
    }
    this.setState({ solving: true });
    const { board } = this.state;
    const solver = new Solver(board, (value, row, col) => {
      board[row][col] = {
        value: Number(value),
        cellType: Number(value) !== 0 ? CellTypes.GENERATED : CellTypes.BLANK
      };
      this.setState({
        board
      });
    });
    solver.solveSudoku(err => {
      if (err) {
        alert(err);
      }

      this.setState({
        solving: false
      });
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
    const queueLength = this.state.updateQueue.length;
    const isSolving = this.state.solving;
    return (
      <div>
        <div className="board">{this.renderRows()}</div>
        <div className="btn-group">
          <Button
            disabled={isSolving}
            buttonText={queueLength == 0 ? "Random Board" : "Restart"}
            onClick={this.resetBoard}
          />
          <Button
            disabled={isSolving}
            buttonText="Solve Board In Steps"
            onClick={this.startSolve}
          />
          <Button
            disabled={isSolving || queueLength > 0}
            buttonText="Solve Board Instantly"
            onClick={this.startInstantSolve}
          />
        </div>
        <div>
          <h3>NOTES</h3>
          <p>
            {" "}
            - Rules Of Sudoku -{" "}
            <a
              target="_blank"
              href="http://www.counton.org/sudoku/rules-of-sudoku.php"
            >
              click here
            </a>{" "}
          </p>
          <p>
            {" "}
            - Clicking the <span className="bg-special">Reset Board</span>{" "}
            button basically gives you a new board to try out the program on.
          </p>
          <p>
            {" "}
            - Clicking the <span className="bg-special">
              Solve In Steps
            </span>{" "}
            button solves the board in steps, and shows you the backtracking
            process on the board (i.e how it undoes it choices and makes new
            ones recursively). Please note that using this might take some time
            to complete running due to the process of having the visually
            display each decision attempted by the algorithm
          </p>
          <p>
            {" "}
            - Clicking the <span className="bg-special">
              Solve Instantly
            </span>{" "}
            button solves the board in steps, and but{" "}
            <b>
              does not show you the backtracking process on the board's UI.{" "}
            </b>
            It simply applies the final result to the board.
          </p>
          <p>
            - If you notice a bug, raise an issue on this{" "}
            <a href="https://github.com/tayoogunbiyi/sudoku-solver">
              github repo{" "}
            </a>
            or reach me @ eyitayoogunbiyi at gmail dot com
          </p>
        </div>
      </div>
    );
  }
}

export default Board;
