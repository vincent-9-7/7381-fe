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



// export const getOrderRequest = (datalist) => ({
//   type: actionTypes.GET_ORDER_REQUEST,
//   payload: datalist,
// });
// export const getOrderSuccess = (datalist) => ({
//   type: actionTypes.GET_ORDER_SUCCESS,
//   payload: datalist,
// });
// export const getOrderFaild = (err) => ({
//   type: actionTypes.GET_ORDER_FAILED,
//   payload: err,
// });