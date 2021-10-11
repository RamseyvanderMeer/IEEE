import React, { useContext } from 'react'
import './Projects.scss'
import { DataContext } from '../Context/GlobalContext'

const Projects = () => {

    const state = useContext(DataContext)
    const [projects] = state.projects

    return (
        <div className="project-page">
            <div class="title">
                IEEE Events
            </div>
            <div className="projects">
                {projects.map((item) => (
                    <div className="projects__single-project" key={item._id}>
                        <div className="projects__single-project__info">
                            <h3 className="projects__single-project__info__title">
                                {item.title}
                            </h3>
                            <p className="projects__single-project__info__date">
                                {item.date}
                            </p>
                            <div className="projects__single-project__img">
                                <img src={item.images.url} alt="" />
                            </div>
                            <p className="projects__single-project__info__description">
                                {item.description}
                            </p>
                        </div>


                    </div>
                ))}
            </div>
        </div>

    )
}

export default Projects