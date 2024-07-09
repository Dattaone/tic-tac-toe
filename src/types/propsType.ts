export interface AppProps {
    board : [9];
    turn : "x" | "o";
    winner : boolean | string | null;
}

export interface CellProps {
    children?: React.ReactNode
    updateBoard?: () => void
    isSelected?: boolean
}

export interface WinnerProps {
    winner: AppProps["winner"]
    resetBoard: () => void
}
