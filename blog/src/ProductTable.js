import React, { Component } from 'react';
import ProductTableHeader from './ProductTableHeader';
import ProductTableRow from './ProductTableRow';

class ProductTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			'sort' : {
				column : 'name',
				direction : 'desc'
			}
		}
		this.rows = this.rows.bind(this);
		this.orderColumn = this.orderColumn.bind(this);
		this.sortByKeyAndOrder = this.sortByKeyAndOrder.bind(this);
	}
  	sortByKeyAndOrder(objectA, objectB) {
	    let isDesc = this.state.sort.direction === 'desc' ? 1 : -1;
	    let [a, b] = [objectA[this.state.sort.column], objectB[this.state.sort.column]];

	    if (this.state.sort.column === 'price') {
	    	// Condition qui efface tout ce qui n'est pas un nombre suivis d'un "."
	      [a, b] = [a, b].map((value) => parseFloat(value.replace(/[^\d\.]/g, ''), 10));
	    }
	    if (a > b) {
	      return 1 * isDesc;
	    }
	    if (a < b) {
	      return -1 * isDesc;
	    }
	    return 0;
 	}
	sortProducts() {
		let productsAsArray = Object.keys(this.props.products).map((pid) => this.props.products[pid]);
		return productsAsArray.sort(this.sortByKeyAndOrder);
	}
    orderColumn(type, columnName, e=null) {
        // alert('order by ' + type + " with column " + columnName);
        this.setState({
			'sort' : {
				column : columnName,
				direction : type
			}
        });
    }
	rows() {
		let sortProducts = this.sortProducts();
		let rows = [];

		sortProducts.forEach((product) => {
			if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
        		return;
        	}

      		rows.push(<ProductTableRow product={product} key={product.id} onDelete={this.props.onDelete} onEdit={this.props.handleEdit}></ProductTableRow>);
		});

		return rows;
	}
	render () {
		let rows = this.rows();

		return (
				<div id="ProductTable">
					<table>
						<thead>
							<tr>
								<ProductTableHeader
									columnName="category"
									orderColumn={this.orderColumn}
									columnInfo={this.state.sort}>
								</ProductTableHeader>

								<ProductTableHeader
									columnName="name"
									orderColumn={this.orderColumn}
									columnInfo={this.state.sort}>
								</ProductTableHeader>

								<ProductTableHeader
									columnName="price"
									orderColumn={this.orderColumn}
									columnInfo={this.state.sort}>
								</ProductTableHeader>

								<ProductTableHeader
									columnName="stocked"
									orderColumn={this.orderColumn}
									columnInfo={this.state.sort}>
								</ProductTableHeader>
							</tr>
						</thead>
						<tbody>
							{rows}
						</tbody>
					</table>
				</div>
			)
	}
}

export default ProductTable;