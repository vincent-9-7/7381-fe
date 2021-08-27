import { call, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import url from "../../api/api";
import header from '../../api/header';


function* getItems(action) {
  try {
    const getItemsApi = `${url}/items`;

    const data = yield call(axios.get, getItemsApi,header());
    // console.log(data.data);

    yield put({ type: 'GET_ITEMS_SUCCESS', items: data.data});
    // localStorage.setItem('Items', JSON.stringify(action.payload));
  } catch (e) {
    console.log(e);
    yield put({ type: 'GET_ITEMS_FAILED', payload: e });
  }
}


// function* updateOrder(action) {
//   const { id, update, type, cancelByAdmin } = action.payload
//   const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
//   const level = localStorage.getItem('authLevel') 
//   const {ID,objectID} = JSON.parse(localStorage.getItem(`${level==="admin"?"employee":level}Info`)).data
//   const field = update.reviewStatus? '/comments': cancelByAdmin ?
//    '/cancel':update.status==='confirmed'?'/assign':''
//   const updateApi = `${url}/${model}${field}/${id}`  
//   try {
//     yield call(axios.put, updateApi, {...update, employeeID:ID, employeeDetail:objectID},header())
//     yield put({ type: 'UPDATE_ORDER_SUCCESS', repos: update })
//   }
//   catch (e) {
//     console.log(e)
//     yield put({ type: 'UPDATE_ORDER_FAILED', payload: e })
//   }
// }

// function* postOrder(action) {
//   let postApi = postRCApi
//   if (action.payload.type === "EC") {
//     postApi = postECApi
//   }
//   const result = yield call(axios.post, postApi, action.payload, header())
//   const { data } = result
//   if (result.errors) {
//     yield put({ type: 'POST_ORDER_FAILED', errorInSaga: result.errors })
//   }
//   else {
//     yield put({ type: 'POST_ORDER_SUCCESS', postInSaga: data })
//     localStorage.setItem('Order', JSON.stringify(action.payload))

//   }
// }

// function* payOrder() {
//   yield put({ type: 'PAY_ORDER_SUCCESS', postInSaga: 'success!!' })
// }

// function* fetchAllOrders(action) {
//   try {
//     const { page, pageSize, status } = action.payload
//     // eslint-disable-next-line max-len
//     const apiUrl = `${url}/sortedOrder?page=${page}&pageSize=${pageSize}&status=${status}`
//     const orders = yield call(axios.get, apiUrl,header())
//     yield put({ type: 'GET_ALL_ORDERS_SUCCESS', orders: orders.data })
//   } catch (e) {
//     yield put({ type: 'GET_ALL_ORDERS_FAILED', message: e.message })
//   }
// }


// function* assignToEmployee(action) {
//   const { type,id, update} = action.payload
//   const model = type.toUpperCase() === "RC" ? 'regular' : 'endOfLease'
//   const level = localStorage.getItem('authLevel') 
//   const info = JSON.parse(localStorage.getItem(`${level}Info`))
//   const {ID,objectID} = info.data
//   const updateAPI=`${url}/${model}/assign/${id}`
//   const EmployeeData = {employeeID:ID,employeeDetail:objectID}
//   try{
//     const data = yield call(axios.put, updateAPI ,EmployeeData,header())
//     yield put({type:'UPDATE_ASSIGN_SUCCESS',payload:data})
//     yield put({ type: 'UPDATE_ORDER_SUCCESS', repos: update })
//   }
//   catch(e) {
//     console.log(e)
//     yield put({type:'UPDATE_ASSIGN_FAILED',payload:e})
//   }
// }

// function* fetchOrdersByTarget(action) {
//   try{
//     const{id, type} = action.payload
//     const apiUrl = `${url}/${type === 'user'? 'users': 'employees'}/alltask/${id}`
//     const users = yield call(axios.get, apiUrl,header())
//     yield put({type:'GET_ORDERSBYTARGET_SUCCESS',users:users.data})
//   }
//   catch(e) {
//     yield put({type:'GET_ORDERSBYTARGET_FAILED',message:e.message})
//   }
// }


function* ItemSaga() {
  yield takeEvery('GET_ITEMS_REQUEST', getItems); 

}

export default ItemSaga;

