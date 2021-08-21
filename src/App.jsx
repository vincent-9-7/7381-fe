import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import TestImport from './workflow/import_example/Test';
import Flex from './workflow/flexbox/Flex';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        {/* <Route path="/order" exact component={OrderPage} /> */}
        {/* <ProtectedRoute path="/order" exact component={Order} /> */}
        {/* <Redirect exact from="/admin" to="/admin/dashboard" /> */}
        <Route path="/scss" exact component={TestImport} />
        <Route path="/flex" exact component={Flex} />
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
