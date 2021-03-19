import React, { createContext, useEffect, useState } from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import GoogleMap from '../HereMap/HereMap';

import './Destination.css'

// context api to provide data
export const PlaceContext = createContext();


const Destination = () => {
    // useState to get search place data
    const [place, setPlace] = useState('dhaka');
    // useState to set fetched location data
    const [places, setPlaces] = useState([]);

    console.log(places, place)

    const url = `http://www.mapquestapi.com/search/v3/prediction?key=xjDijq6YB0GUDysb2h3UwfAT55wl3MJu&limit=5&collection=adminArea,poi,address,category,franchise,airport&q=${place}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])



    return (
        <PlaceContext.Provider value={[places, setPlaces, place, setPlace]}>
            <div className='Destination'>
                <DestinationDetails />
                <div className="googleMap">
                    <GoogleMap></GoogleMap>
                </div>
            </div>
        </PlaceContext.Provider>
    );
};

export default Destination; //exported to App


// http://www.mapquestapi.com/search/v3/prediction?key=xjDijq6YB0GUDysb2h3UwfAT55wl3MJu&limit=5&collection=adminArea,poi,address,category,franchise,airport&q=dinajpur`