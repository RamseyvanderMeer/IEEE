import React, { useContext } from 'react'
import './About.scss'
import { DataContext } from '../Context/GlobalContext'
import alma from '../../images/AlmaVector.svg'

const About = () => {

    const state = useContext(DataContext)
    const [about] = state.about
    // console.log(about)

    return (
        <div className="about">
            <div className="about__container">
                <div className="about__image">
                    <img className="about__container__alma" src={alma} />
                </div>
                <div className="about__content">
                    <div className="about__title">
                        IEEE UIUC Branch
                    </div>
                    {about.map(item => (
                        <div className="about__text" key={item._id}>
                            <p>
                                {item.about}
                            </p>
                        </div>
                    ))}
                    <div className="about__button__spacing">
                        <div className="about__button">
                            <div className="about__button__text">
                                <a href="/board">Board</a>
                            </div>
                        </div>
                        <div className="about__button">
                            <div className="about__button__text">
                                <a href="/sign-up">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About