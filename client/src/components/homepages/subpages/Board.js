import React, { useContext } from 'react'
import '../../../App.scss'
import './Board.scss'
import { DataContext } from '../../Context/GlobalContext'

const Board = () => {

    const state = useContext(DataContext)
    const [board] = state.board

    return (
        <div className="board">
            <div class="board__container">
                <h2 className="board__title">
                    Board
                </h2>
                <div className="board__person">
                    {board.map((item) => (
                        <div key={item._id}>
                            <div class="board__person__card">
                                <div className="board__person__card__image">
                                    <img className="board__person__card__img" src={item.images.url} alt="" />
                                </div>
                                <p className="board__person__card__name">
                                    {item.name}
                                </p>
                                <i className="board__person__card__title">
                                    {item.title}
                                </i>
                                <p className="board__person__card__description">
                                    {item.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Board