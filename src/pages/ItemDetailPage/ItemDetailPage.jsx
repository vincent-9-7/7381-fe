/* eslint-disable */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import ItemTabs from '../../components/ItemDetail/ItemTabs';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import SearchBar from '../../components/SearchBar/SearchBar';
import Loading from "../../components/Loading/Loading";
import { getItemRequest } from "../../store/actions";
import './ItemDetailPage.scss';

function ItemDetailPage(match) {
  const itemid = match.match.params.id;
  console.log(match.match);

  console.log(itemid);

  const data = { _id: itemid }
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemRequest(data));
  }, []);
  const loading = useSelector((state) => state.itemslist.loading);



  const item = useSelector((state) => state.itemslist.itemDetails);
  console.log(item);



  const { title, condition, suburb, city, quantity, price, imageAddress, description } = item;
  console.log(item[0]);

  let initialState = {
    title: 'abc',
    condition: 'abc',
    suburb: 'abc',
    city: 'd',
    quantity: 'd',
    imageAddress: 'd',
    description: 'd'
  }

  if (item[0] !== undefined) {
    initialState = item[0];
  }

  console.log(initialState);

  return (
    <div>
      <Header />
      <SearchBar />
      {loading && <Loading />}
      {!loading && (<><div className="container">
        <ItemDetail
          title={initialState.title}
          condition={initialState.condition}
          suburb={initialState.suburb}
          city={initialState.city}
          quantity={initialState.quantity}
          price={initialState.price}
          imageAddress={initialState.imageAddress}
        />
      </div>
        <ItemTabs
          description={initialState.description}
        />
      </>)}
      <Footer />
    </div>
  );
}

export default ItemDetailPage;
