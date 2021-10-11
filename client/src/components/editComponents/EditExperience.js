import React, { useEffect, useState } from 'react'
import {Link, useHistory} from 'react-router-dom'
import './Edit.scss'
import axios from 'axios'


const EditExperience = (props) =>{

    const [experience, setExperience] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/experience/${props.match.params.id}`)
                // console.log(res.data)
                setExperience(res.data.experience)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const onChangeExperience = (e) => {
        setExperience(e.target.value)
        // console.log(experience)
    }

    const updateExperience = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/experience/update/${props.match.params.id}`, { experience })
            setMessage(`${res.data.msg}`)
        } catch (error) {
            console.log(error)
        }
        // setAbout('')
        setTimeout(() => {
            history.push("/admin")
        }, 2000)
    }

    return(
<div className="edit">
            <div className="main-container">
                <div className="same-component">
                    <div className="same-form">
                        <form>
                            <h3 className="updated">{message}</h3>
                            <h4>Experience Component</h4>
                            <label htmlfor="text">Experience</label>
                            <input 
                            value={experience}
                            onChange={onChangeExperience}
                            type="text" />
                            <div className="btns">
                                <button type="submit" onClick={updateExperience}>Update</button>
                                <Link to="/admin"><button className="cancel-btn">cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditExperience