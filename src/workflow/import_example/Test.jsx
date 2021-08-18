import React from 'react';
// import HomePageStyle from './HomePage.scss';
import "./Test.scss";

function Test() {

  return (
    <div className="container home-page">
      <h1>Style Page</h1>

      <h2>1. Import Style from assets/XXX.scss</h2>
      <button className="btn--primary" type="button">Import Button</button>
      
      <br />
      <br />
      
      <h2>2. BEM example</h2>
      <div className="home-page">
      <button className="home-page__btn-1" type="button">BEM</button>
      <button className="home-page__btn-2" type="button">BEM</button>
      <p className="home-page__describe">BEM</p>

      <div className="home-page__how-we-work">
          <button className="home-page__how-we-work--btn-1" type="button">BEM</button>
      </div>
    </div>
    </div>
  );
}

export default Test;