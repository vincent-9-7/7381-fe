import React from 'react';

function Button() {
  return (
    <div className="container button-page">
        <button type="button" className="btn--search">Search</button>
        <button type="button" className="btn--see-more">See More</button>
        <button type="button" className="btn--add-to-cart">Add to cart</button>
        {/* <button type="button" className="btn--primary">Dark Green</button>
        <button type="button" className="btn--primary">Light Green</button> */}
        <button type="button" className="btn--post">Post Ad</button>
        <button type="button" className="btn--save">Save</button>
        <button type="button" className="btn--register">SIGN IN</button>
        <button type="button" className="btn--register">REGISTER</button>

        <h1>h1 - Tomato</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <p>p</p>
    </div>
  );
}

export default Button;
