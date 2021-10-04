/* eslint-disable max-len */
/* eslint-disable react/react-in-jsx-scope */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useDispatch } from 'react-redux';
import { checkoutOrderRequest, postOrderRequest } from '../../store/actions';
import url from '../../api/api';
import './StripePay.scss';

const cardStyle = {
  style: {
    base: {
      color: '#32325d',
      fontFamily: 'Arial, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#32325d',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

export default function StripePay({ price, paystatus, data }) {
  const dispatch = useDispatch();
  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const postApi = `${url}/pay`;

  const payapi = async () => {
    const paydata = {
      items: [{ id: 'shopping fee' }],
      price,
    };
    // const level = localStorage.getItem('authLevel');
    // const person = level === 'user' ? 'user' : 'employee';
    // const { token } = JSON.parse(localStorage.getItem(`${person}Info`)).data;
    const Header = {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      // Authorization: token,
    };
    const res = await axios.post(postApi, paydata, { headers: Header });
    await setClientSecret(res.data.clientSecret); // 🌟必须有这个
  };

  useEffect(() => {
    payapi();
  }, []);

  const handleChange = async (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : '');
  };

  const paySubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (payload.error) {
      setError(`${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      dispatch(checkoutOrderRequest());
    }
  };

  if (paystatus === true) {
    // console.log(JSON.stringify(data));
    // data.payment = true;
    const orderData = data;
    if(orderData) {
      orderData.payment = true;
    }
    // console.log(data.payment);
    dispatch(postOrderRequest(JSON.stringify(orderData)));
    document.location.href = '/success';
  }

  return (
    <div>
      <form id="payment-form" onSubmit={paySubmit}>
        <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
        <button className="paybutton" type="submit" disabled={processing || disabled || succeeded} id="submit">
          <span id="button-text">{processing ? <div className="spinner" id="spinner" /> : 'Confirm and pay'}</span>
        </button>

        {error && (
          <div className="card-error" role="alert">
            {error}
          </div>
        )}

        <p className={succeeded ? 'result-message' : 'result-message hidden'}>Payment succeeded</p>
      </form>
    </div>
  );
}
