import React, {Component} from 'react';
import tomatoVerticality from '../../assets/img/tomato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/8016790/
import potatoVerticality from '../../assets/img/potato_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2286776/
import bananaVerticality from '../../assets/img/banana_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2116020/
import orangeVerticality from '../../assets/img/orange_ver.jpg'; // https://www.pexels.com/zh-cn/photo/2294477/
import appleVerticality from '../../assets/img/apple_ver.jpg'; // https://www.pexels.com/zh-cn/photo/1453713/

// 使用前端假图片，传入产品title即可返回image
export default class FakeImage extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  render(){
    const {imageTitle, page} = this.props;
    let image;
    if(imageTitle.toLowerCase().includes("tomato")){
      image = tomatoVerticality;
    }
    else if(imageTitle.toLowerCase().includes("potato")){
      image = potatoVerticality;
    }
    else if(imageTitle.toLowerCase().includes("banana")){
      image = bananaVerticality;
    }
    else if(imageTitle.toLowerCase().includes("orange")){
      image = orangeVerticality;
    }
    else if(imageTitle.toLowerCase().includes("apple")){
      image = appleVerticality;
    }
  return (
    <>
    {page === "productions" && <img src={image} alt={imageTitle} className="home-page__deals--image" />}
    {page === "checkout" && <img src={image} alt={imageTitle} className="checkout-form__review--image" />}

    </>
  );
  }
}

