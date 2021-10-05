import React, { Component } from 'react';
import Header from '../../components/PageHeader/PageHeader';
import Footer from '../../components/PageFooter/PageFooter';
import PageTitle from '../../components/PageTitle/PageTitle';
import CheckoutForm from '../../components/Purchase/CheckoutForm';
import CalculatTotal from '../../components/ShoppingCart/CalculatTotal';
import './Checkout.scss';

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCallback = this.handleCallback.bind(this); // class子传父 - 1/6
  }

  handleCallback(childData) {
    // class子传父 - 2/6
    this.setState({ orderData: childData });
  }

  render() {
    // const { total } = this.props;
    const totalPrice = window.sessionStorage.getItem('total');

    const { orderData } = this.state; // class子传父 - 3/6
    // console.log(orderData); // class子传父 - 4/6

    const checkoutItems = JSON.parse(window.sessionStorage.getItem('checkout_products'));
    const orderItems = [];
    let itemNum = 0;
    checkoutItems.forEach((product) => {
      itemNum += product.quantity;
    });

    // 判断是否填满require信息，不填满不显示右侧支付按钮
    let showPay = false;

    // 当子组件不为空，赋值价格和username和购买产品，其他订单信息在子组件完成赋值
    if (orderData) {
      orderData.username = 'PassUserName';
      orderData.price = totalPrice;
      checkoutItems.forEach((product) => {
        const obj = {};
        obj[product._id] = [product.condition, product.quantity];
        orderItems.push(obj);
      });
      orderData.orderList = orderItems; // 将选中item添加进列表并赋值

      if (
        orderData.firstName !== '' &&
        orderData.lastName !== '' &&
        orderData.address1 !== '' &&
        orderData.country !== '' &&
        orderData.city !== '' &&
        orderData.state !== '' &&
        orderData.postcode !== ''
      ) {
        showPay = true;
      }
    }

    return (
      <div>
        <Header />
        <PageTitle text="Checkout" background="green-bg" />

        <div className="checkout container">
          <div className="checkout__left">
            {/* // class子传父 - 5/6, 6在下一页 */}
            <CheckoutForm parentCallback={this.handleCallback} />
          </div>

          <div className="checkout__right">
            {/* Step:1 第一次结账预览 2:第二次结账 */}
            <CalculatTotal
              step={2}
              num={itemNum}
              total={totalPrice}
              order={orderData}
              postageFee="Free"
              history={null}
              showPay={showPay}
            />
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default Checkout;
