import React from 'react';
import Card from './Card.js';

class Container extends React.Component {

	formatCards = () => {
		return this.props.breweries.map((brewery) => brewery.latitude ? <Card key={brewery.id} data={brewery} handleClick={this.props.handleClick}/> : null);
	}

	render() {
		// console.log(this.props.handleClick);
		return (
				<div>{this.formatCards()}</div>
			);
	}
}

export default Container;