import React from 'react';
// import styleSheet
import './Summary.css'

const Summary = () => {
    return (
        <div className='Summary'>
            <div className='locationName'>
                <div className="icon">
                </div>
                <div className="name">
                    <p className='name1'>arif</p>
                    <p className='name2'>garif</p>
                </div>
            </div>
            <div className="ticketDetails"></div>
        </div>
    );
};

export default Summary; //exported to Destination details