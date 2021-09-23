import React, { Component } from 'react';

export default class ShoppingCartItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    // console.log(this.props);
    const { brand, price, quantity, title, button, inventory } = this.props;
    return (
      <div className="cart__details">
        <p className="cart__details--text">{brand} {title} : &#36;{price} {quantity ? `x ${quantity}` : null}</p>
        
        {button}
      </div>
    );
  }
}

