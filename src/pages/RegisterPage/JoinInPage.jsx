import React from 'react';
import "./RegisterPage.scss";
import JoinIn from '../../components/Register/JoinIn';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';


function JoinInPage() {

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "5.5rem" }}>
        <JoinIn />
      </div>
      <Footer />
    </>
  );
}

export default JoinInPage;