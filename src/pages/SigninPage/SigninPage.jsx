/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller, get } from 'react-hook-form'
import { useCookies } from 'react-cookie';
import "./SigninPage.scss"
import SignInAvator from "../../assets/img/User.svg"
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import { signinBuyerRequest, signinSellerRequest, signSellerFailed } from '../../store/actions';



function Signin(props) {
  const { data } = props;
  const user = sessionStorage.getItem('signin')
  const { control, handleSubmit, register } = useForm()
  const dispatch = useDispatch();
  console.log(user);


  const onSubmit = (data) => {

    if (user === 'buyer') {
      // console.log(data);
      dispatch(signinBuyerRequest(data));
      // sessionStorage.setItem('signed', 'yes')
    } else if (user === 'seller') {
      dispatch(signinSellerRequest(data));
      // sessionStorage.setItem('signed', 'yes')
    } else {
      alert("Your message is not correct, please check your email or password! ")
    }
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="log-in" style={{ marginTop: "30px" }}>
          <form className="log-in-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="log-in-title">
              <img src={SignInAvator} style={{ width: "35px" }} />
              <h1 className="title">{`Sign in`}</h1>
            </div>
            <div>
              <label htmlFor="email" className="label">EMAIL ADDRESS:</label>
              <input className="text" type="email" {...register("email")} placeholder="Enter your email" name="email" required />
            </div>
            <div>
              <label className="label">PASSWORD: </label>
              <input type="password" {...register("password")} placeholder="Enter your password" className="text" name="password" required />
            </div>
            <span className="span"><input type="checkbox" />Remember me <a href="/sign-in" className="forgot-password"> Forgot Password? </a></span>
            <button onSubmit={handleSubmit(onSubmit)} type="submit" className="btn--register" style={{ margin: "0 auto", marginTop: "30px", marginBottom: "10px" }}>SIGN IN</button>
            <span>Don`t have an account?<a href="/join-in" className="create-account"> Create Account </a></span>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}


export default Signin;