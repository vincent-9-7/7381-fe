import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import url from "../../../api/api";
import header from '../../../api/header';
import * as actions from '../../actions/cart/products';
import { api } from './api';

export function* getAllProducts() {
  const getItemsApi = `${url}/items`;
  const data = yield call(axios.get, getItemsApi,header());
  // console.log(data.data);
  // const products = yield call(api.getProducts);
  // console.log(products);
  yield put(actions.receiveProducts(data.data));
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getProducts` task on each GET_PRODUCTS action
    i.e. concurrent GET_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_PRODUCTS, getAllProducts);
}
