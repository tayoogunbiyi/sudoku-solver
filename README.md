# Sudoku Solver

###### You can check out a live version of this project on http://sudokusolve.netlify.com/

### About

This project attempts to provide a way to visualize the way a recursive backtracking algorithm solves a partially filled sudoku board.

The backtracking algorithm itself works by placing an integer `i` at a position `(r,c)` then checking if this placement leads to an invalid board state, abandoning or proceeding as appropriate.

Determining the validity of a current board is done by following the main rules of sudoku which require unique values across each cell of every row, column and 3X3 subgrid.

Even though the implemented solution has a polynomial runtime, it is definitely more efficient that generating all possible combinations of the board and proceeding the eliminate invalid boards.

There is a more efficient technique to solve this problem called Dancing Links (Knuth's Algorithm X). However, it's a bit more complex to implement. Here's a link to the paper: [Dancing Links](https://www.ocf.berkeley.edu/~jchu/publicportal/sudoku/0011047.pdf) if you're interested.

### Installation
`
Clone the repository, Install dependencies and Start the application

```sh
git clone git@github.com:tayoogunbiyi/sudoku-solver.git
cd sudoku-solver
npm install
npm run start
```

### Possible Contributions

1. It would be nice to have a dark mode theme. Who doesn't like dark mode ?
2. Probably implement dancing links technique.
