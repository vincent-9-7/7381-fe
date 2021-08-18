import React from 'react';
import './App.css';
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
// import ProtectedRoute from './routes/ProtectedRoute';

import HomePage from './pages/HomePage/HomePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/2" exact component={HomePage} />
        {/* <ProtectedRoute path="/order" exact component={Order} /> */}
        {/* <Redirect exact from="/admin" to="/admin/dashboard" /> */}
        <Route component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
