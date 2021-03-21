import React from 'react';
import Ticket from '../Ticket/Ticket';

// import stylesheet
import './Home.css'

const Home = (props) => {
    const [tickets, setTickets] = props.tickets;

    return (
        <div className='Home'>
            <div className="tickets">
                {
                    tickets.map(ticket => <Ticket ticket={ticket} />)
                }
            </div>
        </div>
    );
};

export default Home; // exported to App