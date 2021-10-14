import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import '../RegisterPage/RegisterPage.scss';
import Seller from "../../assets/img/Seller.png";
import UserAvator from "../../assets/img/UserAvator.svg";
import ShopAvator from "../../assets/img/ShopAvator.svg";
import { ExpireOneHour } from '../../components/ExpiresTime/ExpiresTime';
import PageTitle from '../../components/PageTitle/PageTitle';

function RoleSeclectPage() {
  const [cookies, setCookie] = useCookies(['signin-cookie-name']);
  const history = useHistory();
  const handleOnClick = () => {
    setCookie('signin', "seller", { path: '/', expires: ExpireOneHour() });
    sessionStorage.setItem('signin', "seller");
    // document.location.href = "/signin";
    history.push('/signin');
  };
  const handleOnClick2 = () => {
    setCookie('signin', "buyer", { path: '/', expires: ExpireOneHour() });
    sessionStorage.setItem('signin', "buyer");
    // document.location.href = "/signin";
    history.push('/signin');
  };

  return (
    <>
      <Header />
      <div className="container">
        <PageTitle text="Sign in as a Seller or Buyer? " />
        <div className="role-selection">
          {/* <PageTitle text="Sign in as a Seller or Buyer? " /> */}
          {/* <h1>Sign in as a Seller or Buyer? </h1> */}
          <div className="avators">
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                onClick={handleOnClick}
                type="button"
                style={{ marginRight: "50px" }}
              >
                <img src={UserAvator} alt="seller" />
              </button>
              {/* <h3 style={{ marginRight: "50px" }}>Join as a Seller</h3> */}
            </div>
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                onClick={handleOnClick2}
                type="button"
                style={{ marginLeft: "50px" }}
              ><img src={ShopAvator} alt="buyer" />
              </button>
              {/* <h3 style={{ marginLeft: "50px" }}>Join as a Buyer</h3> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoleSeclectPage;