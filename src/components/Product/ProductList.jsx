import React, { Component } from 'react';
import './Product.scss';
import { connect } from 'react-redux';
// import Loading from '../Loading/Loading';
import { filterProducts, getProducts } from '../../store/actions/cart/products';
import { addToCart } from '../../store/actions/cart/cart';
import { getVisibleProducts } from '../../store/reducers/cart/products';
import Product from './Product';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    const { loading, products, addToCart, num } = this.props; // 用的是cart
    // console.log(products);
    // console.log(num)
    if(num !== undefined) {
      products.length = num;
    }
    
    return (
      <>
        {/* {loading == true && <Loading />} */}
        <div className="product-page container">
          {products.map((product) => (
            <Product key={product._id} num={num} product={product} onAddToCartClicked={() => addToCart(product._id)} />
          ))}
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products), // 从states取出products
  };
}

export default connect(mapStateToProps, { addToCart, filterProducts, getProducts })(ProductList);
