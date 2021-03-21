import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { DestinationContext } from '../../App';

// import styleSheet
import './Ticket.css'

const Ticket = (props) => {
    // destructuring the props value from Home.js
    const { ticketId, ticketName, ticketPrice, ticketBackground } = props.ticket;
    const background = {
        background: 'url(' + ticketBackground + ')',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
    }

    const [destinationPath, setDestinationPath] = useContext(DestinationContext);
    const history = useHistory();
    const singleTicketHandler = (ticketId) => {
        const url = `destination/${ticketId}`;
        setDestinationPath(url);
        history.push(url);
    }

    return (
        <div className='Ticket' style={background}>
            <div className="ticketContent">
                <div className="topPart">
                    <h4>{ticketName}</h4>
                </div>
                <div className="bottomPart">
                <button onClick={() => singleTicketHandler(ticketId)} className='primaryButton'>BUY NOW</button>
                    <h2>{ticketPrice}</h2>
                </div>
            </div>

        </div>
    );
};

export default Ticket; // exported to Destination Details