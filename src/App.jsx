import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import Product from './pages/ProductPage/Product';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import ComingSoon from './pages/ComingSoonPage/ComingSoonPage';

import TestImport from './workflow/import_example/Test';
import Flex from './workflow/flexbox/Flex';
import Button from './workflow/button/Button';
import Saga from './workflow/saga_tutorial/Saga';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/productions" exact component={Product} />
        <Route path="/productions/:id" exact component={ComingSoon} />
        <Route path="/productions/fruit/:id" exact component={ComingSoon} />
        <Route path="/productions/vegetable/:id" exact component={ComingSoon} />
        <Route path="/about-us" exact component={ComingSoon} />

        <Route path="/sign-in" exact component={ComingSoon} />
        <Route path="/join" exact component={ComingSoon} />
        <Route path="/profile" exact component={ComingSoon} />
        <Route path="/shopping-cart" exact component={ComingSoon} />
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
