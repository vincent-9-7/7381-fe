/* eslint-disable max-len */
import React, { Component } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
// import {useSelector} from 'react-redux';
import { connect } from 'react-redux'; // class 获取 redux 参数步骤 - 1/5
import StripePay from '../StripePay/StripePay';

class CalculatTotal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // const [data, setData] = useState(null);
  // console.log(data);
  render() {
    const { step, num, total, postageFee, product, order, showPay } = this.props;
    const { getPayment } = this.props; // class 获取 redux 参数步骤 - 2/5
    const { history } = this.props;
    const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);
    // console.log(product);
    // console.log(order);

    // console.log(getPayment); // class 获取 redux 参数步骤 - 3/5
    return (
      <>
        <div className="cart__right--border">
          <div className="cart__right--line">
            {/* <h3>Items ({num})</h3> */}
            {num === null && <h3>Subtotal</h3>}
            {num !== null && <h3>{`Subtotal (${num} items)`}</h3>}
            <h3>{`AU $${total}`}</h3>
          </div>

          <div className="cart__right--line">
            <h3>Delivery</h3>
            <h3>{postageFee}</h3>
          </div>

          <div className="cart__right--grey">
            <h3>Total</h3>
            <h3 style={{ fontSize: '1.5em', fontWeight: 'bold' }}>{`AU $${total}`}</h3>
          </div>

          <div className="cart__right--button">
            {/* Step:1 第一次结账预览 2:第二次结账 */}
            {step === 1 && (
              <button
                className="btn--goCheckout"
                type="button"
                onClick={() => {
                  window.sessionStorage.setItem('total', total);
                  window.sessionStorage.setItem('checkout_products', JSON.stringify(product));
                  history.push('/checkout');
                }}
              >
                Checkout
              </button>
            )}

            {step === 2 && !showPay && <h3 style={{ color: 'red' }}>Require all infromation before payment</h3>}

            {step === 2 && showPay && (
              <div className="container">
                <Elements stripe={promise}>
                  <StripePay price={total} paystatus={getPayment} data={order} />
                </Elements>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    // profile: state.user.profile,
    // loggedIn: state.auth.loggedIn
    getPayment: state.order.payment, // class 获取 redux 参数步骤 - 4/5
  };
}

export default connect(mapStateToProps)(CalculatTotal); // class 获取 redux 参数步骤 - 5/5
