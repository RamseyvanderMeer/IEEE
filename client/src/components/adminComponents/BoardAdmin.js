import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const BoardAdmin = () => {

    const [board, setBoard] = useState('');
    const [boardData, setBoardData] = useState([]);
    const [message, setMessage] = useState('');
    const [messageCond, setMessageCond] = useState(false);

    useEffect(() => {
        // fetching data
        const fetchData = async () => {
            try {
                const res = await axios.get(`/board`);
                //  console.log(res.exprerience);
                setBoardData(res.data);
            } catch (err) {
            }
        }
        fetchData()
    }, [])
    // onchange
    const onchangeBoard = (e) => {
        setBoard(e.target.value);
        // console.log(board);
    }
    // submit board
    const handleSubmit = (e) => {
        e.preventDefault();
        const postBoard = {
            board
        }
        setBoard('');
        axios.post(`/board`, postBoard)
            .then(res => {
            })
            .catch(err => console.log(err))
    }
    // delete about
    const deleteBoard = (id) => {
        axios.delete(`/board/${id}`)
            .then(res => {
                setMessageCond(true);
                setMessage(`${res.data.msg}`);

                const timeout = setTimeout(() => {
                    setMessage('');
                    setMessageCond(false);
                }, 2000)
                return () => clearTimeout(timeout);
            }).catch(err => console.log(err))

        // delete fro ui
        const boardFilterDel = boardData.filter(item => item._id !== id)

        setBoardData(boardFilterDel);
    }

    return (
        <div className="same-component" >
            <div className="same-form">
                <form onSubmit={handleSubmit}>
                    <h4>Board component</h4>
                    <label htmlfor="text">Board</label>
                    <input type="text" onChange={onchangeBoard} value={board} />
                    <button type="submit">Add item</button>
                </form>
            </div>

            <div className="same-item">
                <div className="about-info">
                    {boardData.map(item => (
                        <div className="same-admin" key={item._id}>
                            <div className="icons">
                                <Link to={`/editBoard/${item._id}`}><i className="fas fa-edit"></i></Link>
                                <i className="fas fa-trash" onClick={() => deleteBoard(item._id)}></i>
                            </div>
                            {/* single board */}
                            <div className="single-board">
                                <p>{item.board}</p>

                            </div>
                            <h3 className={messageCond ? "new-delete item-delete-tab" : "item-delete-tab"}>{message}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BoardAdmin