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
    this.state = {};
  }

  render() {
    const { loading, products, addToCart, num, productType } = this.props; // 用的是cart
    // console.log(products);
    // console.log(productType);
    // console.log(num)
    if (num !== undefined) {
      // 首页只展示6个的情况
      products.length = num;
    }

    if (productType === 1) {
      for (let i = 0; i < products.length; i += 1) {
        if (products[i].category === 'vegetable') {
          products.splice(i, 1); // 从i索引的位置，删除一个元素
          i -= 1;
        }
      }
    } else if (productType === 2) {
      for (let i = 0; i < products.length; i += 1) {
        if (products[i].category === 'fruit') {
          products.splice(i, 1); // 从i索引的位置，删除一个元素
          i -= 1;
        }
      }
    }
    // console.log(products);
    const link = ['fruit', 'vegetable', 'productions'];
    const { history } = this.props;
    return (
      <>
        {/* {loading == true && <Loading />} */}
        <div className="product-page container">
          {products.map((product) => (
            <Product
              key={product._id}
              num={num}
              product={product}
              onAddToCartClicked={() => {
                addToCart(product._id);
                window.sessionStorage.setItem('cart', true);
                history.push(`${link[productType-1]}`);
              }}
            />
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
