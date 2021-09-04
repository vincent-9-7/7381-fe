import React from 'react';
import "./RegisterPage.scss";
import RegisterForm from '../../components/Register/RegisterForm';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';


function RegisterPage(props) {
  const { data } = props;
  return (
    <div className="container">
      <Header />
      <RegisterForm />
      <Footer />
    </div>
  );
}

export default RegisterPage;