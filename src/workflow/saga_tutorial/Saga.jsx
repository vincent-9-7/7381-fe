import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsRequest, getUserRequest } from '../../store/actions/index';
import Load from './Load';

function Saga(match) {
  const dispatch = useDispatch();

  // 1. 获取一个Item by _id
  // http://localhost:3000/profile-saga-test/611bc08714c75d132eb805b6
  // const{match:{params:{id}}} = match;
  // const data = {_id: id};
  // useEffect(() => {
  //   dispatch(getItemsRequest(data));
  // }, []);
  // const redux = useSelector(state => state.itemslist.itemDetails);
  // console.log(redux);

  // 2. 获取一个Buyer/Seller by _id?type=buyer
  // http://localhost:3000/profile-saga-test/6126354ddb2668fa133bac43?type=buyer
  const {
    match: {
      params: { id },
    },
  } = match;
  const {
    location: { search },
  } = match;
  const query = new URLSearchParams(search);
  const userData = { _id: id, type: query.get('type') };
  useEffect(() => {
    dispatch(getUserRequest(userData));
  }, []);

  const loading = useSelector((state) => state.user.loading);
  const userDetails = useSelector((state) => state.user.userDetails);

  return (
    <div>
      <h1>Testing Saga</h1>
      {/* {loading && <h1>loading...</h1>} */}
      <Load load={loading} data={userDetails} />
    </div>
  );
}

export default Saga;
