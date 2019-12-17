import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from './mapStyles.js';

function Map(props) {
	const [selectedBrew, setSelBrew] = React.useState(null);
	console.log(props.selectedBrewery);
	return (
		<GoogleMap
		defaultZoom={11}
		defaultCenter={{lat: 36.169941, lng: -115.139832}}
		defaultOptions={{styles: mapStyles}}
		>
		{props.breweries.map((brewery) => (
			brewery.latitude  ?
				<Marker
				key={brewery.id}
				position={{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}}
				onClick={() => props.selectBrewery(brewery)}
				icon={{url: '/beer-marker.svg', scaledSize: new window.google.maps.Size(25, 25)}}
				/>
			:
				null)
		)}

		{Object.keys(props.selectedBrewery).length > 0 ? (
			<InfoWindow
			position={{lat: parseFloat(props.selectedBrewery.latitude), lng: parseFloat(props.selectedBrewery.longitude)}}
			onCloseClick={() => props.selectBrewery({})}
			>
				<div>
					<h3>{props.selectedBrewery.name}</h3>
					<p>{props.selectedBrewery.street + " " + props.selectedBrewery.postal_code}</p>
				</div>
			</InfoWindow>
			)
			:
				null
		}


		</GoogleMap>
		);	
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default WrappedMap;