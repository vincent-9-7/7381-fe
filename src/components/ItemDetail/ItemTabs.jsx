import React from 'react';
import CoolTabs from 'react-cool-tabs';
import './ItemDetail.scss';

function ItemTabs() {
  return (<>
    {/** Tabs */}
    <div className="item-detail-page__bottom">
      <div className="container">
        <CoolTabs
          leftTabTitle={<h3 style={{ fontWeight: 'bold' }}>Product Details</h3>}
          rightTabTitle={<h3 style={{ fontWeight: 'bold' }}>Return Policy</h3>}
          leftTabStyle={{ background: '#EFF6D9' }}
          rightTabStyle={{ background: '#EFF6D9' }}
          activeLeftTabBorderBottomStyle={{ background: '#E0A604', height: 4 }}
          activeRightTabBorderBottomStyle={{ background: '#E0A604', height: 4 }}
          style={{ width: '100%', }}
          tabsHeaderStyle={{ width: '60%', marginBottom: '20px' }}
          contentTransitionStyle="transform 0.6s ease-in"
          borderTransitionStyle="all 0.6s ease-in"
          contentContainerStyle={{ marginTop: "60px" }}
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
      </div>
    </div></>
  );
}

export default ItemTabs;