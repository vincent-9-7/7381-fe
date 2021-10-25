/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './SlideShow.scss';

// import tomato from '../../assets/img/tomato.jpg'; // https://www.pexels.com/zh-cn/photo/4022083/
// import potato from '../../assets/img/potato.jpg'; // https://www.pexels.com/zh-cn/photo/7456543/
// import banana from '../../assets/img/banana.jpg'; // https://www.pexels.com/zh-cn/photo/5472397/
// import orange from '../../assets/img/orange.jpg'; // https://www.pexels.com/zh-cn/photo/4502957/
// Ref:
// https://www.npmjs.com/package/react-slideshow-image

const content = [
  {
    ID: '#0088FE',
    Title: 'TOMATO',
    Image: 'Tomatoes',
    Describe:
      'These tomatoes are not in the regular shape or regular size. They look strange or smaller than usual. However, they are as juicy and sweet as our other products. Perfect for eating, cooking, or juicing.',
  },
  {
    ID: '#00C49F',
    Title: 'CHILLI',
    Image: 'chili',
    Describe:
      'The chilli just doesn’t look perfect, but it is perfect inside. Perfect for any spicy dishes. Have a try!',
  },
  {
    ID: '#FFBB28',
    Title: 'BANANA',
    Image: 'banana',
    Describe:
      'These bananas get their skin scratched or scuffed from the trees they grew in. However, they have high sweetness, providing vitamin B6, vitamin C, manganese and dietary fibre.',
  },
  {
    ID: '#FFBB28',
    Title: 'ORANGE',
    Image: 'orange',
    Describe:
      'We’ve all suffered through a spotty day or two, so we know it’s only skin deep. These frostbitten oranges are out of WA’s bumper season and are super sweet on the inside. Perfect for juicing.',
  },
];

function SlideShow() {
  const properties = {
    duration: 2000,
    autoplay: true,
    transitionDuration: 1000,
    arrows: false,
    infinite: true,
    easing: 'ease',
    indicators: () => <div className="home-page__slide--point" />,
  };

  return (
    <>
      <Slide {...properties}>
        {content.map((object) => (
          <div className="home-page__slide" key={object.Title}>
            <div className="home-page__slide--left">
              <div className="home-page__slide--title">
                <h3 className="home-page__title--words">B-grade</h3>
              </div>
              <h1 style={{ color: '#E0A604', fontSize: '3.5rem', padding: '0' }}>{object.Title}</h1>
              <p>{object.Describe}</p>
              <div className="home-page__slide--button">
                <button type="button" className="btn--see-more" onClick={() => (document.location.href = '/vegetable')}>
                  See More
                </button>
              </div>
            </div>

            <div className="home-page__slide--right">
              <img
                src={require(`../../assets/img/${object.Image}.jpg`).default}
                alt={object.Image}
                className="home-page__right--image"
              />
            </div>
          </div>
        ))}
      </Slide>
    </>
  );
}

export default SlideShow;
