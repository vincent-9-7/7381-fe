/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './PageHeader.scss';
import { useHistory } from 'react-router-dom';
import Bmarket from '../../assets/img/Bmarket.svg';
import B from '../../assets/img/LogoB.svg';
import User from '../../assets/img/User.svg';
import Cart from '../../assets/img/Cart.svg';

const frontUrl = "http://localhost:3000/#section";
// const frontUrl = "https://bmarket.ml/#section";

function Header({ color }) {
  // 跳转push方式：
  // 1. class：
  // this.props.history.push("/")
  // 2. function hooks：
  // import {useHistory, Link} from "react-router-dom";
  // const history = useHistory();
  // history.push('/test-cart2')

  const history = useHistory();
  const notEmpty = window.sessionStorage.getItem('cart');

  const removeSignin = () => {
    sessionStorage.removeItem('signin');
    sessionStorage.removeItem('register');
    sessionStorage.removeItem('buyerinfo');
    sessionStorage.removeItem('userID');
    sessionStorage.removeItem('sellerinfo');
    sessionStorage.removeItem('Username');
    sessionStorage.removeItem('signed');
    sessionStorage.removeItem('total');
    sessionStorage.removeItem('cart');
    sessionStorage.removeItem('checkout_products');
    sessionStorage.removeItem('currentLocation');
    sessionStorage.removeItem('filterLocation');
    sessionStorage.removeItem('submittedQuantity');
    // history.push('./');
    document.location.href = '/';
  };

  return (
    <>
      {/* header是白色的情况 */}
      {color === 'white' && (
        <div className="page-header-white">
          <div className="container">
            {/* Mobile Style */}
            <div className="page-header__mobile">
              <button onClick={() => history.push('/')} type="button" className="page-header__mobile--logo-button">
                <img src={B} alt="B" className="page-header__logo" />
              </button>

              {/* <button onClick={() => 
          history.push('/shopping-cart')} type="button" className="page-header__mobile--button">
            <img src={Cart} alt="B" className="page-header__cart" />
          </button> */}

              {notEmpty ? (
                <button // 购物车内有东西
                  onClick={() => history.push('/Shopping-cart')}
                  type="button"
                  className="page-header__desktop--button"
                >
                  <img src={Cart} alt="B" className="page-header__cart" />
                  <div className="page-header__cart--notEmpty" />
                </button>
              ) : (
                <button // 购物车内 没有 东西
                  onClick={() => history.push('/Shopping-cart')}
                  type="button"
                  className="page-header__desktop--button"
                >
                  <img src={Cart} alt="B" className="page-header__cart" />
                </button>
              )}
            </div>

            {/* Destop Style */}
            <div className="page-header__desktop">
              <button
                onClick={() => {
                  history.push('/');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--logo-button"
              >
                <img src={Bmarket} alt="B" className="page-header__logo" />
              </button>

              <a
                // onClick={() => history.push('/about-us')}
                type="button"
                className="page-header__desktop--button-words"
                // goto='text1'
                // href="./#section"
                href={frontUrl}
              >
                About us
              </a>

              <button
                onClick={() => {
                  history.push('/fruit');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--button-words"
              >
                Fruit
              </button>

              <button
                onClick={() => {
                  history.push('/vegetable');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--button-words"
              >
                Vegetable
              </button>

              {/* <button
            onClick={() => history.push('/productions')}
            type="button"
            className="page-header__desktop--button-words"
          >
            Production
          </button> */}

              <button
                onClick={() => {
                  history.push('/service');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--button-words"
              >
                Customer service
              </button>
              {/** Login Status */}
              {sessionStorage.getItem('signed') === 'yes' && (
                <div className="page-header__desktop--four-icons">
                  <div className="page-header__desktop--left-two-icons">
                    <button
                      onClick={removeSignin}
                      type="button"
                      className="page-header__desktop--button-words"
                      style={{ fontSize: '13px', marginBottom: '15px' }}
                    >
                      Sign out
                    </button>

                    <button
                      onClick={() => {
                        history.push('/profile');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button"
                    >
                      <img src={User} alt="B" className="page-header__user" />
                    </button>
                  </div>
                  <div className="page-header__desktop--right-two-icons">
                    {notEmpty ? (
                      <button // 购物车内有东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                        <div className="page-header__cart--notEmpty" />
                      </button>
                    ) : (
                      <button // 购物车内 没有 东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                      </button>
                    )}
                  </div>
                </div>
              )}
              {/** Not login Status */}
              {sessionStorage.getItem('signed') !== 'yes' && (
                <div className="page-header__desktop--four-icons">
                  <div className="page-header__desktop--left-two-icons">
                    <button
                      onClick={() => {
                        history.push('/role-select');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button-words"
                      style={{ fontSize: '13px', marginBottom: '15px' }}
                    >
                      Sign in
                    </button>

                    <button
                      onClick={() => {
                        history.push('/profile');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button"
                    >
                      <img src={User} alt="user" className="page-header__user" />
                    </button>
                  </div>
                  <div className="page-header__desktop--right-two-icons">
                    <button
                      onClick={() => {
                        history.push('/join-in');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button-words"
                      style={{ fontSize: '13px', marginBottom: '15px' }}
                    >
                      Join in
                    </button>
                    {notEmpty ? (
                      <button // 购物车内有东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                        <div className="page-header__cart--notEmpty" />
                      </button>
                    ) : (
                      <button // 购物车内 没有 东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* header是绿色的情况 */}
      {color !== 'white' && (
        <div className="page-header">
          <div className="container">
            {/* Mobile Style */}
            <div className="page-header__mobile">
              <button
                onClick={() => {
                  history.push('/');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__mobile--logo-button"
              >
                <img src={B} alt="B" className="page-header__logo" />
              </button>

              {/* <button onClick={() => 
          history.push('/shopping-cart')} type="button" className="page-header__mobile--button">
            <img src={Cart} alt="B" className="page-header__cart" />
          </button> */}

              {notEmpty ? (
                <button // 购物车内有东西
                  onClick={() => {
                    history.push('/Shopping-cart');
                    sessionStorage.removeItem('currentLocation');
                    sessionStorage.removeItem('filterLocation');
                  }}
                  type="button"
                  className="page-header__desktop--button"
                >
                  <img src={Cart} alt="B" className="page-header__cart" />
                  <div className="page-header__cart--notEmpty" />
                </button>
              ) : (
                <button // 购物车内 没有 东西
                  onClick={() => {
                    history.push('/Shopping-cart');
                    sessionStorage.removeItem('currentLocation');
                    sessionStorage.removeItem('filterLocation');
                  }}
                  type="button"
                  className="page-header__desktop--button"
                >
                  <img src={Cart} alt="B" className="page-header__cart" />
                </button>
              )}
            </div>

            {/* Destop Style */}
            <div className="page-header__desktop">
              <button
                onClick={() => {
                  history.push('/');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--logo-button"
              >
                <img src={Bmarket} alt="B" className="page-header__logo" />
              </button>

              <a
                // onClick={() => history.push('/about-us')}
                type="button"
                className="page-header__desktop--button-words"
                // goto='text1'
                // href="./#section"
                href={frontUrl}
              >
                About us
              </a>

              <button
                onClick={() => {
                  history.push('/fruit');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--button-words"
              >
                Fruit
              </button>

              <button
                onClick={() => {
                  history.push('/vegetable');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--button-words"
              >
                Vegetable
              </button>

              {/* <button
            onClick={() => history.push('/productions')}
            type="button"
            className="page-header__desktop--button-words"
          >
            Production
          </button> */}

              <button
                onClick={() => {
                  history.push('/service');
                  sessionStorage.removeItem('currentLocation');
                  sessionStorage.removeItem('filterLocation');
                }}
                type="button"
                className="page-header__desktop--button-words"
              >
                Customer service
              </button>
              {/** Login Status */}
              {sessionStorage.getItem('signed') === 'yes' && (
                <div className="page-header__desktop--four-icons">
                  <div className="page-header__desktop--left-two-icons">
                    <button
                      onClick={removeSignin}
                      type="button"
                      className="page-header__desktop--button-words"
                      style={{ fontSize: '13px', marginBottom: '15px' }}
                    >
                      Sign out
                    </button>

                    <button
                      onClick={() => {
                        history.push('/profile');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button"
                    >
                      <img src={User} alt="B" className="page-header__user" />
                    </button>
                  </div>
                  <div className="page-header__desktop--right-two-icons">
                    {notEmpty ? (
                      <button // 购物车内有东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                        <div className="page-header__cart--notEmpty" />
                      </button>
                    ) : (
                      <button // 购物车内 没有 东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                      </button>
                    )}
                  </div>
                </div>
              )}
              {/** Not login Status */}
              {sessionStorage.getItem('signed') !== 'yes' && (
                <div className="page-header__desktop--four-icons">
                  <div className="page-header__desktop--left-two-icons">
                    <button
                      onClick={() => {
                        history.push('/role-select');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button-words"
                      style={{ fontSize: '13px', marginBottom: '15px' }}
                    >
                      Sign in
                    </button>

                    <button
                      onClick={() => {
                        history.push('/profile');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button"
                    >
                      <img src={User} alt="user" className="page-header__user" />
                    </button>
                  </div>
                  <div className="page-header__desktop--right-two-icons">
                    <button
                      onClick={() => {
                        history.push('/join-in');
                        sessionStorage.removeItem('currentLocation');
                        sessionStorage.removeItem('filterLocation');
                      }}
                      type="button"
                      className="page-header__desktop--button-words"
                      style={{ fontSize: '13px', marginBottom: '15px' }}
                    >
                      Join in
                    </button>
                    {notEmpty ? (
                      <button // 购物车内有东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                        <div className="page-header__cart--notEmpty" />
                      </button>
                    ) : (
                      <button // 购物车内 没有 东西
                        onClick={() => {
                          history.push('/Shopping-cart');
                          sessionStorage.removeItem('currentLocation');
                          sessionStorage.removeItem('filterLocation');
                        }}
                        type="button"
                        className="page-header__desktop--button"
                      >
                        <img src={Cart} alt="B" className="page-header__cart" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
