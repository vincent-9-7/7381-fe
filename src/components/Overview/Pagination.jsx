import React from 'react';
import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css";
import "./Pagination.scss";

function Pagi() {
  const state = {
    current: 3,
  };
  const onChange = page => {
    console.log(page);
    setState({
      current: page,
    });
  };
  return (
    <><Pagination onChange={onChange}
      current={state.current}
      total={25} /></>
  );

}

export default Pagi;