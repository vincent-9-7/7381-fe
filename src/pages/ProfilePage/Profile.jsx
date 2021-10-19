import React from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import './Profile.scss';
// eslint-disable-next-line import/no-cycle
import Profile from '../../components/ProfileContent/Profile';
// import Footer from '../../components/PageFooter/PageFooter';
// const { Component } = React;

function ProfilePage() {
  const div1 = {
    width: '300px',
    margin: '30px auto',
    backgroundColor: '#44014C',
    minHeight: '200px',
    boxSizing: 'border-box',
  };

  return (
    <div>
      <Header />
      <div style={{ minHeight: '90vh' }}>
        {/* eslint-disable-next-line react/button-has-type */}
        {/* <button className="jump">Post Ad </button> */}
        <Profile />

        <div id="passwordTitle">Change password</div>
        <div className="password" id="nothing">
          <p className="password_inputName">Email Address</p>
          <input className="password_inputFeature" />
          <p className="password_inputName">Change password</p>
          <input className="password_inputFeature" />
          <p className="password_inputName">New password</p>
          <input className="password_inputFeature" />
          <p className="password_inputName">Re-enter your new password</p>
          <input className="password_inputFeature" />

          <button id="password_profile_save-button" type="button">
            Save
          </button>
        </div>

        <div id="emailTitle">Change Email Address</div>
        <div className="email" id="nothing2">
          <p className="email_inputName">Email Address</p>
          <input className="email_inputFeature" />
          <p className="email_inputName">Change password</p>
          <input className="email_inputFeature" />
          <p className="email_inputName">New password</p>
          <input className="email_inputFeature" />

          <button id="email-button" type="button">
            Save
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProfilePage;
