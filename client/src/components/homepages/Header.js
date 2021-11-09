import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <React.Fragment>
            <div className="header">
                <div className="header__title">
                    IEEE UIUC Branch
                </div>
                <div className="header__text">
                IEEE (pronounced I-Triple-E), which stands for the Institute of Electrical and Electronics Engineers, is known as the world’s largest professional association for the advancement of technology. Here at the University of Illinois at Urbana-Champaign, IEEE represents the second largest student branch in the nation. Though it may seem from the name that we consist of students only from the Electrical and Computer Engineering department, we in fact encompass all different fields and welcome this diversity. Our organization strives to further students professional and socialal development through a wide array of opportunities. Please take a look at what we have to offer, and come visit the office located at ECEB 1016!
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header