import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { LocationDetailsContext } from '../DestinationDetails/DestinationDetails';

// importe ticket image
import ticketImage from '../../images/ticketIcon.png'
// import styleSheet
import './Summary.css'

const Summary = () => {
    //consume from DestinationDetails
    const [locationDetails, setLocationDetails] = useContext(LocationDetailsContext);
    // consume from App
    const [tickets, setTickets] = useContext(UserContext);
    console.log(tickets)
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
            <div className="ticketDetails">
                <div>
                    <img src={ticketImage} alt="" srcset="" />
                    <p>{tickets.ticketName}</p>
                    <p>{tickets.price}</p>
                </div>                
            </div>
        </div>
    );
};

export default Summary; //exported to DestinationDetails