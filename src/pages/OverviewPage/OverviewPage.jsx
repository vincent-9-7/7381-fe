/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getItemsRequest } from '../../store/actions/index';

import Pagination from 'rc-pagination';
import "../../components/Overview/Pagination.scss";
import "rc-pagination/assets/index.css";

import Loading from '../../components/Loading/Loading';
import OverviewList from '../../components/Overview/Overview';
import OverviewFilter from '../../components/Overview/OverviewFilter';
import Footer from '../../components/PageFooter/PageFooter';
import Header from '../../components/PageHeader/PageHeader';
import './OverviewPage.scss';

import Pagi from '../../components/Overview/Pagination';
// import Pagination from '../../components/Overview/Pagination';

function Overview(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsRequest());
  }, []);
  const loading = useSelector((state) => state.itemslist.loading);
  const items = useSelector((state) => state.itemslist.itemDetails);
  // console.log(props.state);
  // console.log(totalItem);
  const [state, setState] = React.useState(1);

  const onChange = page => {
    // console.log(page);
    setState(page);
  };

  // console.log(state);
  // pages.push(state)

  // let county  = 0;
  // const [state,setState] = React.useState([{page:1}]);
  // const handlePageOnChange = (page) => {
  //   state.push(page);
  //   setState(state);
  //   console.log(state);
  //   county += 1;
  // }


  // const { page } = props;
  // console.log(page);


  // const [pages, setPages] = React.useState([[1], [1], [1]]);
  // let count = 2;
  // function handlePageChange(page) {
  //   count += 1;
  //   if (pages[count] === undefined) {
  //     pages[count] = [1];
  //   }
  //   console.log(pages[count]);
  //   console.log(pages[count][0]);
  //   const final = pages[count][0];
  //   console.log(final);
  //   pages.push(page);
  //   setPages(pages);
  //   console.log(pages);
  //   console.log(typeof (pages));
  //   return final;
  // }
  // const [pages, setPages] = React.useState([]);
  // console.log(pages, '123456');

  // function pageChange(pages) {
  //   setPages(pages);
  //   console.log(pages, '789789');
  // }



  // sessionStorage.setItem('page', 1);
  // // showpage替换成子组件传的page
  // console.log(pages);
  // const showPage = pages[count][0] - 1;
  // const showPage = sessionStorage.getItem('page') - 1;
  // console.log(showPage);
  // console.log(typeof (showPage));
  const newItems = items.slice((state - 1) * 9, state * 9);
  // console.log(newItems);

  // console.log(items.length);
  // console.log(Math.floor((Object.keys(items).length) / 9) + 1);
  // console.log((Object.keys(items).length) / 9 + 1);
  // // item数据的长度(一共有多少条数据)
  const totalItem = items.length;


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
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: "80%" }}>
            <div className='overview-lists' style={{ display: 'flex', flexWrap: 'wrap' }}>
              {newItems.map((item) => (
                <div key={item._id} className="overview-list">
                  <OverviewList
                    image={item.imageAddress[0]}
                    title={`${item.title} ${item.quantity}kg`}
                    delivery="free delivery"
                    description={item.description}
                    oldPrice={false}
                    price={`AU $${item.price}`}
                    quantity={item.quantity} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {/* <Pagination /> */}
      {/* <Pagi totalItem={totalItem} value={props.state} onChange={onChangePage} /> */}
      <Pagination
        onChange={onChange}
        current={state}
        total={totalItem}
        pageSize={9}

      />
      <Footer />
    </div>
  );
}

export default Overview;
