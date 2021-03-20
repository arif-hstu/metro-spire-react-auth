import React, { useContext } from 'react';
import Select from 'react-select';
import { LocationContext } from '../../Components/Destination/Destination';

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

console.log(singleCoordinates())

function LocationSearch() {
    const [location, setLocation] = useContext(LocationContext);



    // cosume context from App
    // const [places, setPlaces] = useContext(LocationContext);
    // console.log(places)
    return (
        <div className="App">
            <Select
                options={locations}
            />
        </div>
    );
}

export default LocationSearch;