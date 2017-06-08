import React, { Component } from 'react';
import ProductError from './ProductError'

const RESET_VALUES = {id: '', category: '', price: '', stocked: false, name: ''};

class ProductForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			product : Object.assign({}, RESET_VALUES),
			errors: {}
		}
		this.handleContent = this.handleContent.bind(this);
		this.handleRecord = this.handleRecord.bind(this);
		this.errors = this.errors.bind(this);
		this.required = this.required.bind(this);
	}
	handleContent(e) {
		let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
		let field = e.target.name;

		if(field === "name") {
			this.required(field, value);
		}

		// On va récupérer l'état précédent afin de l'enrichir.
		this.setState( (prevState) => {
			prevState.product[field] =  value;
			let product = prevState.product;

			return {product : product}
		});
	}
	handleRecord(e) {
		// On le met au début car tout peut arriver !
		e.preventDefault();
		this.required('name', this.state.product.name);

		console.log(this.state.errors);
		console.log(Object.keys(this.state.errors).length);
		if (Object.keys(this.state.errors).length !== 0) {
			return;
		}

		this.props.onSave(this.state.product);
		this.setState({
			product : Object.assign({}, RESET_VALUES),
			errors: { }
		});
	}
	required(field, value) {
		if (value === '') {
			this.setState( (prevState) => {
				let errors = prevState.errors;
				errors[field] = field + " vide";
				console.log("Errors : " + errors)
				console.log(errors)
				return { errors : errors }
			});
		} else {
			if (typeof this.state.errors[field] !== 'undefined') {
				this.setState( (prevState) => {
					let errors = prevState.errors;
					delete errors[field];

					return { errors : errors }
				});
			}
		}
	}
	errors() {
		let errorsAsArray = Object.keys(this.state.errors).map((fieldName) => this.state.errors[fieldName]);
		let errors = [];

		errorsAsArray.forEach((error, index) => {
			errors.push(<ProductError error={error} key={index}/>);
		});

		return errors;
	}
	render() {
		let errors = this.errors();
		return (
			<form id="ProductForm-form">
				Des erreurs ?
				<ul>
					{errors}
				</ul>
				<div>
					<label htmlFor="ProductForm-category">
						Category :
						<input type="text" id="ProductForm-category" onChange={this.handleContent} name="category" value={this.state.product.category}/>
					</label>
				</div>
				<div>
					<label htmlFor="ProductForm-price">
						Price :
						<input type="text" id="ProductForm-price" onChange={this.handleContent} name="price" value={this.state.product.price}/>
					</label>
				</div>
				<div>
					<label htmlFor="ProductForm-name">
						Name :
						<input type="text" id="ProductForm-name" onChange={this.handleContent} name="name" value={this.state.product.name}/>
					</label>
				</div>
				<div>
					<label htmlFor="ProductForm-stocked">
						<input type="checkbox" id="ProductForm-stocked" name="stocked" onChange={this.handleContent} value={this.state.product.stocked}/> En stock ?
					</label>
				</div>
				<div>
					<input type="submit" onClick={this.handleRecord} value="Ajouter produit"/>
				</div>
			</form>
		)
	}
}

export default ProductForm;