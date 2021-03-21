import React from 'react';
import HPlatform, {
    HMap,
    HMapPolyLine
} from "react-here-map";


const GoogleMap = () => {
    const polyLinePoints = [
        { lat: 23.777176, lng: 90.399452 },
        { lat: 25.636574, lng: 88.636322 }
       
    ];

    return (
        <div>
            <HPlatform
                app_id="dHFJvMCdQuaXyx3DOt1q"
                app_code="fn5ExhAqGy84o0iqJoIDdA20QDGZN53w3qS4Hq4AXmY"
                useCIT
                useHTTPS
                includeUI
                interactive // Required for events
                includePlaces
            >
                <HMap
                    style={{
                        height: "40vh",
                        width: "50vw"
                    }}
                    useEvents // Required for events
                    mapEvents={{ pointerdown: e => console.log("Map Pointer Down", e) }} // event handlers
                    mapOptions={{
                        center: { lat: 51, lng: 7 },
                        zoom: 5,
                        pixelRatio: window.devicePixelRatio || 1
                    }}
                >
                    <HMapPolyLine
                        points={polyLinePoints}
                        objectEvents={{
                            pointerdown: e => console.log("Polyline Pointer Down", e)
                        }}
                    />
                </HMap>
            </HPlatform>;
        </div>
    );
};

export default GoogleMap; // exported to Destination