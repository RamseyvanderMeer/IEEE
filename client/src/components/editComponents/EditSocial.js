import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Edit.scss'
import axios from 'axios'



const EditSocial = (props) => {

    const [social, setSocial] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/social/${props.match.params.id}`)
                // console.log(res.data)
                setSocial(res.data.social)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const onChangeSocial = (e) => {
        setSocial(e.target.value)
        console.log(social)
    }

    const updateSocial = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/social/update/${props.match.params.id}`, { social })
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
                            <h4>Social Component</h4>
                            <label htmlfor="text">Social</label>
                            <input
                                value={social}
                                onChange={onChangeSocial}
                                type="text" />
                            <div className="btns">
                                <button type="submit" onClick={updateSocial}>Update</button>
                                <Link to="/admin"><button className="cancel-btn">cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditSocial