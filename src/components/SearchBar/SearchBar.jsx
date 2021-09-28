/* eslint-disable no-nested-ternary */
/* eslint-disable max-len */

import React, { useState } from 'react';
import Select from 'react-select';
import './SearchBar.scss';


const customStyles = {
  control: (base, state) => ({
    ...base,
    height: '45px',
    minHeight: '45px',
    width: '150px',
    outline: 'none',
    fontSize: 'large',
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
  option: (base, { data, isDisabled, isFocused, isSelected }) => ({
    ...base,
    backgroundColor: isDisabled ? null : isSelected ? 'rgba(184, 216, 89, 0.5)' : isFocused ? 'rgba(207, 229, 140, 0.3)' : null,
    ':active': {
      backgroundColor: !isDisabled && (isSelected ? '#d0cfce' : 'rgba(184, 216, 89, 0.5)'),
    },

  }),
};

const options = [
  { value: '5', label: '5 KM' },
  { value: '10', label: '10 KM' },
  { value: '20', label: '20 KM' },
  { value: '50', label: '50 KM' },
  { value: '100', label: '100 km' },
];

function SearchBar() {
  const [data, setData] = useState(null);
  console.log(data);
  const searchFunc = () => {
    console.log('search');
    // document.location.href = '/productions';
    document.location.href = '/search?name=Apple';

  };
  return (
    <div>
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
            <button type="button" onClick={searchFunc} className="btn--search">
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
//   const options = [
//     { value: '5', label: '5 KM' },
//     { value: '10', label: '10 KM' },
//     { value: '20', label: '20 KM' },
//     { value: '50', label: '50 KM' },
//     { value: '100', label: '100 km' },
//   ];
//   console.log(data);

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
//               // isMulti
//               // isClearable
//             />
//             <button type="submit" className="btn--search">
//               Search
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

export default SearchBar;
