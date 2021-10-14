import React, { Component } from 'react';
import './CheckoutForm.scss';
// import FakeImage from '../FakeImage/FakeImage';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onTrigger = (event) => {
    // class子传父 - 6/6
    const { parentCallback } = this.props;
    const list = {
      price: 0,
      username: '',
      orderList: [],
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      country: '',
      city: '',
      state: '',
      postcode: '',
      phone: '',
      payment: false,
      // sellerDetail: '',
      // buyerDetail: '',
    };
    const formEl = document.forms.checkoutForm;
    const formData = new FormData(formEl);
    const firstName = formData.get('firstname');
    const lastName = formData.get('lastname');
    const phone = formData.get('phone');
    const address1 = formData.get('address1');
    const address2 = formData.get('address2');
    const country = formData.get('country');
    const city = formData.get('city');
    const state = formData.get('state');
    const postcode = formData.get('postcode');

    list.firstName = firstName;
    list.lastName = lastName;
    list.phone = phone;
    list.address1 = address1;
    list.address2 = address2;
    list.country = country;
    list.city = city;
    list.state = state;
    list.postcode = postcode;

    parentCallback(list);
    event.preventDefault();
  };

  render() {
    const checkoutItems = JSON.parse(window.sessionStorage.getItem('checkout_products'));
    // console.log(checkoutItems);

    return (
      <>
        <div className="checkout-form">
          <form id="checkoutForm" onChange={this.onTrigger}>
            <h2 className="checkout-form__title">Delivery details</h2>
            <div className="checkout-form__border">
              <h4>First Name (Required) *</h4>
              <div className="checkout-form__content ">
                <input type="text" placeholder="First Name" name="firstname" className="checkout-form__input" />
              </div>

              <h4>Last Name (Required) *</h4>
              <div className="checkout-form__content ">
                <input type="text" placeholder="Last Name" name="lastname" className="checkout-form__input" />
              </div>

              <h4>Mobile Phone Number (Required) *</h4>
              <div className="checkout-form__content ">
                <input type="text" placeholder="Phone Number" name="phone" className="checkout-form__input" />
              </div>

              <h4>Delivery Address (Required) *</h4>
              <div className="checkout-form__content ">
                <input type="text" placeholder="Address 1" name="address1" className="checkout-form__input" />
              </div>
              <div className="checkout-form__content ">
                <input type="text" placeholder="Address 2" name="address2" className="checkout-form__input" />
              </div>
              <div className="checkout-form__content ">
                <input type="text" placeholder="Country" name="country" className="checkout-form__input" />
                <input type="text" placeholder="City" name="city" className="checkout-form__input" />
              </div>
              <div className="checkout-form__content ">
                <input type="text" placeholder="State" name="state" className="checkout-form__input" />
                <input type="text" placeholder="Postcode" name="postcode" className="checkout-form__input" />
              </div>
            </div>

            <h2 className="checkout-form__title">Review item and postage</h2>
            <div className="checkout-form__border">
              {checkoutItems.map((item) => (
                <div key={item._id} className="checkout-form__review">
                  <div className="checkout-form__review--left container">
                    <div className="checkout-form__review--firstline">
                      <p style={{ fontSize: '0.8rem' }}>Seller: {item.recipient}</p>
                      <a href="#message" style={{ color: 'blue', marginLeft: '15px' }}>
                        <p style={{ color: 'blue', fontSize: '0.8rem' }}>Message to seller</p>
                      </a>
                    </div>
                    {/* <FakeImage imageTitle={item.title} page="checkout" /> */}
                    <img src={item.imageAddress[0]} alt="cart" className="checkout-form__review--image"  />
                  </div>

                  <div className="checkout-form__review--right container">
                    <h4>{item.title} {item.size}kg</h4>
                    <p>Condition: {item.condition}, {item.category} </p>
                    <p>Location: South Brisbane </p>
                    <div style={{display:'flex',flexDirection:'row'}}>
                      <p>Quantity: </p>
                      <h3 style={{color:'#95AB14', fontWeight:'bold'}}>&nbsp;{item.shoppingcartQuantity} </h3>
                    </div>
                    <p>Price: ${item.price}</p>
                    <p>Postage: Standard parcel Delivery (Free)</p>
                  </div>
                </div>
              ))}
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CheckoutForm;
