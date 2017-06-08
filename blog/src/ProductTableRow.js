import React, { Component } from 'react';

class ProductTableRow extends Component{
	constructor(props) {
		super(props);
		this.destroy = this.destroy.bind(this);
	}
	destroy(e){
		this.props.onDelete(this.props.product.id, e);
	}
	render () {
		return (
				<tr>
					<td>
						{this.props.product.category}
					</td>
					<td>
						{this.props.product.name}
					</td>
					<td>
						{this.props.product.price}
					</td>
					<td className={this.props.product.stocked ? 'ProductTableRow-out-of-stock' : ''}>
						{this.props.product.stocked ? "En stock" : "Pas de stock"}
					</td>
					<td>
						<span onClick={this.destroy} style={ {'color': 'red', 'cursor' : 'pointer'} }>X</span>
					</td>
				</tr>
		)
	}

}

export default ProductTableRow;