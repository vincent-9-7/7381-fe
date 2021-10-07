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

// Get one item
export const getItemRequest = (req) => ({
  type: actionTypes.GET_ITEM_REQUEST,
  payload: req,
});
export const getItemSuccess = (dataList) => ({
  type: actionTypes.GET_ITEM_SUCCESS,
  payload: dataList,
});
export const getItemFailed = (err) => ({
  type: actionTypes.GET_ITEM_FAILED,
  payload: err,
});

// Get all fruit
export const getAllFruitRequest = (req) => ({
  type: actionTypes.GET_ALLFRUIT_REQUEST,
  payload: req,
});
export const getAllFruitSuccess = (dataList) => ({
  type: actionTypes.GET_ALLFRUIT_SUCCESS,
  payload: dataList,
});
export const getAllFruitFailed = (err) => ({
  type: actionTypes.GET_ALLFRUIT_FAILED,
  payload: err,
});

// Get all vegetable
export const getAllVegetableRequest = (req) => ({
  type: actionTypes.GET_ALLVEGETABLE_REQUEST,
  payload: req,
});
export const getAllVegetableSuccess = (dataList) => ({
  type: actionTypes.GET_ALLVEGETABLE_SUCCESS,
  payload: dataList,
});
export const getAllVegetableFailed = (err) => ({
  type: actionTypes.GET_ALLVEGETABLE_FAILED,
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
