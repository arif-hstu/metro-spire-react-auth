
import { createContext, useState } from 'react';
import DestinationDetails from '../DestinationDetails/DestinationDetails';
import HereMap from '../HereMap/HereMap';

import './Destination.css'

// location coordinates context
export const LocationContext = createContext();
const Destination = () => {
    // location search coordinates state
    const [location, setLocation] = useState([]);


    // // useState to get search place data
    // const [place, setPlace] = useState('dhaka');
    // useState to set fetched location data

    // const url = `https://barikoi.xyz/v1/api/search/autocomplete/MTpPVkhCVEZaM09F/place?q=${place}`;
    // useEffect(() => {
    //     fetch(url)
    //         ?.then(res => res.json())
    //         ?.then(data => setPlace(data))
    // }, [])



    return (
        <LocationContext.Provider value={[location, setLocation]}>
        <div className='Destination'>
            <DestinationDetails />
            <div className="googleMap">
                <HereMap></HereMap>
            </div>
            </div>
        </LocationContext.Provider>
    );
};

export default Destination; //exported to App


// http://www.mapquestapi.com/search/v3/prediction?key=xjDijq6YB0GUDysb2h3UwfAT55wl3MJu&limit=5&collection=adminArea,poi,address,category,franchise,airport&q=dinajpur`