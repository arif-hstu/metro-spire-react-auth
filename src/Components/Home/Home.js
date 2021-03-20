import React, { useContext, useEffect } from 'react';
import { UserContext } from '../../App';
import Ticket from '../Ticket/Ticket';

// import stylesheet
import './Home.css'

const Home = () => {
    // consume UserContext api data from App
    const [tickets, setTickets] = useContext(UserContext);

    // get ticket data from mocki.io fake api
    useEffect(() => {
        const url = 'https://api.mocki.io/v1/9d296506';

        fetch(url)
            ?.then(res => res.json())
            ?.then(data => setTickets(data));
    }, [])

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