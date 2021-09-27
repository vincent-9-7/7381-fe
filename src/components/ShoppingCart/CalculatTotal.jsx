import React, { Component } from 'react';


export default class CalculatTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const [data, setData] = useState(null);
  // console.log(data);
  render() {
  const {num, total, postageFee} = this.props;
  return (
    <div className="cart__right--border">
      <div className="cart__right--line">
          {/* <h3>Items ({num})</h3> */}
          <h3>B-grade products</h3>
          <h3>{`AU $${total}`}</h3>
      </div>

      <div className="cart__right--line">
          <h3>Delivery</h3>
          <h3>{postageFee}</h3>
      </div>

      <div className="cart__right--grey">
          <h3>Total</h3>
          <h3>{`AU $${total}`}</h3>
      </div>

      <div className="cart__right--button">
        <button className="btn--goCheckout" type="button">Checkout</button>
      </div>
    </div>
  );
}
};