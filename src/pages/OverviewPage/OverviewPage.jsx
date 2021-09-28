import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsRequest } from '../../store/actions/index';
import Loading from '../../components/Loading/Loading';
import OverviewList from '../../components/Overview/Overview';
import OverviewFilter from '../../components/Overview/OverviewFilter';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import './OverviewPage.scss';

import Pagi from '../../components/Overview/Pagination';
// import Pagination from '../../components/Overview/Pagination';




function Overview() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItemsRequest());
  }, []);

  const loading = useSelector((state) => state.itemslist.loading);
  const items = useSelector((state) => state.itemslist.itemDetails);
  console.log(loading);
  console.log(items[0]);
  console.log(items[1]);
  console.log(items[2]);
  // item数据的长度(一共有多少条数据)
  console.log(Math.floor((Object.keys(items).length) / 8) + 1);
  console.log((Object.keys(items).length) / 8 + 1);

  return (
    <div>
      <Header />
      {loading && <Loading />}
      {!loading && (
        <div className="overview-page--main-functions container">
          {/* Filter */}
          <div className="overview-filter">
            <OverviewFilter />
          </div>
          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className='overview-lists' style={{ display: 'flex', flexWrap: 'wrap' }}>
              {items.map((item) => (
                <div key={item._id} className="overview-list">
                  <OverviewList
                    image="abc"
                    title={`${item.title} ${item.quantity}kg`}
                    delivery="free delivery"
                    description={item.description}
                    oldPrice={false}
                    price={`AU $${item.price}`} />
                </div>
              ))}

            </div>


          </div>
        </div>
      )}
      {/* <Pagination /> */}
      <Pagi />
      <Footer />
    </div>
  );
}

export default Overview;
