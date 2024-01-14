import React from 'react'
import { JobImg } from "../assets";

const RefundPolicy = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
    <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
      <div className='w-full md:2/3 2xl:w-2/4'>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Refund Policy</h1>
      </div>
      <img src={JobImg} alt='About' className='w-auto h-[300px]' />
    </div>

    <div className='leading-8 px-5 text-justify'>
      <ul>
        <li>
          1. Transaction Failure:
            - In the event of a transaction failure during the subscription process on Kaamyab Job Portal, the user's account will be credited with the respective amount within T+3 business days.
        </li>
        <li>
        2. Eligibility for Refund:
          - Refunds are applicable only for transactions that result in a failure or technical error.
          - Successful transactions leading to a subscribed membership are non-refundable.
        </li>
        <li>
        3. Refund Process:
          - Users experiencing a failed transaction should contact our customer support at +915224959793 within 7 days of the failed transaction.
          - Provide transaction details, including transaction ID, date, and amount for prompt assistance
        </li>
        <li>
        4. Refund Method:
          - Refunds will be processed through the original payment method used during the transaction.
        </li>
        <li>
        5. Professional Policy:
          - Kaamyab Job Portal is committed to maintaining the utmost professionalism in all interactions with users.
          - Our team is dedicated to resolving any issues promptly and efficiently to ensure a positive user experience.
        </li>
        <li>
        6. Dispute Resolution:
          - Users dissatisfied with our services or refund process can reach out to our customer support team at kaamyabjobportal@gmail.com
          - Disputes will be handled promptly, professionally, and in accordance with applicable laws.
        </li>
        <li>
        7. Policy Updates:
          - Kaamyab Job Portal reserves the right to update and modify the refund policy at its discretion. Users will be notified of any changes through our official communication channels.
        </li>
        <li>
        8. Contact Information:
          - For any refund-related queries or assistance, please contact our customer support team at +915224959793
        </li>
      </ul>
      <p>By using Kaamyab Job Portal services, users agree to abide by this refund policy. This policy is effective from 18 December 2023 and is subject to change with prior notice.</p>
      <h3>Kaamyab Job Portal - Empowering Your Job Search Journey</h3>
    </div>
  </div>
  )
}

export default RefundPolicy