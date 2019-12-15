import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

function Map(props) {
	console.log(props.breweries)
	return (
		<GoogleMap
		defaultZoom={11}
		defaultCenter={{lat: 36.169941, lng: -115.139832}}
		>
		{props.breweries.map((brewery) => brewery.latitude  ? <Marker key={brewery.id} position={{lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude)}}/> : null)}
		</GoogleMap>
		);	
}

// <Marker key={brewery.id} position={{lat: brewery.latitude, lng: brewery.longitude}}/>

const WrappedMap = withScriptjs(withGoogleMap(Map));

class App extends React.Component {
	state = {breweries: []}

	// ----- MAP CONFIG ----- \\
	
	// ----- FETCHES ----- \\

	fetchData = () => {
    	fetch('https://api.openbrewerydb.org/breweries?by_city=las_vegas')
    	.then((res) => res.json()).then((json) => this.setState({breweries: json}));
  	}

	// ----- LIFECYCLE ----- \\

	componentDidMount() {
		this.fetchData()
	}

	render() {
	return (
	  <div style={{width: '100vw', height: "100vh"}}>
	  	<WrappedMap
	  	googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKXQV1Q3X6HGxKS85QA0HWMz6024_1b8g"}
	  	loadingElement={<div style={{height: "100%"}}/>}
	  	containerElement={<div style={{height: "100%"}}/>}
	  	mapElement={<div style={{height: "100%"}}/>}
	  	breweries={this.state.breweries}
	  	/>
	  </div>
	);
	}
}

// "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

export default App;
