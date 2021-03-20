import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SingleTicketContext } from '../../App';

// import styleSheet
import './Ticket.css'
const Ticket = (props) => {
    // destructuring the props value from Home.js
    const { ticketName, ticketPrice, ticketBackground } = props.ticket;
    const background = {
        background: 'url(' + ticketBackground + ')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    }



    // ====================
    const singleTicketHandler = (e) => {
        console.log(props.ticket)
        localStorage.setItem('ticketInfo', JSON.stringify(props.ticket))
    }
    // ====================

    return (
        <div className='Ticket' style={background}>
            <div className="ticketContent">
                <div className="topPart">
                    <h4>{ticketName}</h4>
                </div>
                <div className="bottomPart">
                <Link onClick={() => singleTicketHandler()} className='primaryButton' to='/destination'>BUY NOW</Link>
                    <h2>{ticketPrice}</h2>
                </div>
            </div>

        </div>
    );
};

export default Ticket; // exported to Destination Details