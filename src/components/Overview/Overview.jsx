import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Overview.scss';
import { addToCart } from "../../store/actions/cart/cart";

function OverviewList(props) {
  const { image, title, delivery, description, oldPrice, price, id, quantity, pageType } = props;
  console.log(props);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleOnClick = () => {
    dispatch(addToCart(id));
    window.sessionStorage.setItem("cart", true);
    if (pageType === "fruit") {
      history.push('./fruit');
    } else {
      history.push('./vegetable');
    }
  };


  return (
    <div>
      <div className="home-page__deals--card">
        {/* Image */}
        <a href={`./get/${id}`}><img src={image} alt={title} className="home-page__deals--image" /></a>

        <div className="home-page__deals--describes">
          {/* Title */}
          <h3 style={{ fontSize: 'large' }}>{title}</h3>
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
              onClick={handleOnClick}
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