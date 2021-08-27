import {all} from 'redux-saga/effects';
import Items from './item';
import UserSaga from './user';
// import UserListSaga from './userListSaga'
// import EmployeesListSaga from './employeesListSaga'


export default function* rootSaga() {
  yield all([
    Items(),
    UserSaga(),

  ]);
}