import { createContext, useContext, useState } from 'react';
import { LocationContext } from '../../App';
import LocationSearch from '../LocationSearch.js/LocationSearch';
import Summary from '../Summary/Summary';
import './DestinationDetails.css'






export const LocationDetailsContext = createContext();


const DestinationDetails = () => {
    const [hasSelected, setHasSelected] = useState(false);
    const searchHandle = (e) => {
        setHasSelected(true)
        e.preventDefault();
    }

    // consume data from LocationContext
    // const [placeName, setPlaceName] = useContext(LocationContext);

    // const placeNameHandler = (e) => {
    //     // setPlaceName(e.target.value)
    //     e.preventDefault()
    // }


    const [locationDetails, setLocationDetails] = useState([]);
    return (
        <LocationDetailsContext.Provider value={[locationDetails, setLocationDetails]}>
            <div className='DestinationDetails'>
                {
                    !hasSelected ?
                        <form onSubmit={searchHandle}>
                            <p>Pick From</p>
                            <LocationSearch />
                            <p>Pick To</p>
                            <LocationSearch />
                            <br />
                            <input className='button' type="submit" value="Search" />
                        </form> : 
                        <Summary />
                }
            </div>
        </LocationDetailsContext.Provider>
    );
};

export default DestinationDetails; //exported to the Destination