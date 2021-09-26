/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SignInAvator from "../../assets/img/User.svg"
import { useForm, Controller } from 'react-hook-form'
import './RegisterForm.scss';
import { registerBuyerRequest, registerSellerRequest } from "../../store/actions/actionCreator"
import Load from '../../workflow/saga_tutorial/Load';

function RegisterForm(props) {
  const user = sessionStorage.getItem('register')
  const { control, handleSubmit, register } = useForm()
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    const { password, reenterpwd } = data;
    if (password != reenterpwd) {
      alert("Password does not match! ")
    }
    if (user === 'buyer') {
      dispatch(registerBuyerRequest(data));
    } else {
      dispatch(registerSellerRequest(data));
    }
  };

  const buyerRegister = useSelector((state) => state.buyerRegister)

  return (
    <div>
      <div className="log-in" style={{ marginTop: "30px" }}>
        <form className="log-in-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="log-in-title">
            <img src={SignInAvator} style={{ width: "35px" }} />
            <h1 className="title">{`Create account as a ${user}`}</h1>
          </div>
          <div>
            <label className="label">Username:</label>
            <input className="text" type="text" {...register("username")} placeholder="Enter your username" name="username" required />
          </div>
          <div>
            <label className="label">Email Address:</label>
            <input className="text" type="email" {...register("email")} placeholder="Enter your email" name="email" required />
          </div>
          <div>
            <label className="label">Password: </label>
            <input type="password" placeholder="Enter your password" {...register("password")} className="text" name="password" required />
          </div>
          <div>
            <label className="label">Re-enter password: </label>
            <input type="password" placeholder="Re-enter your password" {...register("reenterpwd")} className="text" name="reenterpwd" required />
          </div>
          <button onSubmit={handleSubmit(onSubmit)} className="btn--register" style={{ margin: "0 auto", marginTop: "30px", marginBottom: "10px" }}>SIGN IN</button>
          <span>Already a B market one member?<a href="/signin" className="create-account"> Sign in </a></span>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;