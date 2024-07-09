import '../styles/Cell.css'
import {CellProps} from '../types/propsType'

export const Cell = ({children, updateBoard, isSelected}: CellProps) => {

    const handleClick = () => {
        if(updateBoard){
            updateBoard()
        }
    }

    const classButton = `cell ${isSelected ? "cell-selected" : ""}`

    return(
        <div onMouseDown={handleClick} className={classButton}>
            <strong className="cell-text">{children}</strong>
        </div>    
    )
}