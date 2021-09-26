/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './PageHeader.scss';
import Bmarket from '../../assets/img/Bmarket.svg';
import B from '../../assets/img/LogoB.svg';
import User from '../../assets/img/User.svg';
import Cart from '../../assets/img/Cart.svg';

function Header(props) {
  return (
    <div {...props} className="page-header">
      <div className="container">
       
        {/* Mobile Style */}
        <div className="page-header__mobile">
          <button
            onClick={() => (document.location.href = '/')}
            type="button"
            className="page-header__mobile--logo-button"
          >
            <img src={B} alt="B" className="page-header__logo" />
          </button>

          <button
            onClick={() => (document.location.href = '/shopping-cart')}
            type="button"
            className="page-header__mobile--button"
          >
            <img src={Cart} alt="B" className="page-header__cart" />
          </button>
        </div>

        {/* Destop Style */}
        <div className="page-header__desktop">
          <button
            onClick={() => (document.location.href = '/')}
            type="button"
            className="page-header__desktop--logo-button"
          >
            <img src={Bmarket} alt="B" className="page-header__logo" />
          </button>

          <button
            onClick={() => (document.location.href = '/productions/fruit')}
            type="button"
            className="page-header__desktop--button-words"
          >
            Fruit
          </button>

          <button
            onClick={() => (document.location.href = '/productions/vegetable')}
            type="button"
            className="page-header__desktop--button-words"
          >
            Vegetable
          </button>

          <button
            onClick={() => (document.location.href = '/productions')}
            type="button"
            className="page-header__desktop--button-words"
          >
            Production
          </button>

          <button
            onClick={() => (document.location.href = '/about-us')}
            type="button"
            className="page-header__desktop--button-words"
          >
            About us
          </button>

          <div className="page-header__desktop--four-icons">
            <div className="page-header__desktop--left-two-icons">
              <button
                onClick={() => (document.location.href = '/sign-in')}
                type="button"
                className="page-header__desktop--button-words"
              >
                Sign in
              </button>

              <button
                onClick={() => (document.location.href = '/profile')}
                type="button"
                className="page-header__desktop--button"
              >
                <img src={User} alt="B" className="page-header__user" />
              </button>
            </div>

            <div className="page-header__desktop--right-two-icons">
              <button
                onClick={() => (document.location.href = '/join')}
                type="button"
                className="page-header__desktop--button-words"
              >
                Join
              </button>

              <button
                onClick={() => (document.location.href = '/shopping-cart')}
                type="button"
                className="page-header__desktop--button"
              >
                <img src={Cart} alt="B" className="page-header__cart" />
              </button>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
