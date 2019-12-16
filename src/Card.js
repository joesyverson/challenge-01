import React from 'react';

const Card = (props) => {
	return(
			<div>
				<h3><a href={props.data.website_url}>{props.data.name}</a></h3>
				<p>{props.data.brewery_type}</p>
				<p>{props.data.street}</p>
			</div>
		);
}

// <button onClick={() => props.loadMap()}>Map</button>

export default Card;