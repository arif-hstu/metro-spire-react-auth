import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import { LocationDetailsContext } from '../DestinationDetails/DestinationDetails';

// importe ticket image
import ticketImage from '../../images/ticketIcon.png'
// import styleSheet
import './Summary.css'
import TicketDetails from '../TicketDetails/TicketDetails';

const Summary = (props) => {

    const [startDate, setStartDate] = props.dateState;
    //================
    const [ticket, setTicket] = useState({});
    useEffect(() => {
        const newTicket = JSON.parse(localStorage.getItem('ticketInfo'));
        setTicket(newTicket)
    }, [])
    //================

    //consume from DestinationDetails
    const [locationDetails, setLocationDetails] = useContext(LocationDetailsContext);
    // consume from App
    const [tickets, setTickets] = useContext(UserContext);
    console.log(startDate.getDate())
    return (
        <div className='Summary'>
            <div className='locationName'>
                <div className="icon">
                </div>
                <div className="name">
                    {
                        locationDetails.map(location => <p><span>⚫</span> {location.label}</p>)
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