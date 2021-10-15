// import React, {Component} from 'react';
// import Header from '../../components/PageHeader/PageHeader';
// import Footer from '../../components/PageFooter/PageFooter';
// import ProductList from '../../components/Product/ProductList';

// class FruitPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     const { history } = this.props;
//     return (
//       <>
//         <Header />
//         {/* 1:Fruit 2:Vegetable 3:ALL */}
//         <ProductList productType={1} history={history} />
//         <Footer />
//       </>
//     );
//   }
// }

// export default FruitPage;
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from 'rc-pagination';
import { Multiselect } from 'multiselect-react-dropdown';
import "rc-pagination/assets/index.css";
import "../../components/Overview/Pagination.scss";
import { getAllFruitRequest } from '../../store/actions';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import OverviewList from '../../components/Overview/Overview';
import Loading from '../../components/Loading/Loading';
import SearchBar from '../../components/SearchBar/SearchBar';

function FruitPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllFruitRequest());
  }, []);
  const loading = useSelector((state) => state.itemslist.loading);
  const fruits = useSelector((state) => state.itemslist.itemDetails);

  const objectArray = [
    { key: "Processed products", value: "Group 1" },
    { key: "B-grade products", value: "Group 1" }];

  const objectArray1 = [
    { key: "Free Delivery", value: "Group 1" },
    { key: "On Sale", value: "Group 1" }];

  const objectArray2 = [
    { key: "Australia", value: "Group 1" },
    { key: "Queensland", value: "Group 1" }];

  const [state, setState] = React.useState(1);
  const [option, setOption] = React.useState([{ key: "All", value: "Group 1" }]);

  const onChange = page => {
    console.log(page);
    setState(page);
  };

  const onSelect = option => {
    console.log(option);
    setOption(option);
  };

  // const onClick = () => {
  //   document.location.href = './fruit';
  // };

  // console.log(fruits.length);

  // 下面这行可以从filter取到要的哪个筛选条件：
  const filter = option[0].key;
  // console.log(filter);

  // 把取到的东西从对象变成数组
  const conditionFilter = Object.values(fruits);
  // console.log(conditionFilter);

  // 改变数组里的条件
  const changedFilter = conditionFilter.filter(value => value.postcode === 1231);
  // console.log(changedFilter);

  // filter 需要问一下其他人
  let result = {};
  if (filter === 'Processed products') {
    result = conditionFilter.filter(value => value.condition === 'Processed');
  } else if (filter === 'B-grade products') {
    result = conditionFilter.filter(value => value.condition === 'B-grade');
  } else if (filter === 'Free Delivery') {
    result = conditionFilter.filter(value => value.category === 'Fruit');
  } else if (filter === 'On Sale') {
    result = conditionFilter.filter(value => value.state === 'QLD');
  } else if (filter === 'Australia') {
    result = conditionFilter.filter(value => value.category === 'Fruit');
  } else if (filter === 'Queensland') {
    result = conditionFilter.filter(value => value.state === 'QLD');
  }
  else {
    result = conditionFilter.filter(value => value.category === 'Fruit');
  }

  // console.log(result);
  // Overview第六行的delivery被默认设置成了free
  // console.log(fruits[0].delivery);
  // console.log(conditionFilter);
  // console.log(changed);


  // console.log(state);

  const newItems = result.slice((state - 1) * 9, state * 9);
  // console.log(newItems);

  const filteredNewItems = newItems.filter((index) => index.quantity !== 0);
  // console.log(filteredNewItems);

  // Sort:
  // const sorted = filteredNewItems.sort


  const totalItem = result.length;
  // Totalitem = total, numberOfPerPage = 9, page = state;
  const startProduct = (state * 9) - (9 - 1);
  const endProduct = Math.min(startProduct + 9 - 1, totalItem);
  // console.log(`${startProduct}-${endProduct} of ${totalItem} products`);

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
                placeholder='Condition'
                onSelect={onSelect}
              />
              <hr />
              <Multiselect
                options={objectArray1}
                displayValue="key"
                singleSelect
                placeholder='Special offers'
                showCheckbox='false'
                onSelect={onSelect}
              />
              <hr />
              <Multiselect
                options={objectArray2}
                displayValue="key"
                singleSelect
                placeholder='Location'
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
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
            }}>
              {startProduct}-{endProduct} of
              <div style={{ fontWeight: "bold" }}>&nbsp;{totalItem} products</div>
            </div>
            <div className='overview-lists' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
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
                    condition={`${item.condition}`}
                    quantity={item.quantity}
                    pageType="fruit" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <Pagination
        onChange={onChange}
        current={state}
        total={totalItem}
        pageSize={9}
      />
      <Footer />
    </>);
};

export default FruitPage;