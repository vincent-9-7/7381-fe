import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import url from '../../api/api';
import header from '../../api/header';

const postApi = `${url}/order`;

// function* getOrder(action) {
//   try {
//     const { _id, type } = action.payload
//     const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
//     const getApi = `${url}/${model}/${_id}`
//     const data = yield call(axios.get, getApi,header())
//     yield put({ type: 'GET_ORDER_SUCCESS', repos: data.data })
//   } catch (e) {
//     console.log(e)
//     yield put({ type: 'GET_ORDER_FAILED', payload: e })
//   }
// }

function* postOrder(action) {
  // let postApi = postRCApi
  // if (action.payload.type === "EC") {
  //   postApi = postECApi
  // }
  // console.log(action.payload);
  const result = yield call(axios.post, postApi, action.payload, header());
  const { data } = result;
  console.log(data);
  if (result.errors) {
    yield put({ type: 'POST_ORDER_FAILED', errorInSaga: result.errors });
  } else {
    yield put({ type: 'POST_ORDER_SUCCESS', returnMessage: data });
    // sessionStorage.setItem('orderHistory', JSON.stringify(action.payload));
  }
}

function* payOrder() {
  yield put({ type: 'PAY_ORDER_SUCCESS', postInSaga: 'success!!' });
}

function* OrderSaga() {
  // yield takeEvery('GET_ORDER_REQUEST', getOrder)
  yield takeEvery('POST_ORDER_REQUEST', postOrder);
  yield takeEvery('PAY_ORDER_REQUEST', payOrder);
}

export default OrderSaga;
