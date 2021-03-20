import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import Ticket from '../Ticket/Ticket';

// import stylesheet
import './Home.css'

const Home = (props) => {
    const [tickets, setTickets] = props.tickets;
    // consume UserContext api data from App
    // const [tickets, setTickets] = useContext(UserContext);

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

export default Home;