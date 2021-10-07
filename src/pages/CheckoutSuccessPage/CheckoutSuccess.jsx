import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import './CheckoutSuccess.scss';

export default function CheckoutSuccess({ orderData }) {
  console.log(orderData);

  const refersh = () => {
    document.location.href = '/';
  };

  return (
    <div>
      <Header />
      <div className="success container">
        <h3 className="success__words">
          Your order has been recieved.
          <br />
          Thank you!
        </h3>

        <button className="btn--success" type="submit" onClick={refersh}>
          view others
        </button>
      </div>

      <Footer />
    </div>
  );
}
