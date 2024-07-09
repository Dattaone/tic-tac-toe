import { WinnerProps } from "../types/propsType";
import { Cell } from "./Cell";

export const WinnerModal = ({ winner, resetBoard }: WinnerProps) => {
  if (winner == null) return null;
  const winnerText = winner ? "Gano el jugador" : "Empate";
  return (
    <section className="winner">
      <div className="winner-modal">
        <header>
          <h2>{winnerText}</h2>
        </header>
        <main>
          <Cell>{winner === false ? "-" : winner}</Cell>
        </main>
        <footer>
          <button className="button-reset" onClick={resetBoard}>
            Reset
          </button>
        </footer>
      </div>
    </section>
  );
};
