import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Icon, divIcon, point } from "leaflet";
// @ts-ignore
import myMarker from "./icon/placeholder.png";
import MarkerClusterGroup from "react-leaflet-cluster";

type Props = any;

// markers
const markers = [
	{
		geocode: [48.86, 2.3522],
		popUp: "Hello, I am pop up 1",
	},
	{
		geocode: [48.85, 2.3522],
		popUp: "Hello, I am pop up 2",
	},
	{
		geocode: [48.855, 2.34],
		popUp: "Hello, I am pop up 3",
	},
];

const Blah: React.FC<any> = (props: Props) => {
	const customIcon = new Icon({
		iconUrl: myMarker,
		iconSize: [38, 38],
	});

	const createCustomClusterIcon = (cluster: any) => {
		console.log("cluster", cluster);
		return new (divIcon as any)({
      html: `<div style='border: 5px solid blue; text-align: center; background-color: yellow;'>${cluster.getChildCount()}</div>`, // this is styled using HTML style NOT React... its a standard DIV, so I can put anything into it
      className: 'custom-marker-cluster', // optional
      iconSize: point(33, 33, true) // optional
    });
	};

	return (
		<div>
			<h1>This is where map should be</h1>
			<hr />
			<MapContainer
				center={[48.8566, 2.3522]}
				zoom={13}
				scrollWheelZoom={true}
				style={{ height: "87vh", width: "87vw" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg"
				/>


				<MarkerClusterGroup
					chunkedLoading // will NOT load them all at the same time, but one by one - helps with performance
					iconCreateFunction={createCustomClusterIcon} // this is to create a custom cluster icon, it will trigger when Icons Cluster
				>
					{markers.map((marker: any) => {
						return (
							<Marker
								position={marker.geocode}
								icon={customIcon}
								key={marker.popUp}
							>
								<Popup>{marker.popUp}</Popup>
							</Marker>
						);
					})}
				</MarkerClusterGroup>
			</MapContainer>
		</div>
	);
};

export default Blah;
