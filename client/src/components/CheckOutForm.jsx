import React from 'react';

const CheckOutForm = () => {

  return (
    <section>
    <div className="flex p-4 m-4">
      <div className=" flex-col items-center justify-center">
        <h3 className='text-slate-500 text-2xl font-semibold'>subscription plan</h3>
        <h5 className='flex items-center justify-center text-3xl font-bold'> ₹7500.00</h5>
      </div>
    </div>
    <form className='flex p-4 m-4'  method="POST">
      {/* Add a hidden field with the lookup_key of your Price */}
      <input type="hidden" name="lookup_key" value="{{PRICE_LOOKUP_KEY}}" />
      <button className='flex-1 py-2 rounded-xl text-white items-center justify-center bg-blue-500 ' id="checkout-and-portal-button" type="submit">
        Checkout
      </button>
    </form>
  </section>
  );
};

export default CheckOutForm;
