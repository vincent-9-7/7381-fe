import React, { Component } from 'react';
import ProductDetails from './ProductDetails';
import box from '../../assets/img/box.svg';
import addCart from '../../assets/img/addCart.svg';

export default class Product extends Component {
  constructor(props){
    super(props);
    // this.state = { };
    this.addToCartButton = this.addToCartButton.bind(this);
  }

  addToCartButton() {
    const {onAddToCartClicked} = this.props;
    return (
      <button
        className="btn--homepage-add-to-cart"
        onClick={onAddToCartClicked} 
        type="button">
        {/* Add to Cart */}
        <img src={addCart} alt="add" className="add-to-cart" />
      </button>
    );
  }

  render() {
    const { product, num } = this.props;
    // console.log(num);
    let oldPrice = false;
    if(num !== undefined){
      oldPrice = `AU $${(product.price*1.4).toFixed(2)}`; // 首页old price,保留两位小数
    }
    return (
      <div
        style={{ marginBottom: 20 }}>
        <ProductDetails
          inventory={product.inventory}
          brand={product.brand}
          button={this.addToCartButton(product)}
          image={box}
          imageAddress={product.imageAddress[0]}
          title={`${product.title} ${product.size}kg`}
          delivery="free delivery"
          description={product.description}
          oldPrice={oldPrice}
          price={`AU $${product.price}`}
         />
      </div>
    );
  }
}
