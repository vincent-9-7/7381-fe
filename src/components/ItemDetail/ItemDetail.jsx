/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addToCart } from "../../store/actions/cart/cart";
import './ItemDetail.scss';

function ItemDetail(props) {
  const { title, condition, suburb, city, quantity, price, imageAddress, id, postQuantity, object } = props;
  // console.log(object);

  const dispatch = useDispatch();
  const history = useHistory();
  sessionStorage.setItem('checkout_products', JSON.stringify(object));


  const handleOnClick1 = () => {
    const submittedQuantity = document.getElementById("quantity").value;
    if (submittedQuantity === '') {
      alert('Please input the quantity you want to buy! ');
    }
    else if (submittedQuantity > quantity) {
      alert('Please select correct number, the number you submit is bigger than we have. ');
    } else {
      sessionStorage.setItem('submittedQuantity', submittedQuantity);
      for (let i = 0; i < submittedQuantity; i += 1) {
        dispatch(addToCart(id));
        // console.log(i);
      }
      window.sessionStorage.setItem("cart", true);
      const total = submittedQuantity * price;
      sessionStorage.setItem('total', total);
      history.push(`../checkout`);
    }
    // console.log(submittedQuantity);
  };

  const handleOnClick2 = () => {
    const submittedQuantity = document.getElementById("quantity").value;
    if (submittedQuantity === '') {
      // 这里把else直接放这里不加alert提醒quantity了
      alert('Please input the quantity as 1 because you want to add it to cart. ');
    } else if (submittedQuantity > quantity) {
      alert('Please select correct number, the number you submit is bigger than we have. ');
    }
    else {
      sessionStorage.setItem('submittedQuantity', submittedQuantity);
      // document.location.href = "../shopping-cart";
      // console.log(submittedQuantity);
      dispatch(addToCart(id));
      window.sessionStorage.setItem("cart", true);
      history.push(`./${id}`);
      // history.push("../shopping-cart");
    }
  };


  return (
    <div >
      <div className="item-detail-page__card">
        <div className="item-detail-page__middle">
          <div className="item-detail-page__left">
            <img src={imageAddress} alt="abc" width="490px" /></div>
          <div className="item-detail-page__right">
            {/** Details */}
            {/** Title */}
            <div className="item-detail-page__item-title">
              <h3>{title}</h3>
            </div>
            <hr className="item-detail-page__item-border" />
            <div style={{ margin: "15px" }}>
              {/** Condition */}
              <div className="item-detail-page__item-condition">
                <h3>Condition: {condition}</h3>
              </div>
              {/** Location */}
              <div className="item-detail-page__item-location">
                <h3>Location: {suburb}</h3>
              </div>
              {/** Quantity */}
              <div className="item-detail-page__item-quantity">
                <h3 style={{ display: "flex" }}>
                  Quantity:
                  <form>
                    <input type="number"
                      style={{ fontSize: 20, width: "50px", marginLeft: "15px", textAlign: 'center' }}
                      max={quantity} min={0} step={1} id='quantity' required
                    />
                  </form>

                </h3>
                <div style={{ fontSize: "10px" }}>{quantity} available
                  &nbsp;/&nbsp;{postQuantity - quantity} sold</div>

              </div>
            </div>
            <hr className="item-detail-page__item-border" />
            <div style={{ margin: "15px" }}>
              {/** Price */}
              <div className="item-detail-page__item-price"><h3>Price: ${price}</h3></div>
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
              <button type="button" className="button btn--add" onClick={handleOnClick1}>Buy it now</button>
              <button type="button" className="btn--add" onClick={handleOnClick2}>Add to cart</button>
            </div>
          </div>
        </div>
        {/** Tabs */}
      </div>
    </div>
  );
}

export default ItemDetail;
