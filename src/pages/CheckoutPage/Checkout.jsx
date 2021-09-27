import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import PageTitle from '../../components/PageTitle/PageTitle';
import './Checkout.scss';


function Checkout() {

  return(
    <div>
      <Header />
      <PageTitle text="Checkout" />

      
      <Footer />
    </div>
  );
}

export default Checkout;