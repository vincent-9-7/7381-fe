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
    const { history } = this.props;
    return (
      <>
        <Header cart={false} />
        {/* 1:Fruit 2:Vegetable 3:ALL */}
        <ProductList productType={3} history={history} />
        <Footer />
      </>
    );
  }
}

export default ProductPage;
