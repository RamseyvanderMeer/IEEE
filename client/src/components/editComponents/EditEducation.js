import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import './Edit.scss'
import axios from 'axios'



const EditEducation = (props) => {

    const [education, setEducation] = useState('')
    const [message, setMessage] = useState('')
    const history = useHistory()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/education/${props.match.params.id}`)
                // console.log(res.data)
                setEducation(res.data.education)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])

    const onChangeEducation = (e) => {
        setEducation(e.target.value)
        console.log(education)
    }

    const updateEducation = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.put(`/education/update/${props.match.params.id}`, { education })
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
                            <h4>Education Component</h4>
                            <label htmlfor="text">Education</label>
                            <input
                                value={education}
                                onChange={onChangeEducation}
                                type="text" />
                            <div className="btns">
                                <button type="submit" onClick={updateEducation}>Update</button>
                                <Link to="/admin"><button className="cancel-btn">cancel</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditEducation