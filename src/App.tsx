import { useState } from 'react'
import { Cell } from './components/Cell'
import { TURNS } from './const'
import { AppProps } from './types/propsType'
import { saveGameStorage, resetGameStorage } from './utils/localStorageUtils'
import { checkWinner, checkEndGame, generateCellId } from './utils/board'
import { WinnerModal } from './components/WinnerModal'
// @ts-expect-error: No types available for canvas-confetti
import confetti from 'canvas-confetti';
import './styles/App.css'





function App() {
  const [board, setBoard] = useState(() => {
    if(localStorage.getItem("board")){
      return JSON.parse(localStorage.getItem("board")!) as AppProps["board"]
    }
    return Array(9).fill(null)
  });
  const [turn,setTurn] = useState(() => {
    if(localStorage.getItem("turn")){
      return JSON.parse(localStorage.getItem("turn")!)
    }
    return TURNS.X
  })
  const [winner, setWinner] = useState(null as AppProps["winner"])

  
  
  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  
    resetGameStorage();
  };
  const updateBoard = (index : number) =>{
    const newBoard = [...board]
    if(newBoard[index] || winner) return
    
    newBoard[index] = turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    const newWinner = checkWinner(newBoard as AppProps["board"]) as AppProps["winner"]

    if(newWinner){
      confetti()
      setWinner(newWinner)
    }
    saveGameStorage(newBoard as AppProps["board"],newTurn as AppProps["turn"])

    setBoard(newBoard)
    setTurn(newTurn)

    if (!newWinner && checkEndGame(newBoard as AppProps["board"])) {
      setWinner(false);
    }
  }

  return (
    <>
      <h1>tic tac toe</h1>
      <button className="button-reset" onClick={resetBoard}>Reset</button>
      <div className='game-board'>
      {
        board.map((cell,index)=>{
          return (
            <Cell key={generateCellId(index)} updateBoard={() => updateBoard(index)}>{cell}</Cell>
          )
        })
      }
      </div>
      <section className="turns-board">
        <Cell isSelected={turn === TURNS.X}>{TURNS.X}</Cell>
        <Cell isSelected={turn === TURNS.O}>{TURNS.O}</Cell>
      </section>
      <WinnerModal winner={winner} resetBoard={resetBoard} />
    </>
  )
}

export default App
