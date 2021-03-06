import React from 'react';
import '../Product.scss';
import { useDispatch, useSelector } from 'react-redux';
// import { actFetchProductsRequest, AddCart,getShopRequest } from "../../store/actions";

function TodayDeals(props) {
  const { image, title, delivery, description, oldPrice, price } = props;
  const dispatch = useDispatch();

  const addCart = () => {
    // console.log("aa");
    dispatch(AddCart(title));
  };
  return (
    <div className="home-page__deals--card">
      <img src={image} alt={title} className="home-page__deals--image" />

      <div className="home-page__deals--describes">
        <h3>{title}</h3>
        <p style={{ color: 'grey' }}>{delivery}</p>
        <p>{description}</p>

        <div className="home-page__deals--describe-price">
          {
            oldPrice && <p className="home-page__deals--describe-old-price">{oldPrice}</p>
          }
          
          <p style={{ fontSize: '2rem', fontWeight: 700, color: '#E0A604' }}>{price}</p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <button
            className="btn--add-to-cart"
            type="button"
            // onClick={() => (document.location.href = '/productions/101311')}
            onClick={() => addCart()}

          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodayDeals;
