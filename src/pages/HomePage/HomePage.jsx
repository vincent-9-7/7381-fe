/* eslint-disable max-len */
import React, { Component } from 'react';
// import { useCookies } from 'react-cookie';
// import {ExpireOneHour} from '../../components/ExpiresTime/ExpiresTime';
import './HomePage.scss';
import SlideShow from '../../components/SlideShow/SlideShow';
import ProductList from '../../components/Product/ProductList';
import Star from '../../components/Star/Star';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import SearchBar from '../../components/SearchBar/SearchBar';
import vegetables from '../../assets/img/vegetable.png';
import a from '../../assets/img/a.svg';
import b from '../../assets/img/b.svg';
import c from '../../assets/img/c.svg';

class Home extends Component {
  // const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);
  // setCookie('Saving','123456',{path:'/', expires:ExpireOneHour()});

  // window.sessionStorage.setItem("key", "value");
  // console.log(window.sessionStorage.getItem("key"));
  // sessionStorage.removeItem('key');

  // localStorage.setItem("key", "value");
  // console.log(localStorage.getItem('key'));
  // localStorage.removeItem('key')
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { history } = this.props;
    return (
      <div className="home-page">
        {/* <h1>{cookies.Saving}</h1> */}
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
                {/* 需要展示几个这里就放几个，不填的话默认展示所有 */}
                <ProductList num={6} productType={4} history={history} />
                {/* <ProductDetails
                  image={orangeVerticality}
                  title="Orange 10kg"
                  delivery="free delivery"
                  description="With sweet flesh and easy-to-peel skin."
                  oldPrice="AU $78"
                  price="AU $27.72"
                /> */}
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

        <Footer color="white" />
      </div>
    );
  }
}

export default Home;
