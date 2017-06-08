import React, { Component } from 'react';
import Filters from './Filters';
import ProductTable from './ProductTable';
import ProductForm from './ProductForm';

var PRODUCTS = {
  '1': {id: 1, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '2': {id: 2, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '3': {id: 3, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '4': {id: 4, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '5': {id: 5, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '6': {id: 6, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '7': {id: 7, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '8': {id: 8, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '9': {id: 9, category: 'Musical Instruments', price: '$459.99', stocked: true, name: 'Clarinet'},
  '10': {id: 10, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '11': {id: 11, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '12': {id: 12, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '13': {id: 13, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '14': {id: 14, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '15': {id: 15, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '16': {id: 16, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '17': {id: 17, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '18': {id: 18, category: 'Musical Instruments', price: '$5,000', stocked: true, name: 'Harpsicord'},
  '19': {id: 19, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '20': {id: 20, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '21': {id: 21, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '22': {id: 22, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '23': {id: 23, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '24': {id: 24, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '25': {id: 25, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '26': {id: 26, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '27': {id: 27, category: 'Musical Instruments', price: '$11,000', stocked: false, name: 'Fortepiano'},
  '28': {id: 28, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '29': {id: 29, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '30': {id: 30, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '31': {id: 31, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '32': {id: 32, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '33': {id: 33, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '34': {id: 34, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '35': {id: 35, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '36': {id: 36, category: 'Furniture', price: '$799', stocked: true, name: 'Chaise Lounge'},
  '37': {id: 37, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '38': {id: 38, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '39': {id: 39, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '40': {id: 40, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '41': {id: 41, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '42': {id: 42, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '43': {id: 43, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '44': {id: 44, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '45': {id: 45, category: 'Furniture', price: '$1,300', stocked: false, name: 'Dining Table'},
  '46': {id: 46, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '47': {id: 47, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '48': {id: 48, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '49': {id: 49, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '50': {id: 50, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '51': {id: 51, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '52': {id: 52, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '53': {id: 53, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
  '54': {id: 54, category: 'Furniture', price: '$100', stocked: true, name: 'Bean Bag'},
};

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: PRODUCTS,
            filterText: '',
            inStockOnly: false
        }
        this.handleFilter = this.handleFilter.bind(this);
        this.handleSave = this.handleSave.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleSave(product) {
        let id = new Date().getTime();
        product.id = id;
        this.setState((prevState, props) => {
            let products = prevState.products;
            products[id] = product;
            // Peut être abrégé : return { products }
            return { products : products}
        });
    }
    handleFilter(e) {
        let name = e.target.name;
        let value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

        this.setState({
            [name] : value
        });
    }
    handleDelete(id, e=null) {
        this.setState((prevState, props) => {
            let products = prevState.products;
            delete products[id];
            return {products : products}
        });
    }
    render() {
        return (
            <div className="Products">
                <Filters products={this.state.products}
                         filterText={this.state.filterText}
                         inStockOnly={this.state.inStockOnly}
                         handleFilter={this.handleFilter}
                ></Filters>
                <ProductTable
                    products={this.state.products}
                    filterText={this.state.filterText}
                    inStockOnly={this.state.inStockOnly}
                    updateProducts={this.orderColumn}
                    onDelete={this.handleDelete}
                ></ProductTable>
                <ProductForm onSave={this.handleSave}></ProductForm>
            </div>
        )
    }
}

export default Products;