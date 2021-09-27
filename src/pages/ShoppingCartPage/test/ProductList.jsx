/* eslint-disable */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import ProductItem from './ProductItem';
import { filterProducts, getProducts } from '../../../store/actions/test/products';
import { addToCart } from '../../../store/actions/test/cart';
import { getVisibleProducts } from '../../../store/reducers/test/products';

import ShoppingCart from '../ShoppingCart';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {  };

    // this.handleChange = this.handleChange.bind(this);
    // this.createProductItems = this.createProductItems.bind(this);
    // this.refresh = this.refresh.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  //   this.props.filterProducts(event.target.value.toUpperCase());
  // }

  // createProductItems() {
  //   // console.log(this.props);
  //   const { products, addToCart } = this.props; // 用的是cart
  //   return products.map((product) => (
  //     <ProductItem key={product.id} product={product} onAddToCartClicked={() => addToCart(product.id)} />
  //   ));
  // }

  // refresh() {
  //   this.setState({value: ''});
  //   this.props.getProducts();
  // }

  render() {
    const{history} = this.props;
    return (
      <div>
        <h1>Productss</h1>
        {/* {this.createProductItems()} */}

        <h1>-----</h1>
        <button type="button" onClick={() => history.push('/')}>
          {' '}
          Home page{' '}
        </button>
        <ShoppingCart />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    products: getVisibleProducts(state.products), // 从states取出products
  };
}

export default connect(mapStateToProps, { addToCart, filterProducts, getProducts })(ProductList);

// ProductList.propTypes = {
//   products: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     inventory: PropTypes.number.isRequired
//   })).isRequired,
//   addToCart: PropTypes.func.isRequired
// };
