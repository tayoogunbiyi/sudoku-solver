const EMPTY_ENTRY = 0;

// should refactor this into a class as that makes wayyy more sense.

class Solver {
  constructor(board, cb) {
    this.onUpdate = cb;
    this.board = board;
  }
  solveSudoku = () => {
    this.solveUtil(0, 0);
  };

  isValidSudoku = (row, col) => {
    return (
      this.checkBoardRow(row) &&
      this.checkBoardCol(col) &&
      this.checkBoardSubGrid(row, col)
    );
  };

  checkBoardRow = row => {
    const seenValues = new Set();
    for (let i = 0; i < this.board.length; i++) {
      if (
        Number(this.board[row][i].value) !== EMPTY_ENTRY &&
        seenValues.has(Number(this.board[row][i].value))
      ) {
        return false;
      }
      seenValues.add(Number(this.board[row][i].value));
    }
    return true;
  };

  checkBoardCol = col => {
    const seenValues = new Set();
    for (let i = 0; i < this.board.length; i++) {
      if (
        Number(this.board[i][col].value) !== EMPTY_ENTRY &&
        seenValues.has(Number(this.board[i][col].value))
      ) {
        return false;
      }
      seenValues.add(Number(this.board[i][col].value));
    }
    return true;
  };

  checkBoardSubGrid = (row, col) => {
    const SUBGRID_SIZE = Math.sqrt(this.board.length);
    const START_ROW = Math.floor(row / SUBGRID_SIZE) * SUBGRID_SIZE;
    const START_COL = Math.floor(col / SUBGRID_SIZE) * SUBGRID_SIZE;
    const seenValues = new Set();

    for (let r = START_ROW; r < START_ROW + SUBGRID_SIZE; r++) {
      for (let c = START_COL; c < START_COL + SUBGRID_SIZE; c++) {
        if (
          Number(this.board[r][c].value) !== EMPTY_ENTRY &&
          seenValues.has(Number(this.board[r][c].value))
        )
          return false;
        seenValues.add(Number(this.board[r][c].value));
      }
    }
    return true;
  };

  solveUtil = (row, col) => {
    if (row >= this.board.length) return true;
    if (col >= this.board.length) return this.solveUtil(row + 1, 0);

    if (this.board[row][col].value !== EMPTY_ENTRY)
      return this.solveUtil(row, col + 1);

    for (let i = 1; i <= this.board.length; i += 1) {
      this.board[row][col].value = i;
      this.onUpdate(i, row, col);
      if (this.isValidSudoku(row, col) && this.solveUtil(row, col + 1)) {
        return true;
      }
    }
    this.board[row][col].value = EMPTY_ENTRY;
    this.onUpdate(EMPTY_ENTRY, row, col);
    return false;
  };
}

export default Solver;
