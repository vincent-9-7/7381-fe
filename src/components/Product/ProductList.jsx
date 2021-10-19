import React, { Component } from 'react';
import './Product.scss';
import { connect } from 'react-redux';
// import Loading from '../Loading/Loading';
import { filterProducts, getProducts } from '../../store/actions/cart/products';
import { addToCart } from '../../store/actions/cart/cart';
import { getVisibleProducts } from '../../store/reducers/cart/products';
import Product from './Product';
import Loading from '../Loading/Loading';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { products, addToCart, num, productType, search } = this.props; // 用的是cart
    const firstThree = products;
    const secondThree = products;
    const searchResult = products;
    let searchNum = false;
    if (productType === 1) {
      for (let i = 0; i < products.length; i += 1) {
        if (products[i].category === 'Vegetable') {
          products.splice(i, 1); // 从i索引的位置，删除一个元素
          i -= 1;
        }
      }
    } else if (productType === 2) {
      for (let i = 0; i < products.length; i += 1) {
        if (products[i].category === 'Fruit') {
          products.splice(i, 1); // 从i索引的位置，删除一个元素
          i -= 1;
        }
      }
    } else if (productType === 4) {
      // 搜索
      if (search.length !== 0) {
        for (let i = 0; i < searchResult.length; i += 1) {
          if (!searchResult[i].title.includes(search)) {
            searchResult.splice(i, 1); // 从i索引的位置，删除一个元素
            i -= 1;
          }
        }
        if (searchResult.length !== 0) {
          searchNum = true;
        }
      }
      // console.log(search);
      // console.log(searchResult);
    }
    // console.log(products);
    const link = ['fruit', 'vegetable', 'productions', ''];
    const { history } = this.props;
    return (
      <>
        {productType !== 4 && productType !== 5 && productType !== 6 && (
          <div className="product-page container">
            {products.map((product) => (
              <Product
                key={product._id}
                num={num}
                product={product}
                onAddToCartClicked={() => {
                  addToCart(product._id);
                  window.sessionStorage.setItem('cart', true);
                  history.push(`${link[productType - 1]}`);
                }}
              />
            ))}
          </div>
        )}

        {/* Search Components */}
        
        {productType === 4 && (
          <>
          {!searchNum && <Loading />}
          <div className="product-page ">
            {searchNum &&
              searchResult.map((product) => (
                <Product
                  key={product._id}
                  num={num}
                  product={product}
                  onAddToCartClicked={() => {
                    addToCart(product._id);
                    window.sessionStorage.setItem('cart', true);
                    history.push(`/search?name=${search}`);
                  }}
                />
              ))}
          </div>
          </>
        )}

        {productType === 5 && (
          <div className="product-page ">
            {firstThree.slice(0, 3).map((product) => (
              <Product
                key={product._id}
                num={num}
                product={product}
                onAddToCartClicked={() => {
                  addToCart(product._id);
                  window.sessionStorage.setItem('cart', true);
                  history.push('/');
                }}
              />
            ))}
          </div>
        )}

        {productType === 6 && (
          <div className="product-page">
            {secondThree.slice(3, 6).map((product) => (
              <Product
                key={product._id}
                num={num}
                product={product}
                onAddToCartClicked={() => {
                  addToCart(product._id);
                  window.sessionStorage.setItem('cart', true);
                  history.push('/');
                }}
              />
            ))}
          </div>
        )}
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
