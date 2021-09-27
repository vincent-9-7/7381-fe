import React, { Component } from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import ProductList from '../../components/Product/ProductList';

class VegetablePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        {/* 1:Fruit 2:Vegetable 3:ALL */}
        <ProductList productType={2} history={history} />
        <Footer />
      </>
    );
  }
}

export default VegetablePage;
