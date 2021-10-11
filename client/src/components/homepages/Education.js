import React, { useContext } from 'react'
import './Education.scss'
import { DataContext } from '../Context/GlobalContext'

const Education = () => {

    const state = useContext(DataContext)
    const [education] = state.education

    return (
        <div className="education">
            {education.map((item) => (
                <div className="single-education" key={item._id}>
                    <p>
                        {item.education}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default Education