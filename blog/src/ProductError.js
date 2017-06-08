import React, { Component } from 'react';

class ProductError extends Component{
    constructor(props) {
        super(props);
    }
    render () {
        return (
            <li className="ProductError-elt">
                {this.props.error}
            </li>
        )
    }

}

export default ProductError;