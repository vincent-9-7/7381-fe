import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import ProductList from '../../components/Product/ProductList';

function ProductPage() {

  return(
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}

export default ProductPage;