import React from 'react';
import { useCookies } from 'react-cookie';
import { useHistory, Link } from 'react-router-dom';
import Seller from "../../assets/img/Seller.png";
import UserAvator from "../../assets/img/UserAvator.svg";
import ShopAvator from "../../assets/img/ShopAvator.svg";
import { ExpireOneHour } from '../ExpiresTime/ExpiresTime';
import PageTitle from '../PageTitle/PageTitle';
import './JoinIn.scss';

function JoinIn() {
  const [cookies, setCookie] = useCookies(['joinin-cookie-name']);
  const currentTime = new Date();
  const history = useHistory();

  const handleOnClick = () => {
    // localStorage.setItem('register', "seller");
    sessionStorage.setItem('register', "seller");
    setCookie('register', "seller", { path: '/', expires: ExpireOneHour() });
    // document.location.href = "/register";
    history.push('/register');
    // console.log(cookies.register);
  };

  const handleOnClick2 = () => {
    // localStorage.setItem('register', "buyer");
    sessionStorage.setItem('register', "buyer");
    setCookie('register', "buyer", { path: '/', expires: ExpireOneHour() });
    // document.location.href = "/register";
    history.push('/register');
    // console.log(cookies.register);
  };


  return (
    <div>
      <PageTitle text="Join in as a Seller or Buyer? " />
      <div className="role-selection">

        <div className="avators">
          <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
            <button
              onClick={handleOnClick}
              type="button"
              style={{ marginRight: "50px" }}>
              <img src={UserAvator} alt="seller" />
            </button>
            {/* <h3 style={{ marginRight: "50px" }}>Join as a Seller</h3> */}
          </div>

          <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
            <button
              onClick={handleOnClick2}
              type="button" style={{ marginLeft: "50px" }}
            ><img src={ShopAvator} alt="buyer" />
            </button>
            {/* <h3 style={{ marginLeft: "50px" }}>Join as a Buyer</h3> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinIn;