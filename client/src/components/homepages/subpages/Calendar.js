import React from 'react'
import './Calendar.scss'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar';

require('dotenv').config()

const API = process.env.REACT_APP_GOOGLE_API_KEY

console.log(API)

const Calendar = () => {


    let INITIAL_EVENTS = [
        {
            googleCalendarId: '4na3juef6r10antnbtmniav7nc@group.calendar.google.com',
            className:'event'
        }
    ]

    return (
        <div className="calendar">
            <div className="calendar__container">
                <FullCalendar
                    plugins={[dayGridPlugin, googleCalendarPlugin]}
                    initialView="dayGridMonth"
                    googleCalendarApiKey={API}
                    eventSources={INITIAL_EVENTS}
                />
            </div>
        </div>
    )
}

export default Calendar