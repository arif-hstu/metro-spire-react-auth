import React, { useContext } from 'react';
import Select from 'react-select';
import { LocationContext } from '../../Components/Destination/Destination';
import { LocationDetailsContext } from '../DestinationDetails/DestinationDetails';

const locations = [
    { label: 'Dhaka', value: '23.777176 90.399452' },
    { label: 'Chittagong', value: '22.341900, 91.815536' },
    { label: 'Sylhet', value: '24.886436 91.880722' },
    { label: 'Rangpur', value: '25.74664 89.25166' },
    { label: 'Jessore', value: '23.16971 89.21371' },
    { label: 'Bogura', value: '24.8510 89.3711' },
];

const locationCoordinates = locations.map((loc => loc.value));

const locArray = [];
let locObject = {
    locationName: '',
    lat: '',
    lng: ''
};


const singleCoordinates = () => {
    locationCoordinates.map((loc) => {
        const splitted = loc.split(' ');
        locObject = splitted.map(split => {
            locObject.lat = split[0];
            locObject.lng = split[1];
            
            return locObject;
        })
        return locArray.push(locObject);
    });
    return locArray;
}


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