import React, { useContext } from 'react';
import Select from 'react-select';
import { LocationDetailsContext } from '../DestinationDetails/DestinationDetails';

const locations = [
    { label: 'Dhaka', value: '23.777176 90.399452' },
    { label: 'Chittagong', value: '22.341900, 91.815536' },
    { label: 'Sylhet', value: '24.886436 91.880722' },
    { label: 'Rangpur', value: '25.74664 89.25166' },
    { label: 'Jessore', value: '23.16971 89.21371' },
    { label: 'Bogura', value: '24.8510 89.3711' },
];

function LocationSearch() {
    // consume from DestinationDetails
    const [locationDetails, setLocationDetails] = useContext(LocationDetailsContext);
    
    const selectLocation = (value) => {
        const newLocationData = [...locationDetails];
        newLocationData.push(value);
        setLocationDetails(newLocationData);
    }
    return (
        <div className="App">
            <Select
                options={locations}
                onChange={selectLocation}
            />
        </div>
    );
}

export default LocationSearch; // exported to DestinationDetails