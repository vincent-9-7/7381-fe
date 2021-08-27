import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import url from "../../api/api";
import header from '../../api/header';


function* userDetail(action) {
  try {
    const { _id,type } = action.payload;
    const getUserApi = `${url}/${type}/${_id}`;

    const data = yield call(axios.get, getUserApi, header());
    // console.log(data.data);

    yield put({ type: 'GET_USER_SUCCESS', user: data.data});
    // localStorage.setItem('Items', JSON.stringify(action.payload));

  } catch (e) {
    console.log(e);
    yield put({ type: 'GET_USER_FAILED', payload: e });
  }
}


function* UserSaga() {
  yield takeEvery('GET_USER_REQUEST', userDetail); 

}

export default UserSaga;

