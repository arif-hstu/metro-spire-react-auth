import React from 'react';
import { Link } from 'react-router-dom';

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
    return (
        <div className='Ticket' style={background}>
            <div className="ticketContent">
                <div className="topPart">
                    <h4>{ticketName}</h4>
                    <Link className='primaryButton' to='/destination'>BUY NOW</Link>
                </div>
                <div className="bottomPart">
                    <h2>{ticketPrice}</h2>
                </div>
            </div>

        </div>
    );
};

export default Ticket;