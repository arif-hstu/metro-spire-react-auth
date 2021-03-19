import React, { useContext } from 'react';
import { PlaceContext } from '../Destination/Destination';
import './DestinationDetails.css'


const DestinationDetails = () => {
    // consume context api data
    const [place, setPlace] = useContext(PlaceContext);

    const searchHandle = (e) => {
        e.preventDefault();
        setPlace(e.target.value);
    }
    return (
        <div className='DestinationDetails'>
            <form onSubmit={searchHandle}>
                <p>Pick From</p>
                <input type="text" name="from" onBlur={searchHandle} id="" />
                <p>Pick To</p>
                <input type="text" name="to" id="" />
                <br />
                <input className='button' type="submit" value="Search" />
            </form>
        </div>
    );
};

export default DestinationDetails; //exported to the Destination