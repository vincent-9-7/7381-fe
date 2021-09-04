import React from 'react';
import Seller from "../../assets/img/Seller.png";
import './JoinIn.scss';

function JoinIn() {
  const handleOnClick = () => {
    // localStorage.setItem('register', "seller");
    sessionStorage.setItem('register', "seller");
    document.location.href = "/register";
  };

  const handleOnClick2 = () => {
    // localStorage.setItem('register', "buyer");
    sessionStorage.setItem('register', "buyer");
    document.location.href = "/register";
  };


  return (
    <div className="container">
      <div className="role-selection">
        <h1>Join for Seller or Buyer? </h1>
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
  );
}

export default JoinIn;