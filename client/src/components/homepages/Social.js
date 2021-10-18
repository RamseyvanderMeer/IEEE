import React, { useContext } from 'react'
import './Social.scss'
import { DataContext } from '../Context/GlobalContext'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Social = () => {

    const state = useContext(DataContext)
    const [social] = state.social
    console.log(social)

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
        <div className="social-page">
            <div class="social-page__title">
                IEEE Social Events
            </div>
            <div class="social">
                <Carousel
                    swipeable={true}
                    draggable={true}
                    responsive={responsive}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    >
                    {social.map((item) => (
                        <div className="social__single-social" key={item._id}>
                            <div className="social__single-social__info">
                                <h3 className="social__single-social__info__title">
                                    {item.title}
                                </h3>
                                <p className="social__single-social__info__date">
                                    {item.date}
                                </p>
                                <div className="social__single-social__img">
                                    <img src={item.images.url} alt="" />
                                </div>
                                <p className="social__single-social__info__description">
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

export default Social