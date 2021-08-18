import React from 'react';
// import HomePageStyle from './HomePage.scss';
import './t.css';

function Home() {

  return (
    <div className="home-page">
      <button className="home-page__btn-1" type="button">BEM</button>
      <button className="home-page__btn-2" type="button">BEM</button>
      <p className="home-page__describe">BEM</p>

      <div className="home-page__how-we-work">
          <button className="home-page__how-we-work--btn-1" type="button">BEM</button>
          <h1>Home Page</h1>
      </div>
    </div>
  );
}

export default Home;