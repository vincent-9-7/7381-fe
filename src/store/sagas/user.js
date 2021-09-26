import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import url from "../../api/api";
import header from '../../api/header';


function* userDetail(action) {
  try {
    const { _id, type } = action.payload;
    const getUserApi = `${url}/${type}/${_id}`;

    const data = yield call(axios.get, getUserApi, header());
    // console.log(data.data);

    yield put({ type: 'GET_USER_SUCCESS', user: data.data });
    // localStorage.setItem('Items', JSON.stringify(action.payload));

  } catch (e) {
    console.log(e);
    yield put({ type: 'GET_USER_FAILED', payload: e });
  }
}

function* buyerRegister(action) {
  try {
    const user = sessionStorage.getItem('register');
    const buyerInfo = yield call(axios.post, `${url}/${user}/registration`, action.payload, header());
    // items对应的是 reducer/user.js里的第35行的items
    console.log(buyerInfo);
    console.log(buyerInfo.data);
    console.log(user);
    yield put({ type: 'BUYER_REGISTER_SUCCESS', payload: buyerInfo.data });
    // localStorage.setItem('buyerinfo', JSON.stringify(buyerInfo));
    document.location.href = './';
  } catch (e) {
    console.log(e);
    yield put({ type: 'BUYER_REGISTER_FAILED', payload: e });
  }
}

function* sellerRegister(action) {
  try {
    const user = sessionStorage.getItem('register');
    const sellerInfo = yield call(axios.post, `${url}/${user}/registration`, action.payload, header());
    console.log(sellerInfo);
    console.log(sellerInfo.data);
    yield put({ type: 'SELLER_REGISTER_SUCCESS', payload: sellerInfo.data });
    // localStorage.setItem('sellerinfo', JSON.stringify(sellerInfo));
    document.location.href = './';
  } catch (e) {
    yield put({ type: 'SELLER_REGISTER_FAILED', payload: e });
  }
}

function* buyerSignin(action) {
  try {
    const user = sessionStorage.getItem('signin');
    const buyerInfo = yield call(axios.post, `${url}/${user}/login`, action.payload, header());
    console.log(buyerInfo);
    console.log(buyerInfo.data);
    console.log(user);
    yield put({ type: 'BUYER_SIGNIN_SUCCESS', payload: buyerInfo.data });
    sessionStorage.setItem('buyerinfo', JSON.stringify(buyerInfo));
    document.location.href = './';
  } catch (e) {
    yield put({ type: 'BUYER_SIGNIN_FAILED', payload: e });
  }
}

function* sellerSignin(action) {
  try {
    const user = sessionStorage.getItem('signin');
    const sellerInfo = yield call(axios.post, `${url}/${user}/login`, action.payload, header());
    console.log(sellerInfo);
    console.log(sellerInfo.data);
    console.log(user);
    yield put({ type: 'SELLER_SIGNIN_SUCCESS', payload: sellerInfo.data });
    sessionStorage.setItem('sellerinfo', JSON.stringify(sellerInfo));
    document.location.href = './';
  } catch (e) {
    yield put({ type: 'SELLER_SIGNIN_FAILED', payload: e });
  }
}

function* UserSaga() {
  yield takeEvery('GET_USER_REQUEST', userDetail);
  yield takeEvery('BUYER_REGISTER_REQUEST', buyerRegister);
  yield takeEvery('SELLER_REGISTER_REQUEST', sellerRegister);
  yield takeEvery('BUYER_SIGNIN_REQUEST', buyerSignin);
  yield takeEvery('SELLER_SIGNIN_REQUEST', sellerSignin);

}

export default UserSaga;

