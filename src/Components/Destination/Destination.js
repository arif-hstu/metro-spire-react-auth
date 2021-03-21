
import { createContext, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import HereMap from '../HereMap/HereMap';

// import styleSheet
import './Destination.css'

// location coordinates context
export const LocationContext = createContext();
const Destination = () => {
    const { ticketId } = useParams();
    // location search coordinates state
    const [location, setLocation] = useState([]);

    return (
        <LocationContext.Provider value={[location, setLocation]}>
            <>
                {
                    ticketId ?
                        <div className='Destination'>
                            <div className="details">
                                <DestinationDetails ticketId={ticketId} />
                            </div>
                            <div className="hereMap">
                                <HereMap></HereMap>
                            </div>
                        </div> :
                        <div className='DestinationEmpty'>
                            <div className="destinationMessage">
                                <div className='heading'><h2>Oops.. You didn't select any Ticket!</h2></div>
                                <div className="button">
                                    <Link to='/'>Purchase ticket now!</Link>
                                </div>
                            </div>
                        </div>
                }
            </>
        </LocationContext.Provider>
    );
};

export default Destination; //exported to App
