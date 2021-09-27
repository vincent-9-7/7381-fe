/* eslint-disable */
import React, { Component } from 'react';
import '../../pages/ProductionPage/Production.scss';
import './Product.scss';
import tomatoVerticality from '../../assets/img/tomato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/8016790/
import potatoVerticality from '../../assets/img/potato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2286776/
import bananaVerticality from '../../assets/img/banana_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2116020/
import orangeVerticality from '../../assets/img/orange_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2294477/
import appleVerticality from '../../assets/img/apple_ver.jpg'; // https://www.pexels.com/zh-cn/photo/1453713/


export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render() {
    // console.log(this.props);
    const { brand, quantity, title, button, inventory, delivery, description, oldPrice, price } = this.props;
    // console.log(title);
    // console.log(button);
    let image;
    if(title.toLowerCase().includes("tomato")){
      image = tomatoVerticality;
    }
    else if(title.toLowerCase().includes("potato")){
      image = potatoVerticality;
    }
    else if(title.toLowerCase().includes("banana")){
      image = bananaVerticality;
    }
    else if(title.toLowerCase().includes("orange")){
      image = orangeVerticality;
    }
    else if(title.toLowerCase().includes("apple")){
      image = appleVerticality;
    }
    return (
      <div>
        <div className="home-page__deals--card">
          <img src={image} alt={title} className="home-page__deals--image" />

          <div className="home-page__deals--describes">
            <h3>{title}</h3>
            <p style={{ color: 'grey' }}>{delivery}</p>
            <p>{description}</p>

            <div className="home-page__deals--describe-price">
              {oldPrice && <p className="home-page__deals--describe-old-price">{oldPrice}</p>}

              <p style={{ fontSize: '2rem', fontWeight: 700, color: '#E0A604' }}>{price}</p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {button}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
