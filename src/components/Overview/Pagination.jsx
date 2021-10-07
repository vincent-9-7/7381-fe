/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable */

// import React from 'react';
import React, { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';

import "rc-pagination/assets/index.css";
import "./Pagination.scss";

function Pagi(props) {
  const { totalItem, } = props;
  // console.log(totalItem);
  const [state, setState] = React.useState(1);
  const pages = [];

  const onChange = page => {
    console.log(page);
    setState(page);
    // return page;
    // sessionStorage.setItem('page', page);
    // console.log(state);
    // pages.push(page);
    // props.onChange(pages);

  };
  // pages.push(state)
  // props.onChange(pages)
  // console.log(pages); // [1]
  // console.log(state); // 1
  return (
    <div>
      <Pagination
        onChange={onChange}
        current={state.current}
        total={totalItem}
        pageSize={9}
        value={props.state}
      />
    </div>
  );

}

export default Pagi;

// export default class Pagi extends React.Component {
//   state = {
//     current: 1,
//   };

//   onChange = page => {
//     console.log(page);
//     this.setState({
//       current: page
//     });
//     sessionStorage.setItem('page', page);
//   };



//   render() {
//     return (
//       <div>
//         <Pagination
//           onChange={this.onChange}
//           current={this.state.current}
//           total={this.props.totalItem}
//           pageSize={9}
//         />
//       </div>
//     );
//   }
// }