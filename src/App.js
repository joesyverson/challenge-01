import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow } from 'react-google-maps';

import Container from './Container.js';


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

class App extends React.Component {
	state = {breweries: []}
	
	// ----- FETCHES ----- \\

	fetchData = () => {
    	fetch('https://api.openbrewerydb.org/breweries?by_city=las_vegas')
    	.then((res) => res.json()).then((json) => this.setState({breweries: json}));
  	}

	// ----- LIFECYCLE ----- \\

	componentDidMount() {
		this.fetchData();
	}

	render() {
	return (
		<div id="main">
			<div id="column">
				<h2>Breweries Las Vegas</h2>
				<Container breweries={this.state.breweries}/>
			</div>
			<div style={{width: '75vw', height: "100vh", display: "inline", float: "right"}}>
				<WrappedMap
				googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKXQV1Q3X6HGxKS85QA0HWMz6024_1b8g"}
				loadingElement={<div style={{height: "100%"}}/>}
				containerElement={<div style={{height: "100%"}}/>}
				mapElement={<div style={{height: "100%"}}/>}
				breweries={this.state.breweries}
				/>
			</div>
		</div>
	);
	}
}

// "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

export default App;
