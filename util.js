import { CellTypes, Boards } from "./constants";

const createDeepCopyOfBoard = originalBoard => {
  const newBoard = [];
  originalBoard.forEach(row => {
    newBoard.push([...row]);
  });
  return newBoard;
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
