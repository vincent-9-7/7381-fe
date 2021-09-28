import React from 'react';
import './Overview.scss';

function OverviewList(props) {
  const { image, title, delivery, description, oldPrice, price } = props;
  return (
    <div>
      <div className="home-page__deals--card">
        {/* Image */}
        <img src={image} alt={title} className="home-page__deals--image" />

        <div className="home-page__deals--describes">
          {/* Title */}
          <h3>{title}</h3>
          {/* Price */}
          <div className="home-page__deals--describe-price">
            {
              oldPrice && <p className="home-page__deals--describe-old-price">{oldPrice}</p>
            }
            <p style={{ fontSize: '2rem', fontWeight: 700, color: '#E0A604' }}>{price}</p>
          </div>
          {/* Delivery */}
          <p style={{ color: 'grey' }}>{delivery}</p>
          {/* Description */}
          <p>{description}</p>
          {/* Add to cart button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn--add-to-cart"
              type="button"
              onClick={() => (document.location.href = '/productions/101311')}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OverviewList;