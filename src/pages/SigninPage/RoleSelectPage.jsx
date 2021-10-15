import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import '../RegisterPage/RegisterPage.scss';
import user from "../../assets/img/userImage.png";
import shop from "../../assets/img/shopImage.png";
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
        <PageTitle text="Sign for user or shop" background="white-bg" />
        <div className="role-selection">
          {/* <PageTitle text="Sign in as a Seller or Buyer? " /> */}
          {/* <h1>Sign in as a Seller or Buyer? </h1> */}
          <div className="avators">
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                className="joinin-button"
                onClick={handleOnClick}
                type="button"
                style={{ marginRight: "50px" }}
              >
                <img src={user} alt="seller" style={{ padding: "10px 10px 10px 10px" }} />
              </button>
              <h3 style={{ marginRight: "50px", fontWeight: "bold" }}>User</h3>
            </div>
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                className="joinin-button"
                onClick={handleOnClick2}
                type="button"
                style={{ marginLeft: "50px" }}
              ><img src={shop} alt="buyer" style={{ padding: "10px 10px 10px 10px" }} />
              </button>
              <h3 style={{ marginLeft: "50px", fontWeight: "bold" }}>Shop</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoleSeclectPage;