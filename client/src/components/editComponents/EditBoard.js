import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Edit.scss'
import axios from 'axios'



const EditBoard = (props) => {

    const [board, setBoard] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/board/${props.match.params.id}`)
                // console.log(res.data)
                setBoard(res.data.board)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const onChangeBoard = (e) => {
        setBoard(e.target.value)
        console.log(board)
    }

    const updateBoard = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/board/update/${props.match.params.id}`, { board })
            setMessage(`${res.data.msg}`)
        } catch (error) {
            console.log(error)
        }
        // setAbout('')
        setTimeout(() => {
            history.push("/admin")
        }, 2000)
    }


    return (
        <div className="edit">
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form>
                            <h3 className="updated">{message}</h3>
                            <h4>Board Component</h4>
                            <label htmlFor="text">Board</label>
                            <input
                                value={board}
                                onChange={onChangeBoard}
                                type="text" />
                            <div className="btns">
                                <button type="submit" onClick={updateBoard}>Update</button>
                                <Link to="/admin"><button className="cancel-btn">cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBoard