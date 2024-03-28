import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css"; 
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Icon, divIcon, point } from "leaflet";
// @ts-ignore
import myMarker from './icon/placeholder.png'; 

type Props = any;

// markers
const markers = [
    {
      geocode: [48.86, 2.3522],
      popUp: "Hello, I am pop up 1"
    },
    {
      geocode: [48.85, 2.3522],
      popUp: "Hello, I am pop up 2"
    },
    {
      geocode: [48.855, 2.34],
      popUp: "Hello, I am pop up 3"
    }
  ];

const Blah: React.FC<any> = (props: Props) => {

    const customIcon = new Icon({
        iconUrl: myMarker,
        iconSize: [38, 38]
    })


	return (
		<div>
			<h1>This is where map should be</h1>
			<hr />
			<MapContainer
				center={[48.8566, 2.3522]}
				zoom={13}
				scrollWheelZoom={false}
                style={{height: '87vh', width: '87vw'}}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>

                {markers.map((marker: any) => {
                    return <Marker position={marker.geocode} icon={customIcon}>
                        
                    </Marker>
                })}
			</MapContainer>
		</div>
	);
};

export default Blah;
