import React, { Component } from 'react';
// import tomatoVerticality from '../../assets/img/tomato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/8016790/
// import potatoVerticality from '../../assets/img/potato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2286776/
// import bananaVerticality from '../../assets/img/banana_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2116020/
// import orangeVerticality from '../../assets/img/orange_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2294477/
// import appleVerticality from '../../assets/img/apple_ver.jpg'; // https://www.pexels.com/zh-cn/photo/1453713/
import FakeImage from '../FakeImage/FakeImage';

export default class ShoppingCartItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // console.log(this.props);
    const { price, quantity, title, removeButton, addButton, deleteButton, inventory } = this.props;
    // console.log(brand);

    // let image;
    // if (title.toLowerCase().includes('tomato')) {
    //   image = tomatoVerticality;
    // } else if (title.toLowerCase().includes('potato')) {
    //   image = potatoVerticality;
    // } else if (title.toLowerCase().includes('banana')) {
    //   image = bananaVerticality;
    // } else if (title.toLowerCase().includes('orange')) {
    //   image = orangeVerticality;
    // } else if (title.toLowerCase().includes('apple')) {
    //   image = appleVerticality;
    // }

    return (
      <div className="cart__details">
        <div className="cart__details--left">
          <div className="cart__details--delete-position">{deleteButton}</div>

          {/* <img src={image} alt={' '} className="cart__details--image" /> */}
          {/* 1. productions: 图片尺寸大 2. checkout：图片尺寸正方形 */}
          <FakeImage imageTitle={title} page="checkout" />
          <div className="cart__details--text">
            <h4 style={{ padding: '0', margin: '1rem 0 0 0' }}>{title} 2kg</h4>
            <p style={{ fontSize: '1em', fontWeight: '400', padding: '0', margin: '5px 0 0 0' }}>B-grade</p>
            <p style={{ color: 'gray', fontSize: '1em', fontWeight: '400', marginTop: '5px' }}>
              Standard Parcel Delivery
            </p>
            <div style={{ display: 'flex' }}>
              <div className="cart__remove-btn">{removeButton}</div>
              <h4 style={{ margin: '0 20px' }}>{quantity}</h4>
              <div className="cart__remove-btn">{addButton}</div>
            </div>
          </div>
        </div>

        <div className="cart__details--right">
          <h4>&#36;{price}</h4>
          <p style={{ color: 'gray', fontSize: '1em', fontWeight: '400', padding: '0', margin: '10px 0 0 0' }}>
            Free postage
          </p>
          {/* <button type="button" className="cart__details--btn">delete</button> */}
        </div>
      </div>
    );
  }
}
