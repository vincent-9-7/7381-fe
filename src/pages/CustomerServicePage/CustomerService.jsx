import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import PageTitle from '../../components/PageTitle/PageTitle';
import ServiceCard from '../../components/ServiceComponents/ServiceComponents';
import yourOrder from '../../assets/img/yourOrder.svg';
import returnRefunds from '../../assets/img/returnRefunds.svg';
import selling from '../../assets/img/selling.svg';
import contactUs from '../../assets/img/contactUs.svg';
import email from '../../assets/img/email.svg';
import contact from '../../assets/img/contact.svg';

import CustomerContactForm from '../../components/ContactForm/ContactForm';
import './CustomerService.scss';

export default function CustomerService() {
  return (
    <div>
      <Header />
      <div className="customer container">
        <div className="home-page__deals--title">
          <h2>How can we help you?</h2>
        </div>

        <div className="customer__text">
          <h3>We welcome you to contact us using the details below </h3>
          <h3>We would love to hear from you</h3>
        </div>
      </div>

      <div className="customer__cards-background">
        <div className="customer__cards container">
          <ServiceCard
            text="Your Order"
            description1="Track your packages"
            description2="Edit or cancel orders"
            img={yourOrder}
          />

          <ServiceCard
            text="Returns &amp; Refunds"
            description1="Return or exchange items"
            description2="Print return mailing labels"
            img={returnRefunds}
          />

          <ServiceCard text="Selling" description1="B-market seller’s guide " description2="" img={selling} />
        </div>
      </div>

      <div className="customer__contact container">
        <div>
          <PageTitle text="Contact us" background="white-bg" />
          <CustomerContactForm />
        </div>
        <div className="customer__contact-right">
          <img src={contactUs} alt="contact" className="customer__contact--image" />
          <div>
            <div className="customer__contact--icon">
              <img src={email} alt="contact" className="customer__contact--email" />
              <h3 style={{ padding: '0px', marginLeft: '10px' }}>bmarket@gmail.com</h3>
            </div>
            <div className="customer__contact--icon">
              <img src={contact} alt="contact" className="customer__contact--phone" />
              <h3 style={{ padding: '0px', marginLeft: '10px' }}>0432543921, 0443223412</h3>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
