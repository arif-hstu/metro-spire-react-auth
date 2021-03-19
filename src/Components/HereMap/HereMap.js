import React from 'react';
import HPlatform, { HMap, HMapPolyLine } from "react-here-map";

const GoogleMap = () => {
    const points = [
        { lat: 52.5309825, lng: 13.3845921 },
        { lat: 52.5311923, lng: 13.3853495 },
        { lat: 52.5313532, lng: 13.3861756 },
        { lat: 52.5315142, lng: 13.3872163 },
        { lat: 52.5316215, lng: 13.3885574 },
        { lat: 52.5320399, lng: 13.3925807 },
        { lat: 52.5321472, lng: 13.3935785 }
    ];
    return (
        <div>
            <HPlatform
                app_id="dHFJvMCdQuaXyx3DOt1q"
                app_code="fn5ExhAqGy84o0iqJoIDdA20QDGZN53w3qS4Hq4AXmY"
                useCIT
                useHTTPS
                includeUI
                includePlaces
            >
                <HMap
                    style={{
                        height: "40vmin",
                        width: "90vmin",
                      }}
                    mapOptions={{ center: { lat: 52.5321472, lng: 13.3935785 }, zoom: 10 }}
                >
                    <HMapPolyLine points={points} />
                </HMap>
            </HPlatform>,

        </div>
    );
};

export default GoogleMap; // exported to Destination