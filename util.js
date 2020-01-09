import { CellTypes, Boards } from "./constants";

const createDeepCopyOfBoard = originalBoard => {
  return JSON.parse(JSON.stringify(originalBoard));
};

const buildBoard = () => {
  const n = Boards.length - 1;
  const boardIdx = Math.floor(Math.random() * (n + 1));
  const board = Boards[boardIdx];
  return createDeepCopyOfBoard(board);
};

module.exports = {
  buildBoard
};
