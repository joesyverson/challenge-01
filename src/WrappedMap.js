import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from './mapStyles.js';

function Map(props) {
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
				icon={{url: '/beer-marker-mod.svg', scaledSize: new window.google.maps.Size(35, 35)}}
				/>
			:
				null)
		)}

		{Object.keys(props.selectedBrewery).length > 0 ? (
			<InfoWindow
			className="info-window"
			position={{lat: parseFloat(props.selectedBrewery.latitude) + 0.02, lng: parseFloat(props.selectedBrewery.longitude)}}
			onCloseClick={() => props.selectBrewery({})}
			>
				<div>
					<p>{props.formatName(props.selectedBrewery.name)}</p>
					<p className="address">{props.selectedBrewery.street}</p>
					<p className="address">{props.selectedBrewery.city}, {props.selectedBrewery.state}</p>
					<p className="address">{props.selectedBrewery.postal_code.substr(0, 5)}</p>
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