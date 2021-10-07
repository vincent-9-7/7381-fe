import React, { Component } from 'react';
import { connect } from 'react-redux';
import { checkout, addFromCart, removeFromCart, deleteFromCart } from '../../store/actions/cart/cart';
import {
  getTotal,
  getCartProducts,
  // getCheckoutError,
  // isCheckoutPending,
} from '../../store/reducers/cart/index';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import ShoppingCartItem from '../../components/ShoppingCart/ShoppingCartItem';
import CalculatTotal from '../../components/ShoppingCart/CalculatTotal';
import './ShoppingCart.scss';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.cartItems = this.cartItems.bind(this);
  }

  cartItems(products) {
    const { removeFromCart, addFromCart, deleteFromCart } = this.props;
    if(products.length <= 0){
      sessionStorage.removeItem('cart');
      // localStorage.removeItem('carts');
    }
    return products.length <= 0 ? (
      <h3>Please add some products to cart.</h3>
    ) : (
      products.map((product) => (
        <ShoppingCartItem
          title={product.title}
          price={product.price}
          shoppingcartQuantity={product.shoppingcartQuantity}
          leftQuantity={product.quantity}
          soldQuantity={product.postQuantity - product.quantity}
          condition={product.condition}
          size={product.size}
          key={product._id}
          onRemove={() => removeFromCart(product._id)}
          onAdd={() => addFromCart(product._id)}
          onDelete={() => deleteFromCart(product._id)}
          // nums = {()=>numFromCart(product._id)}
        />
      ))
    );
  }

  render() {
    // const { products, total, error, checkoutPending, checkout } = this.props;
    const { products, total} = this.props;
    // const checkoutAllowed = products.length > 0 && !checkoutPending;
    const { history } = this.props;
    console.log(products);
    return (
      <>
        <Header />

        <div className="cart container">
          <div className="cart__left">
            <div className="cart__title">
              <h2>Shopping Cart</h2>
              <h3 className="cart__title--right">Price</h3>
            </div>

            <div className="cart__products">{this.cartItems(products)}</div>

            {/* <Purchase /> */}
            <div className="cart__checkout">
              <p style={{ fontSize: '1.5em' }}>Subtotal:&nbsp;</p>
              <p style={{ fontSize: '1.5em', fontWeight: 'bold' }}>${total}</p>
              {/* <button
                className="btn--search"
                onClick={checkout}
                disabled={checkoutAllowed ? '' : 'disabled'}
                type="button"
              >
                Checkout
              </button> */}
            </div>
          </div>

          <div className="cart__right">
            {/* Step:1 第一次结账预览 2:第二次结账 */}
            <CalculatTotal product={products} step={1} num={null} total={total} postageFee="Free" history={history} />
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
    // error: getCheckoutError(state),
    // checkoutPending: isCheckoutPending(state),
  };
}

export default connect(mapStateToProps, { checkout, addFromCart, removeFromCart, deleteFromCart })(Cart);
