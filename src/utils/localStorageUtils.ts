import { AppProps } from "../types/propsType"

export const saveGameStorage = (board : AppProps["board"],turn : AppProps["turn"]) => {
    localStorage.setItem("board", JSON.stringify(board))
    localStorage.setItem("turn", JSON.stringify(turn))
}

export const resetGameStorage = () => {
    localStorage.removeItem("board")
    localStorage.removeItem("turn")
}