import React, { useState } from 'react'
import './Contact.scss'
import Profile from '../../images/mess.jpg'
import axios from 'axios'
import Load from '../../images/load2.gif'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [banner, setBanner] = useState('')
    const [bool, setBool] = useState(false)

    //inputs
    const handleNameChange = (e) => {
        setName(e.target.value)
        console.log(name)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
        console.log(email)
    }
    const handleMessageChange = (e) => {
        setMessage(e.target.value)
        console.log(message)
    }

    //submit form

    const formSubmit = async (e) => {
        e.preventDefault()
        let data = {
            name: name,
            email: email,
            message: message
        }

        setBool(true)
        try {
            const res = await axios.post('/contact', data)
            setBanner(res.data.msg)
            setBool(false)
            setTimeout(() => {
                setBanner('')
            }, 2000)
            setName('')
            setEmail('')
            setMessage('')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="main-container">
            <div className="contactForm">
                <h2 className="title">contact form</h2>
                <div className="contactForm-center">
                    <div className="contact_form">
                        <form onSubmit={formSubmit}>
                            <p>{banner}</p>
                            <label htmlfor="name">Name</label>
                            <input
                                value={name}
                                onChange={handleNameChange}
                                type="text"
                                placeholder="input name..."
                                required />
                            <label htmlfor="email">Email</label>
                            <input
                                value={email}
                                onChange={handleEmailChange}
                                type="text"
                                placeholder="input email..."
                                required />
                            <label htmlfor="message">message</label>
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                name="message"
                                type="text"
                                id=""
                                placeholder="input message..."
                                required />
                            <div className="send-btn">
                                <button type="submit">Send{bool? <b className="load" ><img src={Load} /></b>:''}</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-info">
                        <h4>send your message</h4>
                        <img src={Profile} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact