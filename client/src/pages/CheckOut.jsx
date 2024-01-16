import React from 'react'
import CheckOutForm from '../components/CheckOutForm'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51OYPFRSAHpY80JOTap99gc1r3bVRLLTZodrUdedeIvqM2RTgavl90AkttZAbtLXG5D1pKSmO2Kx9B1QjCTmkJfIQ0028DfYuQW');

const CheckOut = () => {

  return (
    <div className='flex w-full justify-center items-center' >
         <Elements  stripe={stripePromise}>
              <CheckOutForm className='flex items-center justify-center' />
          </Elements>
    </div>
  )
}

export default CheckOut