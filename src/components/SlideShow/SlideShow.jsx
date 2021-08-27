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
      'We’ll always source the ones for your local store from as close as possible, to minimise transport time. Our low prices don’t mean they’re lower quality than other supermarkets. Our zucchini come from the same farms all over Australia, in places like Bowen in QLD, Shepparton in VIC, Riverland in SA and Gingin in WA.',
  },
  {
    ID: '#00C49F',
    Title: 'POTATO',
    Image: 'potato',
    Describe:
      'It’s because of our Aussie first supplier policy, committing us to buy fresh produce from Aussie farmers, whenever possible. In fact, 97% of our entire fresh produce range comes from Australian farms. It’s just another reason why you should eat your greens.',
  },
  {
    ID: '#FFBB28',
    Title: 'BANANA',
    Image: 'banana',
    Describe:
      'Our Aussie first supplier policy means we’ll always source our fresh produce from local farms whenever we can. That’s why 97% of our entire fresh produce range is Australian grown. Grab a bunch in store and support Aussie farmers today.',
  },
  {
    ID: '#FFBB28',
    Title: 'ORANGE',
    Image: 'orange',
    Describe:
      'Imperial Mandarins are the first variety to be picked when mandarin season comes to town. Which is around about April. Since we get ours from local farmers, you’ll get them very quickly.',
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
