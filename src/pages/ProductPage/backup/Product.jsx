import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsRequest } from '../../../store/actions/index';
import '../Product.scss';
import Header from '../../../components/PageHeader/PageHeader';
import Loading from '../../../components/Loading/Loading';
import Footer from '../../../components/PageFooter/PageFooter';
import TodayDeals from '../../../components/TodayDeals/TodayDeals';
import Deals from '../../../components/TodayDeals/dealstest';
import box from '../../../assets/img/box.svg';

function Product() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsRequest());
  }, []);

  const loading = useSelector((state) => state.itemslist.loading);
  const items = useSelector((state) => state.itemslist.itemDetails);
  // console.log(items);
  return (
    <div>
      <Header />
      {/* <Loading /> */}
      {loading && <Loading />}

      {!loading && (
        <div className="product-page container">
          {items.map((item) => (
            <div key={item._id}>
              {/* <TodayDeals
                image={box}
                title={`${item.title} ${item.quantity}kg`}
                delivery="free delivery"
                description={item.description}
                oldPrice={false}
                price={`AU $${item.price}`}
              /> */}
              <Deals
                image={box}
                title={`${item.title} ${item.quantity}kg`}
                delivery="free delivery"
                description={item.description}
                oldPrice={false}
                price={`AU $${item.price}`}
              />
            </div>
          ))}
        </div>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default Product;
