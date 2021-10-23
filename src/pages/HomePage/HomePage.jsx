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
// import a from '../../assets/img/a.svg';
// import b from '../../assets/img/b.svg';
// import c from '../../assets/img/c.svg';
import howwework from '../../assets/img/howwework.jpg';
import PageTitle from '../../components/PageTitle/PageTitle';

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
              {/* <div className="home-page__deals--title"> */}
              {/* <h2>Today&apos;s Deals</h2> */}
              <div style={{ paddingTop: '30px' }}>
                <PageTitle text="Today's Deals" background="no-bg" />
              </div>
              {/* </div> */}

              <div className="home-page__deals--cards">
                {/* 需要展示几个这里就放几个，不填的话默认展示所有 */}
                {/* <ProductList num={3} productType={4} history={history} /> */}
                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <h4 style={{ fontWeight: 'bold' }}>B-grade</h4>
                </div>
                <ProductList num={3} productType={5} history={history} />

                <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <h4 style={{ fontWeight: 'bold' }}>Processed</h4>
                </div>
                <ProductList num={3} productType={6} history={history} />
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

        <div className="container" id="section">
          <div className="home-page__ad">
            {/* <div className="home-page__ad--title">
              <h2>B-grade products</h2>
            </div> */}
            <div>
              <PageTitle text="B-grade products" background="no-bg" />
            </div>

            <div className="home-page__ad--details">
              <div className="home-page__ad--left">
                <h1 style={{ color: '#E0A604', fontSize: '2.1rem' }}>B-grade product?</h1>
                <Star rating={4} totalRating={5} />
                <p>
                  The B-grade products on our website are defined as imperfect looking fruit and vegetables that still
                  have high quality inside.
                </p>

                <h1 style={{ color: '#E0A604', fontSize: '2.1rem' }}>Save food, protect our earth.</h1>
                <Star rating={5} totalRating={5} />
                <p>
                  Do you know that 31% of the food waste in Australia happens in primary production, and about 55%
                  occurs before it reaches the customers?
                </p>
                <p>
                  To save food and protect our Earth, we need to pay more attention to the B-grade market. It will help
                  reduce the wastage of food also save you money. Our website aims to provide more opportunities for
                  primary producers to sell B-grade products while the processors and general users can get cheaper
                  resources. Let’s protect our Earth together.
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
              {/* <div className="home-page__how-we-work--title">
                <h2>How we work</h2>
              </div> */}
              <div style={{ paddingTop: '30px' }}>
                <PageTitle text="How we work" background="no-bg" />
              </div>

              {/* <div className="home-page__how-we-work--images">
                <img src={a} alt="how-we-work1" className="home-page__how-we-work--image" />
                <img src={b} alt="how-we-work2" className="home-page__how-we-work--image" />
                <img src={c} alt="how-we-work3" className="home-page__how-we-work--image" />
              </div> */}
              <div className="home-page__how-we-work--images">
                <img src={howwework} alt="how-we-work" className="home-page__how-we-work--image" />
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
