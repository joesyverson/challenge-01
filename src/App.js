import React from 'react';

import Container from './Container.js';
import Banner from './Banner.js';
import WrappedMap from './WrappedMap.js';

class App extends React.Component {
	state = {
		breweries: [],
		selectedBrewery: {}
	}
	
	// ----- FETCHES ----- \\

	fetchData = () => {
    	fetch('https://api.openbrewerydb.org/breweries?by_city=las_vegas')
    	.then((res) => res.json()).then((json) => this.setState({breweries: json}));
  	}



	// ----- LISTENER CALLBACKS ----- \\
	
	showOnMap = (brewery) => {
		this.setState({
			breweries: this.state.breweries,
			selectedBrewery: brewery
		});
	}

	// ----- LIFECYCLE ----- \\

	componentDidMount() {
		this.fetchData();
	}

	render() {
	return (
		<div id="main">
			<div id="column">
				<Banner/>
				<Container breweries={this.state.breweries} handleClick={this.showOnMap}/>
			</div>
			<div style={{width: '75vw', height: "100vh", display: "inline", float: "right"}}>
				<WrappedMap
				googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAKXQV1Q3X6HGxKS85QA0HWMz6024_1b8g"}
				loadingElement={<div style={{height: "100%"}}/>}
				containerElement={<div style={{height: "100%"}}/>}
				mapElement={<div style={{height: "100%"}}/>}
				breweries={this.state.breweries}
				selectedBrewery={this.state.selectedBrewery}
				/>
			</div>
		</div>
	);
	}
}

// "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

export default App;
