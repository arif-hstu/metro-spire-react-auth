
import { createContext, useState } from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import HereMap from '../HereMap/HereMap';

import './Destination.css'

// location coordinates context
export const LocationContext = createContext();
const Destination = () => {
    // location search coordinates state
    const [location, setLocation] = useState([]);

    return (
        <LocationContext.Provider value={[location, setLocation]}>
            <div className='Destination'>
                <div className="details">
                <DestinationDetails />
                </div>
                <div className="hereMap">
                    {/* <HereMap></HereMap> */}
                </div>
            </div>
        </LocationContext.Provider>
    );
};

export default Destination; //exported to App
