import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

function Map(props) {
	const [selectedBrew, setSelBrew] = React.useState(null);
	console.log(props.breweries);
	return (
		<GoogleMap
		defaultZoom={11}
		defaultCenter={{lat: 36.169941, lng: -115.139832}}
		>
		{props.breweries.map((brewery) => (
			brewery.latitude  ?
				<Marker
				key={brewery.id}
				position={{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}}
				onClick={() => setSelBrew(brewery)}
				icon={{url: '/beer-marker.svg', scaledSize: new window.google.maps.Size(25, 25)}}
				/>
			:
				null)
		)}
		{selectedBrew && (
			<InfoWindow
			position={{lat: parseFloat(selectedBrew.latitude), lng: parseFloat(selectedBrew.longitude)}}
			onCloseClick={() => setSelBrew(null)}
			>
				<div>
					<h3>{selectedBrew.name}</h3>
					<p>{selectedBrew.street + " " + selectedBrew.postal_code}</p>
				</div>
			</InfoWindow>
		)}
		</GoogleMap>
		);	
}


const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;