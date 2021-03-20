import { useContext, useState } from 'react';
import { LocationContext } from '../../App';
import LocationSearch from '../LocationSearch.js/LocationSearch';
import Summary from '../Summary/Summary';
import './DestinationDetails.css'







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

    return (
        <div className='DestinationDetails'>
            {
                !hasSelected ?
                    <form onSubmit={searchHandle}>
                        {/* <input type="text" onBlur={placeNameHandler} name="placeName" id=""/> */}
                        <p>Pick From</p>
                        <LocationSearch />
                        <p>Pick To</p>
                        <LocationSearch />
                        <br />
                        <input className='button' type="submit" value="Search" />
                    </form> : <Summary />
            }
            

        </div>
    );
};

export default DestinationDetails; //exported to the Destination