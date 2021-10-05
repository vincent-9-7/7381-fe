import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import PageTitle from '../../components/PageTitle/PageTitle';
// import './CustomerService.scss';

export default function AboutUs() {
  return (
    <div>
      <Header />
      <PageTitle text="About us" background="white-bg" />

      <Footer />
    </div>
  );
}
