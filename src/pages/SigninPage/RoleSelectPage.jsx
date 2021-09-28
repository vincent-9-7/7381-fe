import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import '../RegisterPage/RegisterPage.scss';
import Seller from "../../assets/img/Seller.png";
import { ExpireOneHour } from '../../components/ExpiresTime/ExpiresTime';

function RoleSeclectPage() {
  const [cookies, setCookie] = useCookies(['signin-cookie-name']);
  const handleOnClick = () => {
    setCookie('signin', "seller", { path: '/', expires: ExpireOneHour() });
    // sessionStorage.setItem('signin', "seller");
    document.location.href = "/signin";
  };
  const handleOnClick2 = () => {
    setCookie('signin', "buyer", { path: '/', expires: ExpireOneHour() });
    // sessionStorage.setItem('signin', "buyer");
    document.location.href = "/signin";
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="role-selection">
          <h1>Sign in as a Seller or Buyer? </h1>
          <div className="avators">
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                onClick={handleOnClick}
                type="button"
                style={{ marginRight: "50px" }}
              >
                <img src={Seller} alt="seller" />
              </button>
              <h3 style={{ marginRight: "50px" }}>Join as a Seller</h3>
            </div>
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                onClick={handleOnClick2}
                type="button"
                style={{ marginLeft: "50px" }}
              ><img src={Seller} alt="buyer" />
              </button>
              <h3 style={{ marginLeft: "50px" }}>Join as a Buyer</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoleSeclectPage;