import React from 'react';
import './DestinationDetails.css'

const DestinationDetails = () => {
    const searchHandle = (e) => {
        e.preventDefault();
    }
     return (
        <div className='DestinationDetails'>
            <form onSubmit={searchHandle}>
                <p>Pick From</p>
                <input type="text" name="from" id=""/>
                <p>Pick To</p>
                <input type="text" name="to" id=""/>
                <br/>
                <input className='button' type="submit" value="Search"/>
            </form>
        </div>
    );
};

export default DestinationDetails; //exported to the Destination