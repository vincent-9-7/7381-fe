/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
// import tomato from '../../assets/img/tomato.jpg'; // https://www.pexels.com/zh-cn/photo/4022083/
// import potato from '../../assets/img/potato.jpg'; // https://www.pexels.com/zh-cn/photo/7456543/
// import banana from '../../assets/img/banana.jpg'; // https://www.pexels.com/zh-cn/photo/5472397/

// Ref:
// https://www.npmjs.com/package/react-slideshow-image

const content = [
  {
    ID: '#0088FE',
    Title: 'Tomato',
    Image: 'tomato',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
  },
  {
    ID: '#00C49F',
    Title: 'Potato',
    Image: 'potato',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
  },
  {
    ID: '#FFBB28',
    Title: 'Banana',
    Image: 'banana',
    Describe:
      'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka',
  },
];

function Slides() {
  return (
    <>
      <div>
        <Slide easing="ease" duration="2000" transitionDuration="1500" arrows={false} autoplay={false}>
          {content.map((object) => (
            <div className="each-slide" key={object.Title}>
              <div className="home-page__slide">
                
                <div className="home-page__slide--left">
                  <div className="home-page__slide--title">
                    <h3 className="home-page__title--words">B-grade</h3>
                  </div>
                  <h1>{object.Title}</h1>
                  <p>{object.Describe}</p>
                  <div className="home-page__slide--button">
                    <button type="button" className="btn--see-more">
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
            </div>
          ))}
        </Slide>
      </div>
    </>
  );
}

export default Slides;
