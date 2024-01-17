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
    <div className='flex bg-slate-200 w-96 rounded-xl container flex-col  items-center justify-center'>
      <h2 classname='flex font-bold my-4 text-2xl text-slate-400 justify-center items-center'>Subscription Checkout</h2>
      <div className='w-72 h-60 '>
        <CardElement className='w-60 h-32 flex-col' />
        <button className='bg-green-400 rounded-xl p-2' onClick={() => handleSubscription('price_1OYPLvSAHpY80JOT0sx7MTtn')}>
        Subscribe
      </button>
      </div>
    </div>
  );
};

export default CheckOutForm;
