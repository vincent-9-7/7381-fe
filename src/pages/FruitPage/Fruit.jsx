import React, {Component} from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import ProductList from '../../components/Product/ProductList';

class FruitPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <>
        <Header />
        {/* 1:Fruit 2:Vegetable 3:ALL 4.Search items */}
        <ProductList productType={1} history={history} />
        <Footer />
      </>
    );
  }
}

export default FruitPage;
