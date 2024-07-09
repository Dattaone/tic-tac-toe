import { AppProps } from "../types/propsType";
import { WINNER_COMBOS } from "../const";


export const checkEndGame = (boardToCheck: AppProps["board"]) => {
  return boardToCheck.every((cell) => cell !== null);
};
export const checkWinner = (boardToCheck: AppProps["board"]) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo;
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ) {
      return boardToCheck[a];
    }
  }
  return null;
};
