import React from 'react';
import Card from './Card.js';

class Container extends React.Component {

	formatCards = () => {
		return this.props.breweries.map((brewery) => brewery.latitude ? <Card data={brewery} key={brewery.id}/> : null);
	}

	render() {
		return (
				<div>{this.formatCards()}</div>
			);
	}
}

export default Container;