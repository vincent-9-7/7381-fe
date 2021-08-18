import React from 'react';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import TestImport from './workflow/import_example/Test';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/scss" exact component={TestImport} />

        <Route path="/" exact component={HomePage} />
        <Route path="/order" exact component={HomePage} />
        {/* <ProtectedRoute path="/order" exact component={Order} /> */}
        {/* <Redirect exact from="/admin" to="/admin/dashboard" /> */}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
