/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

import React, { useEffect, useState, useRef } from 'react';
import './SlideTest.scss';
// import tomato from '../../assets/img/tomato.jpg'; // https://www.pexels.com/zh-cn/photo/4022083/
// import potato from '../../assets/img/potato.jpg'; // https://www.pexels.com/zh-cn/photo/7456543/
// import banana from '../../assets/img/banana.jpg'; // https://www.pexels.com/zh-cn/photo/5472397/


// Ref:
// https://tinloof.com/blog/how-to-build-an-auto-play-slideshow-with-react/
const colors = ['#0088FE', '#00C49F', '#FFBB28'];
const content = [
  { ID: '#0088FE', Title: 'Tomato', Image:'tomato', Describe: 'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka'}, 
  { ID: '#00C49F', Title: 'Potato', Image:'potato', Describe: 'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka'}, 
  { ID: '#FFBB28', Title: 'Banana', Image:'banana', Describe: 'Perfection fresh B-grade tomato form farmer Pick out your favourite ktjebandjandakjknalk Fbjandkansdlknksdlnalkdnalkdnkandlkanslkd Kfas;ldma;sldosakdsmal kasmdlknalksdnlka'}];
const delay = 2500;

function SlideTest() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  // console.log(image1.default);
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex === colors.length - 1 ? 0 : prevIndex + 1)),
      delay,
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <>
      
      <div className="slideshow">
        <div className="slideshowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {content.map((object) => (
            <div className="slide" key={object.Title} style={{ background: object.ID }}>
              
              {/* {console.log(object.Image.image2)} */}
              {/* <img src={require('../../assets/img/banana.jpg').default} alt="tomato" className="home-page__right--image" /> */}

              <div className="home-page__slide">
                <div className="home-page__slide--left">
                  <div className="home-page__slide--title">
                    <h3 className="home-page__title--item">B-grade</h3>
                  </div>
                  <h1>{object.Title}</h1>
                  <p>{object.Describe}</p>
                  <div className="home-page__slide--button">
                    <button type="button" className="btn--see-more">See More</button>
                  </div>
                </div>

                <div className="home-page__slide--right">
                  <img src={require(`../../assets/img/${object.Image}.jpg`).default} alt="tomato" className="home-page__right--image" />
                </div>
              </div> 
            </div>
          ))}
        </div>

        {/* <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? ' active' : ''}`}
              onClick={() => {
                setIndex(idx);
              }}
            />
          ))}
        </div> */}
      </div>
    </>
  );
}

export default SlideTest;
