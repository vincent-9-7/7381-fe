/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import { Slide, Fade } from 'react-slideshow-image';
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
    Image: 'tomato',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
  },
  {
    ID: '#00C49F',
    Title: 'POTATO',
    Image: 'potato',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
  },
  {
    ID: '#FFBB28',
    Title: 'BANANA',
    Image: 'banana',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
  },
  {
    ID: '#FFBB28',
    Title: 'ORANGE',
    Image: 'orange',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
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
              <h1 style={{ color: '#E0A604' }}>{object.Title}</h1>
              <p>{object.Describe}</p>
              <div className="home-page__slide--button">
                <button type="button" className="btn--see-more" onClick={() => (document.location.href = '/productions/all')}>
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
