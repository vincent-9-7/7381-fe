import React from 'react';
import "./RegisterPage.scss";
import JoinIn from '../../components/Register/JoinIn';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';


function JoinInPage(props) {
  const { data } = props;

  return (
    <>
      <Header />
      <div className="container">
        <JoinIn />
      </div>
      <Footer />
    </>
  );
}

export default JoinInPage;