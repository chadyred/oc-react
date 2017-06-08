import React, { Component } from 'react';

class SearchProduct extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div id="SearchProduct">
				<p className={"filterText"}>
					Rechercher un produit:
					<input type="text"
					id="filterText"
					name="filterText"
					placeholder="Search..."
					onChange={this.props.handleFilter}
					value={this.props.filterText}/>
				</p>
			</div>
		)
	}
}

export default SearchProduct;