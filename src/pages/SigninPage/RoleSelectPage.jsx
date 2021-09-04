import React from 'react';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import '../RegisterPage/RegisterPage.scss';
import Seller from "../../assets/img/Seller.png";

function RoleSeclectPage() {
  const handleOnClick = () => {
    // localStorage.setItem('register', "seller");
    sessionStorage.setItem('signin', "seller");
    document.location.href = "/signin";
  };
  const handleOnClick2 = () => {
    // localStorage.setItem('register', "buyer");
    sessionStorage.setItem('signin', "buyer");
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
                style={{ marginRight: "50px" }}>
                <img src={Seller} alt="seller" />
              </button>
              <h3>Join as a Seller</h3>
            </div>

            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                onClick={handleOnClick2}
                type="button" style={{ marginLeft: "50px" }}
              ><img src={Seller} alt="buyer" />
              </button>
              <h3>Join as a Buyer</h3>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoleSeclectPage;