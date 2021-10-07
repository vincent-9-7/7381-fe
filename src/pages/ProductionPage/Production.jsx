import React, { Component } from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import ProductList from '../../components/Product/ProductList';

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history,match } = this.props;
    // if(match.path === "/search") {
    //   console.log('search');
    // }
    return (
      <>
        <Header cart={false} />
        {/* 1:Fruit 2:Vegetable 3:ALL 4.Search items */}
        {match.path !== "/search" && <ProductList productType={3} history={history} />}
        {match.path === "/search" && <ProductList productType={4} history={history} />}
        <Footer />
      </>
    );
  }
}

export default ProductPage;
