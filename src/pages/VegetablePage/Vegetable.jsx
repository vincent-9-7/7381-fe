import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { Multiselect } from 'multiselect-react-dropdown';
import '../../components/Overview/Pagination.scss';
import { getAllVegetableRequest } from '../../store/actions';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import OverviewList from '../../components/Overview/Overview';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';

function VegetablePage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllVegetableRequest());
  }, []);
  const loading = useSelector((state) => state.itemslist.loading);
  const vegetables = useSelector((state) => state.itemslist.itemDetails);

  const objectArray = [
    { key: 'Processed products', value: 'Group 1' },
    { key: 'B-grade products', value: 'Group 1' },
  ];

  const objectArray1 = [
    { key: 'Free Delivery', value: 'Group 1' },
    { key: 'On Sale', value: 'Group 1' },
  ];

  const objectArray2 = [
    { key: 'Australia', value: 'Group 1' },
    { key: 'New South Wales', value: 'Group 1' },
    { key: 'Queensland', value: 'Group 1' },
    { key: 'South Australia', value: 'Group 1' },
    { key: 'Tasmania', value: 'Group 1' },
    { key: 'Victoria', value: 'Group 1' },
    { key: 'Western Australia', value: 'Group 1' },

  ];

  const [state, setState] = React.useState(1);
  const [option, setOption] = React.useState([{ key: 'All', value: 'Group 1' }]);

  const onChange = (page) => {
    // console.log(page);
    setState(page);
  };

  const onSelect = (option) => {
    // console.log(option);
    setOption(option);
  };

  const filter = option[0].key;
  // console.log(filter);
  const conditionFilter = Object.values(vegetables);
  // console.log(conditionFilter);

  let result = {};
  if (filter === 'Processed products') {
    result = conditionFilter.filter((value) => value.condition === 'Processed');
  } else if (filter === 'B-grade products') {
    result = conditionFilter.filter((value) => value.condition === 'B-grade');
  } else if (filter === 'Free Delivery') {
    result = conditionFilter.filter((value) => value.category === 'Fruit');
  } else if (filter === 'On Sale') {
    result = conditionFilter.filter((value) => value.state === 'QLD');
  } else if (filter === 'Australia') {
    result = conditionFilter.filter((value) => value.category === 'Fruit');
  } else if (filter === 'Queensland') {
    result = conditionFilter.filter((value) => value.state === 'QLD');
  } else {
    result = conditionFilter.filter((value) => value.category === 'Vegetable');
  }
  // console.log(result);

  // console.log(state);

  const newItems = result.slice((state - 1) * 9, state * 9);
  // console.log(newItems);
  const filteredNewItems = newItems.filter((index) => index.quantity !== 0);
  // console.log(filteredNewItems);

  const totalItem = result.length;
  const startProduct = state * 9 - (9 - 1);
  const endProduct = Math.min(startProduct + 9 - 1, totalItem);

  return (
    <>
      <Header color="white" />
      <SearchBar />
      {loading && <Loading />}
      {!loading && (
        <div className="overview-page--main-functions container">
          {/* Filter */}
          <div className="overview-filter">
            <>
              <Multiselect
                options={objectArray}
                displayValue="key"
                singleSelect
                placeholder="Condition"
                onSelect={onSelect}
              />
              <hr />
              <Multiselect
                options={objectArray1}
                displayValue="key"
                singleSelect
                placeholder="Special offers"
                showCheckbox="false"
                onSelect={onSelect}
              />
              <hr />
              <Multiselect
                options={objectArray2}
                displayValue="key"
                singleSelect
                placeholder="Location"
                onSelect={onSelect}
              />
              <hr />
              {/* <button onClick={onClick} type='button' className='button'>
                Reset your option
              </button> */}
            </>
          </div>
          {/* List */}
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '100%' }}>
            {/* Count part */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-end',
              }}
            >
              {startProduct}-{endProduct} of
              <div style={{ fontWeight: 'bold' }}>&nbsp;{totalItem} products</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
              <div
                className="overview-lists"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  // backgroundColor: 'red',
                  maxWidth: '1000px',
                }}
              >
                {filteredNewItems.map((item) => (
                  <div key={item._id} className="overview-list">
                    <OverviewList
                      image={item.imageAddress[0]}
                      title={`${item.title} ${item.size}kg`}
                      delivery="free delivery"
                      description={item.description}
                      oldPrice={false}
                      price={`AU $${item.price}`}
                      id={`${item._id}`}
                      quantity={item.quantity}
                      pageType="vegetable"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Pagination /> */}
      {/* <Pagi totalItem={totalItem} value={props.state} onChange={onChangePage} /> */}
      <Pagination onChange={onChange} current={state} total={totalItem} pageSize={9} />
      <Footer />
    </>
  );
}

export default VegetablePage;
