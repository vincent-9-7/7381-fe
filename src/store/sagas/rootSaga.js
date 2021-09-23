import {fork, all} from 'redux-saga/effects';
import Items from './item';
import UserSaga from './user';
import { getAllProducts, watchGetProducts } from './cart/products';
import { watchCheckout } from './cart/cart';
// import UserListSaga from './userListSaga'
// import EmployeesListSaga from './employeesListSaga'


export default function* rootSaga() {
  yield all([
    Items(),
    UserSaga(),
    fork(getAllProducts),
    fork(watchGetProducts),
    fork(watchCheckout)
  ]);
}