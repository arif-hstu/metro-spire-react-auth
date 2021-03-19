import React from 'react';
import HPlatform, {
    HMap,
    HMapCircle,
    HMapMarker,
    HMapPolygon,
    HMapPolyLine,
    HMapRectangle
} from "react-here-map";


const GoogleMap = () => {
    const polyLinePoints = [
        { lat: 23.777176, lng: 90.399452 },
        { lat: 25.636574, lng: 88.636322 }
       
    ];


    // const markerCoords = { lat: 48.2, lng: 16.3667 };

    // const markerIcon =
    //     '<svg width="24" height="24" ' +
    //     'xmlns="http://www.w3.org/2000/svg">' +
    //     '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
    //     'height="22" /><text x="12" y="18" font-size="12pt" ' +
    //     'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
    //     'fill="white">H</text></svg>';
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
                    {/* <HMapMarker
                        coords={markerCoords}
                        icon={markerIcon}
                        objectEvents={{ pointerdown: e => console.log("Marker Pointer Down", e) }}
                    /> */}
                </HMap>
            </HPlatform>;
        </div>
    );
};

export default GoogleMap; // exported to Destination