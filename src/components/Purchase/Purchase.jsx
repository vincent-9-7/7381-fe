import React, { useState } from 'react';
import './Purchase.scss';

const options = [
  { value: '5', label: '5 KM' },
  { value: '10', label: '10 KM' },
  { value: '20', label: '20 KM' },
  { value: '50', label: '50 KM' },
  { value: '100', label: '100 km' },
];

function Purchase() {
  // const [data, setData] = useState(null);
  // console.log(data);
  return (
    <div className="purchase">
      <form action="/search" method="get">
        <div className="purchase__content ">
          <input type="text" placeholder="Address 1" name="name" className="purchase__input" />
        </div>
        <div className="purchase__content ">
          <input type="text" placeholder="Address 2" name="name" className="purchase__input" />
          <input type="text" placeholder="Country" name="name" className="purchase__input" />
        </div>
        <div className="purchase__content ">
          <input type="text" placeholder="City" name="name" className="purchase__input" />
          <input type="text" placeholder="State" name="name" className="purchase__input" />
          <input type="text" placeholder="Postcode" name="name" className="purchase__input" />
        </div>

        {/* <button type="button" onClick={} className="btn--search">
                Search
              </button> */}
      </form>
    </div>
  );
}

export default Purchase;
