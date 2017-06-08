import React, { Component } from 'react';
import './ProductTableHeader.css';

class ProductTableHeader extends Component {
	constructor(props) {
		super(props);
		this.up = this.up.bind(this);
		this.down = this.down.bind(this);
	}
	up (event) {
		this.props.orderColumn('asc', this.props.columnName,event)
	}
	down (event) {
		this.props.orderColumn('desc', this.props.columnName,event)
	}
	render () {
		let current = this.props.columnName === this.props.columnInfo.column ? true: false;
		let directionAsc = this.props.columnInfo.direction === "asc" ? "ProductTableHeader-current" : "";
		let directionDesc = this.props.columnInfo.direction === "desc" ? "ProductTableHeader-current" : "";
		return (
				<th>
						{this.props.columnName}
						<button className={current ? directionAsc : ""} onClick={this.up}>&#x25B2;</button>
						<button className={current ? directionDesc : ""} onClick={this.down}>&#x25BC;</button>
				</th>
		)
	}
}

export default ProductTableHeader;