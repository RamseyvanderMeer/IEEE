import React, { useContext } from 'react'
import './Projects.scss'
import { DataContext } from '../Context/GlobalContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Projects = () => {

    const state = useContext(DataContext)
    const [projects] = state.projects

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="project-page">
            <div class="title">
                IEEE Events
            </div>
            <div class="projects">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    // centerMode={true}
                    >
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
                </Carousel>
            </div>

        </div>

    )
}

export default Projects