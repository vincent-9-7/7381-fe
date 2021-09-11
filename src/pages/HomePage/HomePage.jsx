/* eslint-disable max-len */
import React from 'react';
import './HomePage.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import TodayDeals from '../../components/TodayDeals/TodayDeals';
import Star from '../../components/Star/Star';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import SearchBar from '../../components/SearchBar/SearchBar';
import tomatoVerticality from '../../assets/img/tomato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/8016790/
import potatoVerticality from '../../assets/img/potato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2286776/
import bananaVerticality from '../../assets/img/banana_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2116020/
import orangeVerticality from '../../assets/img/orange_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2294477/
import vegetables from '../../assets/img/vegetable.png';

import a from '../../assets/img/a.svg';
import b from '../../assets/img/b.svg';
import c from '../../assets/img/c.svg';


function Home() {
  window.sessionStorage.setItem("key", "value");
  // console.log(window.sessionStorage.getItem("key"));
  // sessionStorage.removeItem('key');

  // localStorage.setItem("key", "value"); 
  // console.log(localStorage.getItem('key'));
  // localStorage.removeItem('key')

  return (
    <div className="home-page">
      <Header />
      <SearchBar />
      <div className="container">
        <div className="home-page__slides-style">
          <SlideShow />
        </div>
      </div>

      <div className="home-page__deals-background">
        <div className="container">
          <div className="home-page__deals">
            <div className="home-page__deals--title">
              <h2>Today&apos;s Deals</h2>
            </div>

            <div className="home-page__deals--cards">
              <TodayDeals
                image={tomatoVerticality}
                title="Tomato 10kg"
                delivery="free delivery"
                description="fresh & juicy."
                oldPrice="AU $78"
                price="AU $54.32"
              />

              <TodayDeals
                image={potatoVerticality}
                title="Potato 10kg"
                delivery="free delivery"
                description="fresh & juicy."
                oldPrice="AU $66"
                price="AU $34.32"
              />

              <TodayDeals
                image={bananaVerticality}
                title="Banana 10kg"
                delivery="free delivery"
                description="fresh & juicy."
                oldPrice="AU $88"
                price="AU $56.32"
              />

              <TodayDeals
                image={orangeVerticality}
                title="Orange 10kg"
                delivery="free delivery"
                description="With sweet flesh and easy-to-peel skin."
                oldPrice="AU $58"
                price="AU $24.32"
              />

              <TodayDeals
                image={orangeVerticality}
                title="Orange 10kg"
                delivery="free delivery"
                description="With sweet flesh and easy-to-peel skin."
                oldPrice="AU $68"
                price="AU $33.2"
              />

              <TodayDeals
                image={orangeVerticality}
                title="Orange 10kg"
                delivery="free delivery"
                description="With sweet flesh and easy-to-peel skin."
                oldPrice="AU $78"
                price="AU $27.72"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="home-page__ad">
          <div className="home-page__ad--title">
            <h2>B-grade products</h2>
          </div>

          <div className="home-page__ad--details">
            <div className="home-page__ad--left">
              <h1 style={{ color: '#E0A604' }}>B-grade product?</h1>
              <Star rating={4} totalRating={5} />
              <p>
                Gmsdma dkasmkf gnjkdnfkdnsklaskldmlas. Sajndkasdm adskdkasdks sjndjs ds gf. Gjjd a Asn jksndksnid vd
                dkjf sjdnsldlakjiodjfkdm saknd Ansdaskjnd fjdngknnankal.
              </p>

              <h1 style={{ color: '#E0A604' }}>Save food, protect our earth.</h1>
              <Star rating={5} totalRating={5} />
              <p>
                Gmsdma dkasmkf gnjkdnfkdnsklaskldmlas. Sajndkasdm adskdkasdks sjndjs ds gf. Gjjd a Asn jksndksnid vd
                dkjf sjdnsldlakjiodjfkdm saknd Ansdaskjnd fjdngknnankal.
              </p>
              <p>
                Gmsdma dkasmkf gnjkdnfkdnsklaskldmlas. Sajndkasdm adskdkasdks sjndjs ds gf. Gjjd a Asn jksndksnid vd
                dkjf sjdnsldlakjiodjfkdm saknd Ansdaskjnd fjdngknnankal.
              </p>
            </div>

            <div className="home-page__ad--right">
              <img src={vegetables} alt={vegetables} className="home-page__details--image" />
            </div>
          </div>
        </div>
      </div>

      <div className="home-page__how-we-work-background">
        <div className="container">
          <div className="home-page__how-we-work">
            <div className="home-page__how-we-work--title">
              <h2>How we work</h2>
            </div>

            <div className="home-page__how-we-work--images">
              <img src={a} alt="how-we-work1" className="home-page__how-we-work--image" />
              <img src={b} alt="how-we-work2" className="home-page__how-we-work--image" />
              <img src={c} alt="how-we-work3" className="home-page__how-we-work--image" />
            </div>


          </div>
        </div>
      </div>
    
      <Footer />
    </div>
  );
}

export default Home;
