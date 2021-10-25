import React, { Component } from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import ProductList from '../../components/Product/ProductList';
import SearchBar from '../../components/SearchBar/SearchBar';

const queryString = require('query-string');

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history,match,location } = this.props;

    // 判断search的是什么
    const parsed = queryString.parse(location.search);
    const searchItem = parsed.name;
    // console.log(typeof searchItem);

    return (
      <>
        <Header cart={false} />
        <SearchBar />
        {/* 1:Fruit 2:Vegetable 3:ALL 4.Search items */}
        {match.path !== "/search" && <ProductList productType={3} history={history} />}
        {match.path === "/search" && <ProductList productType={4} history={history} search={searchItem} />}
        <Footer />
      </>
    );
  }
}

export default ProductPage;
