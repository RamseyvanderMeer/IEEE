import React, { useContext } from 'react'
import '../../../App.scss'
import './Board.scss'
import { DataContext } from '../../Context/GlobalContext'

const Board = () => {

    const state = useContext(DataContext)
    const [board] = state.board

    return (
        <div className="board">
            <h2 className="title">
                Board
            </h2>
            <div className="board__container">
                    {board.map((item) => (
                        <div className="single-board" key={item._id}>
                            <p>
                                {item.title}
                            </p>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default Board