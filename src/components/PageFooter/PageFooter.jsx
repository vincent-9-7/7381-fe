import React from 'react';
import './PageFooter.scss';
import B from '../../assets/img/LogoB.svg';
import Market from '../../assets/img/market.svg';

function Footer() {
  return (
    <div className="page-footer">
      <div className="container">
        <div style={{display:"flex",justifyContent:"center",margin:"40px 0px"}}>
          <div className="page-footer__logos">
            <img src={B} alt="B" className="page-footer__logo--1" />
            <img src={Market} alt="Market" className="page-footer__logo--2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
