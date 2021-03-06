import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import '../RegisterPage/RegisterPage.scss';
import user from "../../assets/img/userImage.png";
import shop from "../../assets/img/shopImage.png";
import PageTitle from '../../components/PageTitle/PageTitle';

function RoleSeclectPage() {
  const history = useHistory();
  const handleOnClick = () => {
    sessionStorage.setItem('signin', "seller");
    // document.location.href = "/signin";
    history.push('/signin');
  };
  const handleOnClick2 = () => {
    sessionStorage.setItem('signin', "buyer");
    // document.location.href = "/signin";
    history.push('/signin');
  };

  return (
    <>
      <Header />
      <div className="container" style={{ marginTop: "5.5rem" }}>
        <PageTitle text="Sign for user or shop" background="no-bg" />
        <div className="role-selection">
          {/* <PageTitle text="Sign in as a Seller or Buyer? " /> */}
          {/* <h1>Sign in as a Seller or Buyer? </h1> */}
          <div className="avators">
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                className="joinin-button"
                onClick={handleOnClick}
                type="button"
                style={{ marginRight: "50px", }}
              >
                <img src={user} alt="seller"
                  style={{ padding: "30px 30px 0px 70px" }} />
                <h1 style={{ marginRight: "30px", fontWeight: "bold", marginBottom: "20px" }}>User</h1>
              </button>

            </div>
            <div style={{ display: "flex", textAlign: "center", flexDirection: "column" }}>
              <button
                className="joinin-button"
                onClick={handleOnClick2}
                type="button"
                style={{ marginLeft: "50px" }}
              ><img src={shop} alt="buyer" style={{ padding: "30px 50px 0px 50px" }} />
                <h1 style={{ fontWeight: "bold", marginBottom: "20px" }}>Shop</h1>
              </button>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default RoleSeclectPage;