/* eslint-disable import/prefer-default-export */
import actionTypes from "./actionTypes";

export const getItemsRequest = (req) => ({
  type: actionTypes.GET_ITEMS_REQUEST,
  payload: req,
});
export const getItemsSuccess = (dataList) => ({
  type: actionTypes.GET_ITEMS_SUCCESS,
  payload: dataList,
});
export const getItemsFailed = (err) => ({
  type: actionTypes.GET_ITEMS_FAILED,
  payload: err,
});

export const getUserRequest = (req) => ({
  type: actionTypes.GET_USER_REQUEST,
  payload: req,
});
export const getUserSuccess = (dataList) => ({
  type: actionTypes.GET_USER_SUCCESS,
  payload: dataList,
});
export const getUserFailed = (err) => ({
  type: actionTypes.GET_USER_FAILED,
  payload: err,
});

// Buyer register
export const registerBuyerRequest = (req) => ({
  type: actionTypes.BUYER_REGISTER_REQUEST,
  payload: req,
});
export const registerBuyerSuccess = (dataList) => ({
  type: actionTypes.BUYER_REGISTER_SUCCESS,
  payload: dataList,
});
export const registerBuyerFailed = (err) => ({
  type: actionTypes.BUYER_REGISTER_FAILED,
  payload: err,
});

// Seller register
export const registerSellerRequest = (req) => ({
  type: actionTypes.SELLER_REGISTER_REQUEST,
  payload: req,
});
export const registerSellerSuccess = (dataList) => ({
  type: actionTypes.SELLER_REGISTER_SUCCESS,
  payload: dataList,
});
export const registerSellerFailed = (err) => ({
  type: actionTypes.SELLER_REGISTER_FAILED,
  payload: err,
});

// Buyer signin
export const signinBuyerRequest = (req) => ({
  type: actionTypes.BUYER_SIGNIN_REQUEST,
  payload: req,
});
export const signinBuyerSuccess = (dataList) => ({
  type: actionTypes.BUYER_SIGNIN_SUCCESS,
  payload: dataList,
});
export const signBuyerFailed = (err) => ({
  type: actionTypes.BUYER_SIGNIN_FAILED,
  payload: err,
});

// Seller signin
export const signinSellerRequest = (req) => ({
  type: actionTypes.SELLER_SIGNIN_REQUEST,
  payload: req,
});
export const signinSellerSuccess = (dataList) => ({
  type: actionTypes.SELLER_SIGNIN_SUCCESS,
  payload: dataList,
});
export const signSellerFailed = (err) => ({
  type: actionTypes.SELLER_SIGNIN_FAILED,
  payload: err,
});


export const postItemsRequest = (req) => ({
  type: actionTypes.POST_ITEMS_REQUEST,
  payload: req,
});
export const postItemsSuccess = (dataList) => ({
  type: actionTypes.POST_ITEMS_SUCCESS,
  payload: dataList,
});
export const postItemsFailed = (err) => ({
  type: actionTypes.POST_ITEMS_FAILED,
  payload: err,
});

// CHECKOUT AND POST order to database
export const checkoutOrderRequest = (req) => ({
  type: actionTypes.PAY_ORDER_REQUEST,
  payload: req,
});
export const checkoutOrderSuccess = (obj) => ({
  type: actionTypes.PAY_ORDER_SUCCESS,
  payload: obj,
});
export const postOrderRequest = (obj) => ({
  type: actionTypes.POST_ORDER_REQUEST,
  payload: obj, 
});
export const postOrderSuccess = (obj) => ({
  type: actionTypes.POST_ORDER_SUCCESS,
  payload: obj,
});
export function postOrderFaild(err) {
  return {
    type: actionTypes.POST_ORDER_FAILED,
    payload: err,
  };
}