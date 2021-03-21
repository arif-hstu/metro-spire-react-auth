import React from 'react';

const TicketDetails = (props) => {
    const [ticket, setTicket, ticketImage] = props.ticket;
    console.log('TicketDetails:  ', ticket)
    return (
        <div>
            <div className="ticketDetails">
                <img src={ticketImage} alt="" srcset="" />
                <p>{ticket.ticketName}</p>
                <p>{ticket.ticketPrice}</p>
            </div>
        </div>
    );
};

export default TicketDetails; // exported to Summary