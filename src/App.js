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
	
	selectBrewery = (brewery) => {
		this.setState({
			breweries: this.state.breweries,
			selectedBrewery: brewery
		});
	}

	formatName = (name) => {
		// console.log(name)
		return name.includes("-") ? name.substr(0, name.indexOf("-")) : name;
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
				<Container id="container" breweries={this.state.breweries} selectedBrewery={this.state.selectedBrewery} selectBrewery={this.selectBrewery} formatName={this.formatName}/>
			</div>
			<div style={{width: '75vw', height: "100vh", display: "inline", float: "right"}}>
				<WrappedMap
				googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=INSERT_KEY_HERE"}
				loadingElement={<div style={{height: "100%"}}/>}
				containerElement={<div style={{height: "100%"}}/>}
				mapElement={<div style={{height: "100%"}}/>}
				breweries={this.state.breweries}
				selectedBrewery={this.state.selectedBrewery}
				selectBrewery={this.selectBrewery}
				formatName={this.formatName}
				/>
			</div>
		</div>
	);
	}
}

// "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"

export default App;
