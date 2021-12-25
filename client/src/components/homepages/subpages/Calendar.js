import React from 'react'
import './Calendar.scss'

const Calendar = () => {

    return (
        <div class="calendar">
            <div class="calendar__container">
                <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FChicago&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=1&showTz=1&mode=WEEK&src=aWVlZS51aXVjQGdtYWlsLmNvbQ&src=NXRyN3ZoZWh2MDdsZXRvZ2plb2cybTJ2dXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NG5hM2p1ZWY2cjEwYW50bmJ0bW5pYXY3bmNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=Yjk1a2FobzRhY29zanA2bTg5b2xmOHNodGNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cnM2ZWFvdHB1NWw4aGxnbWVvdDBpdTM1bmdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=NDNqY2dyZDl1dnB2MTB0cGNrcmN1M2dzOGtAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=aWxsaW5vaXMuZWR1X2o5dmVrNnFqZGl1NjFyNXIyNnRxaTY1djdjQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&color=%237986CB&color=%239E69AF&color=%233F51B5&color=%23039BE5&color=%237CB342&color=%230B8043&color=%239E69AF" style={{ border: 'solid 1px #fff', opacity:'.95' }} width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div>
        </div>
    )
}

export default Calendar