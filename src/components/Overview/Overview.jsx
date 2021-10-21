import React from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Overview.scss';
import { addToCart } from "../../store/actions/cart/cart";

function OverviewList(props) {
  const { image, title, price, id, pageType } = props;
  // console.log(props);
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
      <div className="overview-page__deals--card">
        {/* Image */}
        <a href={`./get/${id}`}><img src={image} alt={title} className="overview-page__deals--image" /></a>

        <div className="overview-page__deals--describes">
          {/* Title */}
          <div className="overview-page__deals--describes-title" >{title}</div>
          {/* Price */}
          <div className="overview-page__deals--describe-price">
            <div>{price}</div>
          </div>
          {/* Description */}
          <div style={{ fontSize: "0.7rem", marginBottom: "1rem" }}>Free Delivery on eligible first order</div>
          {/* Add to cart button */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              className="btn--overviewpage-add-to-cart"
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