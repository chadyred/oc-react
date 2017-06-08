import React, { Component } from 'react';

class CheckFilter extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div id="CheckFilter">
				<p className={"check"}>
					<label htmlFor={"inStockOnly"}>
						<input type="checkbox" id="inStockOnly" name="inStockOnly" onChange={this.props.handleFilter} value="{this.props.inStockOnly}" />
						Afficher uniquement les produits en stock.
					</label>
				</p>
			</div>
		)
	}
}

export default CheckFilter;