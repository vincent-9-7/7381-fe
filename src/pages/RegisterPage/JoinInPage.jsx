import React from 'react';
import "./RegisterPage.scss";
import JoinIn from '../../components/Register/JoinIn';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';


function JoinInPage(props) {
  const { data } = props;

  return (
    <div className="container">
      <Header />
      <JoinIn />
      <Footer />
    </div>
  );
}

export default JoinInPage;