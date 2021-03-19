import React from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import GoogleMap from '../HereMap/HereMap';

import './Destination.css'

const Destination = () => {
    return (
        <div className='Destination'>
            <DestinationDetails />
            <div className="googleMap">
                <GoogleMap></GoogleMap>
            </div>
        </div>
    );
};

export default Destination; //exported to App