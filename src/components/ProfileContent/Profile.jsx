import React from 'react';
import Tabs, { TabPane } from 'rc-tabs';
import '../../../node_modules/rc-tabs/assets/index.css';
import './Profile.scss';
import profile from '../../assets/img/profile.svg';
import tomatoVerticality from '../../assets/img/tomato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/8016790/
import message from '../../assets/img/message.svg';

function ProfileContent() {
  function callback(e) {
    // console.log(e);
  }

  return (
    <div className="container">
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: '30px' }}>
        <button className="btn--post" onClick={() => (document.location.href = '/post')} type="button">
          Post Ad{' '}
        </button>
      </div>

      <Tabs tabPosition="left" tabBarGutter={0} defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Profile setting" key="1">
          <h2>My Profile</h2>
          <div className="profile__box">
            <div className="profile__box--left-image">
              <img src={profile} alt="card" className="customer__card--image" />
              <p>Shop Photo</p>
            </div>

            <div style={{ paddingTop: '10px', marginLeft: '100px' }}>
              <h4 style={{ marginLeft: '15px' }}>Username</h4>
              <div className="checkout-form__content ">
                <input type="text" name="Username" className="checkout-form__input" />
              </div>
              <h4 style={{ marginLeft: '15px' }}>Phone Number</h4>
              <div className="checkout-form__content ">
                <input type="text" name="Phone" className="checkout-form__input" />
              </div>
              <h4 style={{ marginLeft: '15px' }}>Address</h4>
              <div className="checkout-form__content ">
                <input type="text" name="Address" className="checkout-form__input" />
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '40px' }}>
            <button className="btn--save" type="button">
              Save
            </button>
          </div>

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

            <button id="password_profile_save-button" className="btn--save" type="button">
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

            <button id="email-button" className="btn--save" type="button">
              Save
            </button>
          </div>
        </TabPane>

        <TabPane tab="My shop" key="2">
          <h2>My Shop</h2>
          <div className="profile__box-shop">
            <div className="profile__box--shop-select">
              <input type="checkbox" className="check" /> Select all items | Delete all{' '}
            </div>

            <div className="profile__box--shop">
              <div className="shop_header">
                <input type="checkbox" className="shop_header_checkheader" />
                <div className="shop_header_detail"> Last posted Sep 4,2021 | Order:3 | Seller:Juliana</div>
              </div>

              <div className="profile__details">
                <div className="cart__details--left">
                  <img
                    src={tomatoVerticality}
                    alt="card"
                    style={{ marginLeft: '15px' }}
                    className="checkout-form__review--image"
                  />
                  <div className="cart__details--text">
                    <h4 style={{ padding: '0', margin: '0 0 0 0' }}>Canvendish Bananas 2KG</h4>
                    <p style={{ color: 'gray', fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>
                      B-grade Vegetables
                    </p>
                    <p style={{ fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>Brisbane</p>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '90px' }}>&#36;46.32</h3>
                  </div>
                </div>

                <div className="cart__details--right">
                  <div style={{ display: 'flex' }}>
                    <h4 style={{ padding: '10px 0', margin: '0 0 0 0' }}>Qty </h4>
                    <input
                      style={{
                        width: '40px',
                        padding: '10px',
                        borderRadius: '5px',
                        marginLeft: '10px',
                        marginRight: '15px',
                      }}
                      defaultValue="21"
                    />
                  </div>
                  <p
                    style={{
                      color: 'gray',
                      fontSize: '1em',
                      fontWeight: '400',
                      padding: '0',
                      margin: '130px 15px 0 0',
                    }}
                  >
                    Edit | Delete
                  </p>
                </div>
              </div>
            </div>

            <div className="profile__box--shop">
              <div className="shop_header">
                <input type="checkbox" className="shop_header_checkheader" />
                <div className="shop_header_detail"> Last posted Sep 4,2021 | Order:3 | Seller:Juliana</div>
              </div>

              <div className="profile__details">
                <div className="cart__details--left">
                  <img
                    src={tomatoVerticality}
                    alt="card"
                    style={{ marginLeft: '15px' }}
                    className="checkout-form__review--image"
                  />
                  <div className="cart__details--text">
                    <h4 style={{ padding: '0', margin: '0 0 0 0' }}>Canvendish Bananas 2KG</h4>
                    <p style={{ color: 'gray', fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>
                      B-grade Vegetables
                    </p>
                    <p style={{ fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>Brisbane</p>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '90px' }}>&#36;46.32</h3>
                  </div>
                </div>

                <div className="cart__details--right">
                  <div style={{ display: 'flex' }}>
                    <h4 style={{ padding: '10px 0', margin: '0 0 0 0' }}>Qty </h4>
                    <input
                      style={{
                        width: '40px',
                        padding: '10px',
                        borderRadius: '5px',
                        marginLeft: '10px',
                        marginRight: '15px',
                      }}
                      defaultValue="21"
                    />
                  </div>
                  <p
                    style={{
                      color: 'gray',
                      fontSize: '1em',
                      fontWeight: '400',
                      padding: '0',
                      margin: '130px 15px 0 0',
                    }}
                  >
                    Edit | Delete
                  </p>
                </div>
              </div>
            </div>

            <div className="profile__box--shop">
              <div className="shop_header">
                <input type="checkbox" className="shop_header_checkheader" />
                <div className="shop_header_detail"> Last posted Sep 4,2021 | Order:3 | Seller:Juliana</div>
              </div>

              <div className="profile__details">
                <div className="cart__details--left">
                  <img
                    src={tomatoVerticality}
                    alt="card"
                    style={{ marginLeft: '15px' }}
                    className="checkout-form__review--image"
                  />
                  <div className="cart__details--text">
                    <h4 style={{ padding: '0', margin: '0 0 0 0' }}>Canvendish Bananas 2KG</h4>
                    <p style={{ color: 'gray', fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>
                      B-grade Vegetables
                    </p>
                    <p style={{ fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>Brisbane</p>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginTop: '90px' }}>&#36;46.32</h3>
                  </div>
                </div>

                <div className="cart__details--right">
                  <div style={{ display: 'flex' }}>
                    <h4 style={{ padding: '10px 0', margin: '0 0 0 0' }}>Qty </h4>
                    <input
                      style={{
                        width: '40px',
                        padding: '10px',
                        borderRadius: '5px',
                        marginLeft: '10px',
                        marginRight: '15px',
                      }}
                      defaultValue="12"
                    />
                  </div>
                  <p
                    style={{
                      color: 'gray',
                      fontSize: '1em',
                      fontWeight: '400',
                      padding: '0',
                      margin: '130px 15px 0 0',
                    }}
                  >
                    Edit | Delete
                  </p>
                </div>
              </div>
            </div>
          </div>
        </TabPane>

        <TabPane tab="Messages" key="3">
          <h2>Messages</h2>
          <div className="profile__box-message">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <p style={{ color: 'gray', fontSize: '1.2rem', padding: '20px 0', margin: '0' }}>0 unread messages</p>
            </div>
            <div className="profile__box-message-details">
              <img src={message} alt="card" style={{ width: '80px', height: '80px', marginLeft: '20px' }} />
              <div style={{ marginLeft: '30px', width: '90vh' }}>
                <div className="profile__box-message-details-text">
                  <p>Sophie</p>
                  <p>Online 1month ago</p>
                </div>
                <p>Hello, there are some cucumber in your I love to contact with …</p>
              </div>
            </div>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}

export default ProfileContent;
