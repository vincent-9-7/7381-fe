import React, { Component } from 'react';
import ShoppingCartItemDetails from './ShoppingCartItemDetails';
import Cancel from '../../assets/img/cancel.svg';

export default class ShoppingCartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { price, quantity, title, onRemove } = this.props;

    return (
        <ShoppingCartItemDetails
          price={price}
          quantity={quantity}
          title={title}
          button={
            <button onClick={onRemove} type="button" className="cart__remove-btn">
              <img src={Cancel} alt="cancel" className="cart__remove-btn-image" />
            </button>
          }
        />
    );
  }
}
