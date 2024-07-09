import { CellProps } from "../types/propsType";
import "../styles/Cell.css";

export const Cell = ({ children, updateBoard, isSelected }: CellProps) => {
  const handleClick = () => {
    if (updateBoard) {
      updateBoard();
    }
  };

  const classButton = `cell ${isSelected ? "cell-selected" : ""}`;

  return (
    <button onMouseDown={handleClick} className={classButton}>
      <strong className="cell-text">{children}</strong>
    </button>
  );
};
