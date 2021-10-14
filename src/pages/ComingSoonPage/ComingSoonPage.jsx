import React from 'react';
import './ComingSoonPage.scss';
import Coming from '../../assets/img/ComingSoon.jpg';
// import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';

function ComingSoon(match) {
  const{match:{params:{id}}} = match;
  console.log(id);
  return (
    <>
      <img src={Coming} alt="Coming" style={{height:"100vh", width:"100%"}} />
      <Footer />
    </>
  );
}

export default ComingSoon;
