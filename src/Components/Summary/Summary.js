import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { LocationDetailsContext } from '../DestinationDetails/DestinationDetails';

// import fakeData
import fakeData from '../../fakeData'
// importe ticket image
import ticketImage from '../../images/ticketIcon.png'
import timeLineIcon from '../../images/timeLineIcon.png'
// import styleSheet
import './Summary.css'
import TicketDetails from '../TicketDetails/TicketDetails';

const Summary = (props) => {

    const [startDate, setStartDate] = props.dateState;
    const [id] = props.id;
    const [ticket, setTicket] = useState({});
    useEffect(() => {
        // const newTicket = JSON.parse(localStorage.getItem('ticketInfo'));
        // setTicket(newTicket)
        const newTicket = fakeData.filter(data => data.ticketId === parseInt(id));
        console.log('summary:    ',fakeData,ticket);
        setTicket(newTicket[0]);
    }, [])

    //consume from DestinationDetails
    const [locationDetails, setLocationDetails] = useContext(LocationDetailsContext);
    return (
        <div className='Summary'>
            <div className='locationName'>
                <div className="icon">
                    <img src={timeLineIcon} alt='icon'></img>
                </div>
                <div className="name">
                    {
                        locationDetails.map(location => <div><p>{location.label}</p></div>)
                    }
                </div>
            </div>
            <p className='date'>Travel Start Date: {startDate.getDate()}/{startDate.getMonth()}/{startDate.getFullYear()}</p>
            <TicketDetails ticket={[ticket, setTicket, ticketImage]} />
            <TicketDetails ticket={[ticket, setTicket, ticketImage]} />
            <TicketDetails ticket={[ticket, setTicket, ticketImage]} />
        </div>
    );
};

export default Summary; //exported to DestinationDetails