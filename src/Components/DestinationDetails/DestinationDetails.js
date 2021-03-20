import { createContext, useState } from 'react';
import Date from '../Date/Date';
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

    const [startDate, setStartDate] = useState(new window.Date());


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
                            <Date className='date' dateState={[startDate, setStartDate]}/>
                            <input className='button' type="submit" value="Search" />
                        </form> : 
                        <Summary dateState={[startDate, setStartDate]}/>
                }
            </div>
        </LocationDetailsContext.Provider>
    );
};

export default DestinationDetails; //exported to the Destination