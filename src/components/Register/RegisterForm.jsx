/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInUserAvator from "../../assets/img/User.svg"
import SignInShopAvator from "../../assets/img/shop.jpg"
import { useForm, Controller } from 'react-hook-form'
import { useCookies } from 'react-cookie'
import './RegisterForm.scss';
import { registerBuyerRequest, registerSellerRequest } from "../../store/actions/actionCreator"
import Load from '../../workflow/saga_tutorial/Load';

function RegisterForm(props) {
  const [cookies] = useCookies(['joinin-cookie-name'])
  // const user = cookies.register

  const user = sessionStorage.getItem('register')
  // console.log(user);
  const { control, handleSubmit, register } = useForm()
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const { password, reenterpwd } = data;
    // console.log(data);
    if (password != reenterpwd) {
      alert("Password does not match! ")
    } else {
      if (user === 'buyer') {
        dispatch(registerBuyerRequest(data));
      } else if (user === 'seller') {
        dispatch(registerSellerRequest(data));
      } else {
        alert("You dont have a role yet. Please go back to select your role. ")
      }
    }
  };

  const buyerRegister = useSelector((state) => state.buyerRegister)

  return (
    <div>
      <div className="log-in" style={{ marginTop: "30px" }}>
        <form className="log-in-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="log-in-title">
            {(user === 'seller') && (<img src={SignInUserAvator} style={{ width: "35px", marginTop: "3.5rem" }} />)}
            {(user === 'buyer') && <img src={SignInShopAvator} style={{ width: "35px", marginTop: "3.5rem" }} />}


            {(user === 'buyer') && (<div style={{ fontSize: "2rem", fontWeight: 400, padding: "0.67rem 0rem" }}>Create account as Shop</div>)}
            {(user === 'seller') && <div style={{ fontSize: "2rem", fontWeight: 400, padding: "0.67rem 0rem" }}>{`Create account`}</div>}
            {/* <h1 className="title">{`Create account as Shop`}</h1> */}
          </div>
          {/**Big parts */}
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/**Left */}
            <div>
              {/**Username */}
              <div>
                <label className="label">Username: </label>
                <input className="register-text" type="text" {...register("username")} name="username" required />
              </div>
              {/**Email Address  */}
              <div>
                <label className="label">Email: </label>
                <input className="register-text" type="email" {...register("email")} name="email" required />
              </div>
              {/**Address1  */}
              <div>
                <label className="label">Address1: </label>
                <input type="text" {...register("address1")} className="register-text" name="address1" required />
              </div>
              {/**Thress parts  */}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {/**City  */}
                <div>
                  <label className="small-label">City: </label>
                  <input type="text" {...register("city")} className="register-text-location" name="city" style={{ textTransform: 'capitalize' }} />
                </div>
                {/**State  */}
                <div>
                  <label className="small-label">State: </label>
                  <input type="text" {...register("state")} className="register-text-location" name="state" style={{ textTransform: 'capitalize' }} />
                </div>
                {/**Postode  */}
                <div>
                  <label className="small-label">Postode: </label>
                  <input type="number" {...register("postcode")} className="register-text-location" name="postcode" />
                </div>
              </div>
              {/**ABN  */}
              {(user === 'buyer') && (<div>
                <label className="label-abn">ABN: </label>
                <input type="number" {...register("abn")} className="register-text" name="abn" required />
              </div>)}

            </div>

            {/**Divider */}
            <div className="divider" style={{ width: '2em' }}></div>

            {/**Right */}
            <div>
              {/**Password  */}
              <div>
                <label className="label">Password: </label>
                <input type="password"  {...register("password")} className="register-text" name="password" required />
              </div>
              {/**Re-enter password  */}
              <div>
                <label className="label">Re-enter password: </label>
                <input type="password"  {...register("reenterpwd")} className="register-text" name="reenterpwd" required />
              </div>
              {/**Address2  */}
              <div>
                <label className="label">Address2: </label>
                <input type="text" {...register("address2")} className="register-text" name="address2" />
              </div>
              {/**Shop  */}
              {(user === 'buyer') && (
                <div>
                  <label className="label">Shop: </label>
                  <select className="register-text" {...register("shop")} name="shop">
                    <option className="register-text">B-grade Products</option>
                    <option className="register-text">Manufactural Products</option>
                  </select>
                </div>)}

            </div>
          </div>



          <button onSubmit={handleSubmit(onSubmit)} className="btn--joinin" style={{ margin: "0 auto", marginTop: "30px", marginBottom: "10px" }}>JOIN IN</button>
          <span>Already a B market one member?&nbsp; &nbsp; <a href="/signin" className="create-account">Sign in </a></span>
        </form>
      </div >
    </div >
  );
}

export default RegisterForm;