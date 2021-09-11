import React from 'react';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import ReactDOM from 'react-dom';
import './assets/scss/main.scss';
import App from './App';
import store from './store/store';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <CookiesProvider>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
