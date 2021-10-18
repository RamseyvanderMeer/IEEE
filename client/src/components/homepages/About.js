import React, { useContext } from 'react'
import './About.scss'
import { DataContext } from '../Context/GlobalContext'

const About = () => {

    const state = useContext(DataContext)
    const [about] = state.about
    // console.log(about)

    return (
        <div className="about">
            <div class="about__title">
                IEEE UIUC Branch
            </div>
            {about.map(item => (
                <div className="about__text" key={item._id}>
                    <p>
                        {item.about}
                    </p>
                </div>
            ))}
            <div class="about__button">
                <div class="about__button__text">
                    Board
                </div>
            </div>
        </div>
    )
}

export default About