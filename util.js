import { CellTypes, Boards } from "./constants";

const buildBoard = () => {
  const n = Boards.length - 1;
  const boardIdx = Math.floor(Math.random() * (n + 1));
  const board = Boards[boardIdx];
  return board;
};

module.exports = {
  buildBoard
};
