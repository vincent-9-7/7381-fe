import React from 'react';
import './PageFooter.scss';
import B from '../../assets/img/LogoB.svg';
import Market from '../../assets/img/market.svg';

function Footer({ color }) {
  return color === 'white' ? (
    <div className="page-footer page-footer-white">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px', marginTop:'10px' }}>
          <div className="page-footer__logos">
            <img src={B} alt="B" className="page-footer__logo--1" />
            <img src={Market} alt="Market" className="page-footer__logo--2" />
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="page-footer page-footer-orange">
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', padding: '20px 0px', marginTop:'10px' }}>
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
