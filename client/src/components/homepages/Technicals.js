import React, { useContext } from 'react'
import './Technicals.scss'
import { DataContext } from '../Context/GlobalContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Technicals = () => {

    const state = useContext(DataContext)
    const [technicals] = state.technicals

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 2000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 2000, min: 1024 },
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
        <div className="technical-page">
            <div class="technical-page__title">
                IEEE Professional Events
            </div>
            <div class="technicals">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    >
                    {technicals.map((item) => (
                        <div className="technicals__single-technical" key={item._id}>
                            <div className="technicals__single-technical__info">
                                <h3 className="technicals__single-technical__info__title">
                                    {item.title}
                                </h3>
                                <p className="technicals__single-technical__info__date">
                                    {item.date}
                                </p>
                                <div className="technicals__single-technical__img">
                                    <img src={item.images.url} alt="" />
                                </div>
                                <p className="technicals__single-technical__info__description">
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

export default Technicals