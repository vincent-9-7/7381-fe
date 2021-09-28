import React from 'react';
import CoolTabs from 'react-cool-tabs';
import './ItemDetail.scss';
import image from '../../assets/img/orange.jpg';

function ItemDetail() {


  return (
    <div >
      <div className="item-detail-page__card">
        <div className="item-detail-page__middle">
          <div className="item-detail-page__left"><img src={image} alt="abc" width="600px" /></div>
          <div className="item-detail-page__right">
            {/** Details */}
            {/** Title */}
            <div className="item-detail-page__item-title">
              <h3>Canvadish Bananas 2kg</h3>
            </div>
            <hr className="item-detail-page__item-border" />
            <div style={{ margin: "15px" }}>
              {/** Condition */}
              <div className="item-detail-page__item-condition">
                <h3>Condition: B-grade</h3>
              </div>
              {/** Location */}
              <div className="item-detail-page__item-location">
                <h3>Location: South Brisbane</h3>
              </div>
              {/** Quantity */}
              <div className="item-detail-page__item-quantity">
                <h3 style={{ display: "flex" }}>
                  Quantity:
                  <form>
                    <input type="text"
                      style={{ fontSize: 20, width: "50px", marginLeft: "15px", textAlign: 'center' }}
                      onInput="value=value.replace(/[^\d]/g,'')" />
                  </form>
                </h3>
              </div>
            </div>
            <hr className="item-detail-page__item-border" />
            <div style={{ margin: "15px" }}>
              {/** Price */}
              <div className="item-detail-page__item-price"><h3>Price: $49</h3></div>
              {/** Payments */}
              <div className="item-detail-page__item-payment"><h3>Payments: </h3></div>
              {/** Postage */}
              <div className="item-detail-page__item-postage"><h3>Postage: Free</h3></div>
              {/** Delivery */}
              <div className="item-detail-page__item-delivery">
                {/* <h3>Delivery: Estimated between 18th May to 21th May</h3> */}
              </div>
            </div>
            <hr className="item-detail-page__item-border" />
            <div className="item-detail-page__item-buttons">
              <button type="button" className="btn--add">Buy it now</button>
              <button type="button" className="btn--add">Add to cart</button>
            </div>
          </div>
        </div>
        {/** Tabs */}
        {/* <div className="item-detail-page__bottom">
          <CoolTabs
            leftTabTitle={<h3 style={{ fontWeight: 'bold' }}>Product Details</h3>}
            rightTabTitle={<h3 style={{ fontWeight: 'bold' }}>Return Policy</h3>}
            leftTabStyle={{ background: '#EFF6D9' }}
            rightTabStyle={{ background: '#EFF6D9' }}
            activeLeftTabBorderBottomStyle={{ background: '#E0A604', height: 4 }}
            activeRightTabBorderBottomStyle={{ background: '#E0A604', height: 4 }}
            style={{ width: '70%' }}
            tabsHeaderStyle={{ width: '60%', marginBottom: '20px' }}
            contentTransitionStyle="transform 0.6s ease-in"
            borderTransitionStyle="all 0.6s ease-in"
            contentContainerStyle={{ margin: "60px" }}
            leftContent={
              <div>
                <strong>Banana Fun Facts!</strong>
                <p />
                <p>
                  Bananas are bent due to a phenomenon known as negative geotropism- once developed,
                  instead of growing towards the ground, bananas turn towards the sun (against gravity).
                  Hence giving them the curved shape.Bananas are the best source of Vitamin B6
                  Bananas are composed of 75% water.
                  At over 10,000 years old, bananas are the worlds oldest fruit!</p>
              </div>}
            rightContent={
              <div>
                <b>Return policy details</b>
                <p>
                  The seller won’t accept returns for this item.
                  You must return items in their original packaging and in the same condition as
                  when you received them.If you don’t follow our item condition policy for returns,
                  you may not receive a full refund.</p>
                <b>Refunds by law: </b>
                <p>
                  In Australia, consumers have a legal right to obtain a refund from
                  a business if the goods purchased are faulty, not fit for purpose or don’t match the
                  seller’s description.More information at returns.
                </p>
              </div>}
          />
        </div> */}
      </div>
    </div>
  );
}

export default ItemDetail;
