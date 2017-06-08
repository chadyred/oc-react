import React, { Component } from 'react';
import SearchProduct from './SearchProduct';
import CheckFilter from './CheckFilter';

class Filters extends Component {
	constructor(props) {
		super(props);
	}
	render () {
		return (
			<div id="Filters">
				<SearchProduct filterText={this.props.filterText} handleFilter={this.props.handleFilter}></SearchProduct>
				<CheckFilter inStockOnly={this.props.inStockOnly} handleFilter={this.props.handleFilter}></CheckFilter>
			</div>
		)
	}
}

export default Filters;