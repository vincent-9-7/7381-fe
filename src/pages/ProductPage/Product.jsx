import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsRequest } from '../../store/actions/index';
import './Product.scss';
import Header from '../../components/PageHeader/PageHeader';
import Loading from '../../components/Loading/Loading';
import Footer from '../../components/PageFooter/PageFooter';

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
        <>
          {items.map((item) => (
              <div key={item._id} style={{display:"flex", flexDirection:"row", alignItems:"flex-end"}}>
                <h3 style={{margin:"10px"}}>Title: {item.title}</h3>
                <h3 style={{margin:"10px"}}>Price: {item.price}</h3>
                <h3 style={{margin:"10px"}}>Quantity: {item.quantity}</h3>
                <h3 style={{margin:"10px"}}>Description: {item.description}</h3>
              </div>
            ))}
        </>
      )}
      {/* <Footer /> */}
    </div>
  );
}

export default Product;
