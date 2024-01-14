import React from 'react'
import { JobImg } from "../assets";

const TermsAndConditions = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
    <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
      <div className='w-full md:2/3 2xl:w-2/4'>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Terms And Condition</h1>
        <p className='text-justify leading-7'>
        These terms and conditions ("Terms") outline the details of the introductory offer provided by KaamyabJobPortal.com ("we," "us," or "our") for the first 25,000 individuals who apply for jobs after subscription. By participating in this offer, you agree to be bound by these Terms.
        </p>
      </div>
      <img src={JobImg} alt='About' className='w-auto h-[300px]' />
    </div>

    <div className='leading-8 px-5 text-justify'>
        <ul>
          <li>
          1. Eligibility:
            - This offer is valid for the first 25,000 individuals who subscribe to KaamyabJobPortal.com.
          </li>
          <li>
          2. Offer Details:
              - The introductory offer guarantees job placement with a minimum annual salary of ₹4,00,000 and a maximum of ₹12,00,000.
          </li>
          <li>
          3. User Responsibility:
            - The function of KaamyabJobPortal.com is to guarantee job placement. It is the user's responsibility to accept or decline the job offer.
          </li>
          <li>
          4. Fine for Non-Placement:
            - If, for any reason, a subscribed user among the first 25,000 does not receive a job offer letter, KaamyabJobPortal.com will pay a fine of ₹1,00,000.
          </li>
          <li>
          5. Payment Verification:
            - The user must provide a physical copy of the payment receipt at the time of the job interview to be eligible for the offer.
          </li>
          <li>
          6. Offer Duration:
            - This introductory offer is valid for a limited time and is subject to change or termination at the discretion of KaamyabJobPortal.com.
          </li>
          <li>
          7. Offer Limitations:
            - The offer is applicable for jobs within the specified salary range. Users accepting jobs with salaries outside this range are not eligible for the guarantee or the associated fine.
          </li>
          <li>
          8. Dispute Resolution:
            - Any disputes arising from or related to this offer will be resolved through negotiation or, if necessary, through legal proceedings.
          </li>
          <li>
          9. General Terms:
          - KaamyabJobPortal.com reserves the right to modify or terminate the offer at any time without prior notice. <br />
          - Users agree to provide accurate and up-to-date information during the subscription process.
          </li>
          <li>
          10. Contact Information:
              - For inquiries or concerns related to this offer, users can contact +915224959793
          </li>
        </ul>
        <h2>By subscribing to KaamyabJobPortal.com and participating in this introductory offer, you acknowledge that you have read, understood, and agree to abide by these Terms and Conditions.</h2>
    </div>
  </div>
  )
}

export default TermsAndConditions