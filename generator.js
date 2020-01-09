// just a script that helped me in automating the board creation process
var readline = require("readline");
var { CellTypes } = require("./constants");

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let row = 0;
let col = 0;

const Board = [
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9),
  new Array(9)
];

const printBoard = () => {
  Board.forEach(e => console.log(e));
};

const buildObjFromVal = value => {
  const int = Number(value);
  return {
    value: int,
    cellType: int === 0 ? CellTypes.BLANK : CellTypes.DEFAULT
  };
};

const adjustRowCol = (r, c) => {
  if (r == 8 && c == 8) {
    printBoard();
  } else if (c == 8) {
    r += 1;
    c = 0;
  } else {
    c += 1;
  }
  return { row: r, col: c };
};

console.log(`Board[${row}][${col}]`);
rl.on("line", function(line) {
  Board[row][col] = buildObjFromVal(line);
  const result = adjustRowCol(row, col);
  row = result.row;
  col = result.col;
  console.log(`Board[${row}][${col}]`);
});
