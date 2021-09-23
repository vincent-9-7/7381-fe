import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout, removeFromCart } from '../../store/actions/cart/cart';
import { getTotal, getCartProducts, getCheckoutError, isCheckoutPending } from '../../store/reducers/cart/index';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import './ShoppingCart.scss';
import ShoppingCartItem from './ShoppingCartItem';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cartItems = this.cartItems.bind(this);
  }

  cartItems(products) {
    const { removeFromCart } = this.props;
    return products.length <= 0 ? (
      <p className="cart__details--text">Please add some products to cart.</p>
    ) : (
      products.map((product) => (
        <ShoppingCartItem
          title={product.title}
          price={product.price}
          quantity={product.quantity}
          key={product._id}
          onRemove={() => removeFromCart(product._id)}
        />
      ))
    );
  }

  render() {
    const { products, total, error, checkoutPending, checkout } = this.props;
    const checkoutAllowed = products.length > 0 && !checkoutPending;

    return (
      <>
        <Header />

        <div className="container">
          {/* <h2>Your shopping cart:</h2> */}

          <div style={{ margin: '150px 0' }}>{this.cartItems(products)}</div>

          <div className="cart__checkout">
            <h2>Total: {total} AU</h2>

            <button
              className="btn--search"
              onClick={checkout}
              // disabled={checkoutAllowed ? '' : 'disabled'}
              type="button"
            >
              Checkout
            </button>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: getCartProducts(state),
    total: getTotal(state),
    error: getCheckoutError(state),
    checkoutPending: isCheckoutPending(state),
  };
}

export default connect(mapStateToProps, { checkout, removeFromCart })(Cart);
