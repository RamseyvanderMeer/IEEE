import React from 'react'
import { Link } from 'react-router-dom'
import { scroller } from "react-scroll"
import '../../App.scss'

const Footer = () => {

    // for scralli navbar elements
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 800,
            delay: 50,
            smooth: true,
            offset: -80
        })
    }

    return (
        <React.Fragment>

            <div className="main-contact">
                <div className="contact">
                    <div className="contact-center">
                        <div className="contact-center-links">
                            <h3>Links</h3>
                            <div className="contact-links">
                                <li><Link to='/' onClick={() => scrollToElement('Home')}>Home</Link></li>
                                <li><Link to='/' onClick={() => scrollToElement('About')}>About</Link></li>
                                <li><Link to='/' onClick={() => scrollToElement('Social')}>Social</Link></li>
                                <li><Link to='/' onClick={() => scrollToElement('Exprience')}>Board</Link></li>
                                <li><Link to='/' onClick={() => scrollToElement('Technicals')}>Technicals</Link></li>
                                <li><Link to='/' onClick={() => scrollToElement('Contact')}>Contact</Link></li>
                                <li><Link className="admin" to='/'>Admin</Link></li>
                                <li><Link to='/login'>Login</Link></li>
                            </div>
                        </div>

                        <div className="contact-center-media">
                            <h3>Media</h3>
                            <div className="contact-media">
                                <li href="https://github.com/RamseyvanderMeer">
                                    <a><i className="fab fa-github-square"></i>Github</a>
                                </li>
                                <li href="https://www.facebook.com/ramsey.vandermeer">
                                    <a><i className="fab fa-facebook-square"></i>Facebook</a>
                                </li>
                                <li href="http://www.linkedin.com/in/ramseyvandermeer">
                                    <a><i className="fab fa-linkedin"></i>Linkedin</a>
                                </li>
                                <li href="https://www.instagram.com/ramsey_photos/">
                                    <a><i className="fab fa-instagram-square"></i>Instagram</a>
                                </li>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="footer">
                    <p>Designed and Created by Ramsey 2021</p>
                </div>

            </div>
        </React.Fragment>
    )
}

export default Footer