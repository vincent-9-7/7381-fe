import React from 'react';
import "./RegisterPage.scss";
import RegisterForm from '../../components/Register/RegisterForm';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';


function RegisterPage(props) {
  const { data } = props;
  return (
    <>
      <Header />
      <div className="container">
        <RegisterForm />
      </div>
      <Footer />
    </>
  );
}

export default RegisterPage;