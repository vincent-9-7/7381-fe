import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import url from "../../../api/api";
import header from '../../../api/header';
import * as actions from '../../actions/cart/products';
import { api } from './api';

export function* getAllProducts() {
  // const getItemsApi = `${url}/items`;
  const getFruitsApi = `${url}/allFruits`;
  const fruitData = yield call(axios.get, getFruitsApi,header());
  // console.log(fruitData.data);

  const getVegetablesApi = `${url}/allVegetables`;
  const VegetableData = yield call(axios.get, getVegetablesApi,header());
  // console.log(VegetableData.data);

  const totalData = fruitData.data.concat(VegetableData.data);
  // console.log(totalData); // Bgrade+production全部产品
  
  for (let i = 0; i < totalData.length; i += 1) {
    if (totalData[i].quantity === 0) {
      totalData.splice(i, 1); // 从i索引的位置，删除一个元素
      i -= 1;
    }
  }
  console.log(totalData); // Bgrade+production不包括0数量的全部产品

  // const products = yield call(api.getProducts);
  // console.log(products);
  yield put(actions.receiveProducts(totalData));
}

export function* watchGetProducts() {
  /*
    takeEvery will fork a new `getProducts` task on each GET_PRODUCTS action
    i.e. concurrent GET_PRODUCTS actions are allowed
  */
  yield takeEvery(actions.GET_PRODUCTS, getAllProducts);
}
