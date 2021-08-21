import React from 'react';
import './Flex.scss';

function Flex() {
  return (
    <>
      <div className="container">
        <h1>Flexbox tutorial</h1>
        <p>https://css-tricks.com/snippets/css/a-guide-to-flexbox/</p>
      </div>

      <div>
        <h1>css -&gt; layout.scss</h1>
        <h1>1.flex-direction 排列方向</h1>
        <div className="container-col">
          <div className="box" />
          <div className="box" />
        </div>
      </div>

      <div>
        <h1>2.flex-wrap 是否换行</h1>
        <div className="container-wrap">
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </div>

      <div>
        <h1>3.flex-flow 方向+换行</h1>
        <div className="container-wrap">
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </div>


      <div>
        <h1>4.justify-content 横轴排列方式</h1>
        <div className="container-justify">
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </div>


      <div>
        <h1>5.align-items 纵轴排列方式</h1>
        <div className="container-wrap">
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </div>


      <div>
        <h1>6.align-content 对齐内容不太用</h1>
        <div className="container-content">
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
          <div className="box" />
        </div>
      </div>
    </>
  );
}

export default Flex;
