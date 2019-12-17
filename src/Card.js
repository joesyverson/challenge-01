import React from 'react';

const Card = (props) => {
	// console.log(props.selectBrewery)

	return(
			<div className="card">
				<h3><a href={props.data.website_url}>{props.formatName(props.data.name)}</a></h3>
				<p className="brewery-type">Brewery type: {props.data.brewery_type}</p>
				<button onClick={() => props.selectBrewery(props.data)}>{props.data.street}</button>
			</div>
		);
}

// <button onClick={() => props.loadMap()}>Map</button>

export default Card;