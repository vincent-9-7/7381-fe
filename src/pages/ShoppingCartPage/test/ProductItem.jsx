/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Product from './Product';

export default class ProductItem extends Component {
  constructor(props){
    super(props);
    this.addToCartButton = this.addToCartButton.bind(this);
  }

  addToCartButton(product) {
    return (
      <button
        onClick={this.props.onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
      </button>
    );
  }

  render() {
    const { product } = this.props;
    // console.log(this.props);
    return (
      <div
        style={{ marginBottom: 20 }}>
        <Product
          title={product.title}
          price={product.price}
          inventory={product.inventory}
          brand={product.brand}
          button={this.addToCartButton(product)} />
      </div>
    );
  }
}
