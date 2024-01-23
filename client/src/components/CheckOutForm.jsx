import React from 'react';
// import { apiRequest } from '../utils';
import { loadStripe } from '@stripe/stripe-js';
// import { useSelector } from 'react-redux';


const CheckOutForm = () => {
  // const { user } = useSelector((state) => state.user);
  
  const handleSubscription = async () => {

    try {
          const stripePromise = await loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
          const response = await fetch(
              "https://job-finder-snqi.onrender.com/api-v1/users/create-stripe-session-subscription",
            {
              method: "POST",
              headers: { "Content-Type": "Application/JSON" },
              body: JSON.stringify([
                { item: "kaam yab job portal", value: "price_1ObR6uSAHpY80JOTDTU7WpT7" },
              ]),
            });
  
      if (response.status === 409) {
        const data = await response.json();
        if (data && data.redirectUrl) {
          window.location.href = data.redirectUrl; 
        }
      } else {
        const session = await response.json();
          stripePromise.redirectToCheckout({
            sessionId: session.id
          })
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  return (
      <section>
        <div className="flex p-4 m-4">
          <div className=" flex-col items-center justify-center">
            <h3 className='text-slate-500 text-2xl font-semibold'>subscription plan</h3>
            <h5 className='flex items-center justify-center text-3xl font-bold'> ₹7500.00</h5>
          </div>
        </div>
        <div className='flex p-4 m-4'>
        {/* <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" /> */}
        <button className='flex-1 py-2 rounded-xl text-white items-center justify-center bg-blue-500 ' onClick={() => handleSubscription()}>
           Subscribe Now! 
        </button>
        </div>
      </section>
    );
}
export default CheckOutForm ;
