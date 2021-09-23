import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import ProductPage from './pages/ProductPage/Product';
import ShoppingCart from './pages/ShoppingCartPage/ShoppingCart';

import RoleSeclectPage from './pages/SigninPage/RoleSelectPage';
import SigninPage from './pages/SigninPage/SigninPage';
import JoinInPage from './pages/RegisterPage/JoinInPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

import ErrorPage from './pages/ErrorPage/ErrorPage';
import ComingSoon from './pages/ComingSoonPage/ComingSoonPage';
import UploadImages from './pages/PostPage/PostPage';
import TestImport from './workflow/import_example/Test';
import Flex from './workflow/flexbox/Flex';
import Button from './workflow/button/Button';
import Saga from './workflow/saga_tutorial/Saga';

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
        <Route path="/productions/fruit/:id" exact component={ComingSoon} />
        <Route path="/productions/vegetable/:id" exact component={ComingSoon} />
        <Route path="/about-us" exact component={ComingSoon} />

        <Route path="/shopping-cart" exact component={ShoppingCart} />
        <Route path="/test-cart2" exact component={ProductPage} />


        <Route path="/role-select" exact component={RoleSeclectPage} />
        <Route path="/signin" exact component={SigninPage} />
        <Route path="/join-in" exact component={JoinInPage} />
        <Route path="/register" exact component={RegisterPage} />

        <Route path="/profile" exact component={ComingSoon} />
        <Route path="/shopping-cart" exact component={ComingSoon} />
        <Route path="/upload" exact component={UploadImages} />
        {/* <ProtectedRoute path="/order" exact component={Order} /> */}
        {/* <Redirect exact from="/admin" to="/admin/dashboard" /> */}

        <Route path="/scss" exact component={TestImport} />
        <Route path="/flex" exact component={Flex} />
        <Route path="/button" exact component={Button} />
        <Route path="/profile-saga-test/:id" exact component={Saga} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
