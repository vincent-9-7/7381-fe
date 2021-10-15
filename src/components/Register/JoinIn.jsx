import React from 'react';
import { useHistory } from 'react-router-dom';
// import { ExpireOneHour } from '../ExpiresTime/ExpiresTime';
import PageTitle from '../PageTitle/PageTitle';

import user from "../../assets/img/userImage.png";
import shop from "../../assets/img/shopImage.png";
import './JoinIn.scss';

function JoinIn() {
  const history = useHistory();

  const handleOnClick = () => {
    // localStorage.setItem('register', "seller");
    sessionStorage.setItem('register', "seller");
    // setCookie('register', "seller", { path: '/', expires: ExpireOneHour() });
    // document.location.href = "/register";
    history.push('/register');
    // console.log(cookies.register);
  };

  const handleOnClick2 = () => {
    // localStorage.setItem('register', "buyer");
    sessionStorage.setItem('register', "buyer");
    // setCookie('register', "buyer", { path: '/', expires: ExpireOneHour() });
    // document.location.href = "/register";
    history.push('/register');
    // console.log(cookies.register);
  };


  return (
    <div>
      <PageTitle text="Join for user or shop" background="white-bg" />
      <div className="role-selection">
        <div className="avators">
          <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
            <button
              className="joinin-button"
              onClick={handleOnClick}
              type="button"
              style={{ marginRight: "50px" }}>
              <img src={user} alt="seller" style={{ padding: "10px 10px 10px 10px" }} />
            </button>
            {/** Seller */}
            <h3 style={{ marginRight: "50px", fontWeight: "bold" }}>User</h3>
          </div>

          <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
            <button
              className="joinin-button"
              onClick={handleOnClick2}
              type="button" style={{ marginLeft: "50px" }}
            ><img src={shop} alt="buyer" style={{ padding: "10px 10px 10px 10px" }} />
            </button>
            <h3 style={{ marginLeft: "50px", fontWeight: "bold" }}>Shop</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinIn;