/* eslint-disable */
import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import box from '../../assets/img/box.svg';

export default class Product extends Component {
  constructor(props){
    super(props);
    // this.state = { };
    this.addToCartButton = this.addToCartButton.bind(this);
  }

  addToCartButton(product) {
    const {onAddToCartClicked} = this.props;
    return (
      <button
        className="btn--add-to-cart"
        onClick={onAddToCartClicked} 
        type="button">
        Add to Cart
      </button>
    );
  }

  render() {
    const { product, num } = this.props;
    // console.log(num);
    let oldPrice = false;
    if(num !== undefined){
      oldPrice = "AU $78"; // 首页old price
    }
    return (
      <div
        style={{ marginBottom: 20 }}>
        <ProductDetails
          inventory={product.inventory}
          brand={product.brand}
          button={this.addToCartButton(product)}
          image={box}
          title={`${product.title} ${product.quantity}kg`}
          delivery="free delivery"
          description={product.description}
          oldPrice={oldPrice}
          price={`AU $${product.price}`}
         />
      </div>
    );
  }
}
