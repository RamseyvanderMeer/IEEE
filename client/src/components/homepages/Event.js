import React, {useState} from 'react'
import './Events.scss'

const Event = (props) => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <button className="single-event" onClick={() => setIsOpen(!isOpen)} style={{ backgroundImage: `url(${props.image})` }} key={props.id}>
            <div className="single-event__overlay" >
                <div className="single-event__overlay__content">
                    <h1>{props.title}</h1>
                    <p className={isOpen ? 'show' : 'hidden'} >{props.description}</p>
                </div>  
            </div>
        </button>
    )
}

export default Event