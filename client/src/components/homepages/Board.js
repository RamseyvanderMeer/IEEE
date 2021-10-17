import React, { useContext } from 'react'
import '../../App.scss'
import { DataContext } from '../Context/GlobalContext'

const Board = () => {

    const state = useContext(DataContext)
    const [board] = state.board

    return (
        <div>
            <div className="main-container">
                <h2 className="title">
                    Board
                </h2>
                <div className="board">
                    <div className="board-center">
                        {board.map((item) => (
                            <div className="single-board" key={item._id}>
                                <p>
                                    {item.board}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Board