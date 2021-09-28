import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import FruitPage from './pages/FruitPage/Fruit';
import VegetablePage from './pages/VegetablePage/Vegetable';
import ProductPage from './pages/ProductionPage/Production';
import ShoppingCart from './pages/ShoppingCartPage/ShoppingCart';
import Checkout from './pages/CheckoutPage/Checkout';

import RoleSeclectPage from './pages/SigninPage/RoleSelectPage';
import SigninPage from './pages/SigninPage/SigninPage';
import JoinInPage from './pages/RegisterPage/JoinInPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import OverviewPage from './pages/OverviewPage/OverviewPage';

import ErrorPage from './pages/ErrorPage/ErrorPage';
import ComingSoon from './pages/ComingSoonPage/ComingSoonPage';
import PostPage from './pages/PostPage/PostPage';
import TestImport from './workflow/import_example/Test';
import Flex from './workflow/flexbox/Flex';
import Button from './workflow/button/Button';
import Saga from './workflow/saga_tutorial/Saga';
import ItemDetailPage from './pages/ItemDetailPage/ItemDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* http://localhost:8000/location?is=25
      http://localhost:8000/productions/sort */}
        <Route path="/" exact component={HomePage} />
        <Route path="/search" exact component={ProductPage} />
        <Route path="/productions" exact component={ProductPage} />
        <Route path="/productions/:id" exact component={ComingSoon} />

        <Route path="/fruit" exact component={FruitPage} />
        <Route path="/fruit/:id" exact component={ComingSoon} />

        <Route path="/vegetable" exact component={VegetablePage} />
        <Route path="/vegetable/:id" exact component={ComingSoon} />

        <Route path="/about-us" exact component={ComingSoon} />

        <Route path="/shopping-cart" exact component={ShoppingCart} />
        <Route path="/checkout" exact component={Checkout} />


        <Route path="/role-select" exact component={RoleSeclectPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/join-in" exact component={JoinInPage} />
        <Route path="/register" exact component={RegisterPage} />

        <Route path="/profile" exact component={ComingSoon} />
        <Route path="/shopping-cart" exact component={ComingSoon} />
        <Route path="/post" exact component={PostPage} />
        {/* <ProtectedRoute path="/order" exact component={Order} /> */}
        {/* <Redirect exact from="/admin" to="/admin/dashboard" /> */}

        <Route path="/scss" exact component={TestImport} />
        <Route path="/flex" exact component={Flex} />
        <Route path="/button" exact component={Button} />
        <Route path="/profile-saga-test/:id" exact component={Saga} />
        <Route path="/role-select" exact component={RoleSeclectPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/join-in" exact component={JoinInPage} />
        <Route path="/register" exact component={RegisterPage} />

        <Route path="/overview" exact component={OverviewPage} />
        {/* For test */}
        <Route path="/item" exact component={ItemDetailPage} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
