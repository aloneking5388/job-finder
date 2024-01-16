
import React from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubscription = async (priceId) => {
    const { data } = await axios.post('http://localhost:5000/api-v1/users/create-checkout-session', { priceId });

    const result = await stripe.redirectToCheckout({
      sessionId: data.id,
    });

    if (result.error) {
      console.error(result.error.message);
    }
  };

  return (
    <div className='container items-center'>
      <h2>Subscription Checkout</h2>
      <button className='bg-green-400 rounded-xl p-2' onClick={() => handleSubscription('price_1OYPLvSAHpY80JOT0sx7MTtn')}>
        Subscribe
      </button>
      <div>
        <CardElement />
      </div>
    </div>
  );
};

export default CheckOutForm;
