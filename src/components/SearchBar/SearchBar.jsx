/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */

import React, { useState } from 'react';
import Select from 'react-select';
import './SearchBar.scss';


const customStyles = {
  control: (base) => ({
    ...base,
    height: '45px',
    minHeight: '45px',
    width: '120px',
    outline: 'none',
    fontSize: '15px',
    borderRadius: '0px 10px 10px 0px',
    // "&:hover": {
    //   outline: 'none',
    // },
  }),
  menu: (base) => ({
    ...base,
    borderRadius: 0,
    marginTop: 0,
  }),
  menuList: (base) => ({
    ...base,
    padding: 0,
  }),
  option: (base, { isDisabled, isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isDisabled
      ? null
      : isSelected
      ? 'rgba(184, 216, 89, 0.5)'
      : isFocused
      ? 'rgba(207, 229, 140, 0.3)'
      : null,
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? '#d0cfce' : 'rgba(184, 216, 89, 0.5)'),
    },
  }),
};

const options = [
  // { value: '5', label: '5 KM' },
  { value: '10', label: '10 KM' },
  { value: '50', label: '50 KM' },
  { value: '200', label: '200 KM' },
  { value: '1000', label: '1000 KM' },
];

function SearchBar() {
  const [data, setData] = useState(null);
  if(data != null) {
    window.sessionStorage.setItem('filterLocation', JSON.stringify(data));
  }
  // console.log(data);
  const location = {};
  function getLocation() {
    if (navigator.geolocation) {
      // navigator.geolocation.getCurrentPosition((e)=>window.sessionStorage.setItem("currentLocation", JSON.stringify(e)));
      navigator.geolocation.getCurrentPosition((e)=>{
        location.latitude = e.coords.longitude;
        location.longitude = e.coords.latitude;
      });      
    } 
    setTimeout(() => {
      // console.log(location);
      window.sessionStorage.setItem("currentLocation", JSON.stringify(location));
    }, 4000);
  }

  if(data != null) {
    getLocation();
  }
  
  return (
    <div>
      {/* <button onClick={getLocation} type="button">aa</button> */}
      
      <div className="search-bar">
        <form action="/search" method="get">
          <div className="search-bar__content container">
            <input type="text" placeholder="Search for the product" name="name" className="search-bar__input" />
            <Select
              placeholder="Distance"
              defaultValue={data}
              onChange={setData}
              options={options}
              styles={customStyles}
              // isMulti
              // isClearable
            />
            <button type="submit" className="btn--search">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// function SearchBar() {
//   const [data, setData] = useState(null);
//   console.log(data);
//   // const history = useHistory();

//   // const searchFunc = () => {
//   //   console.log('search');
//   //   // document.location.href = '/search?name=Apple';
//   //   history.push('/search?name=Apple');
//   // };
//   return (
//     <div>
//       <div className="search-bar">
//         <form action="/search" method="get">
//           <div className="search-bar__content container">
//             <input type="text" placeholder="Search for the product" name="name" className="search-bar__input" />
//             <Select
//               placeholder="Distance"
//               defaultValue={data}
//               onChange={setData}
//               options={options}
//               styles={customStyles}
//             // isMulti
//             // isClearable
//             />
//             <button type="button" onClick={searchFunc} className="btn--search">
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

export default SearchBar;
