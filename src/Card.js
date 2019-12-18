import React from 'react';

const Card = (props) => {
	// console.log(props.selectBrewery)

	function selectedBrewery() {
		// debugger;
		console.log("data", props.data)
		console.log("selected", props.selectedBrewery)
		return props.selectedBrewery === props.data ? {} : props.data
	}

	function formatButtonText() {
		return props.selectedBrewery === props.data ? "Close Window" : props.data.street	
	}

	return(
			<div className="card">
				<h3><a href={props.data.website_url}>{props.formatName(props.data.name)}</a></h3>
				<p className="brewery-type">Brewery type: {props.data.brewery_type}</p>
				<button onClick={() => props.selectBrewery(selectedBrewery())}>{formatButtonText()}</button>
			</div>
		);
}

// <button onClick={() => props.loadMap()}>Map</button>

export default Card;