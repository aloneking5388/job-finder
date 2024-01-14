import React from 'react'
import { JobImg } from "../assets";

const PrivacyPolicy = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
    <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
      <div className='w-full md:2/3 2xl:w-2/4'>
        <h1 className='text-3xl text-blue-600 font-bold mb-5'>Privacy Policy</h1>
      </div>
      <img src={JobImg} alt='About' className='w-auto h-[300px]' />
    </div>

    <div className='leading-8 px-5 text-justify'>
      <ul>
        <li>1. Information Collection:
              - Kaamyab Job Portal collects personal information such as name, email address, and contact details during the registration process and subscription.
        </li>
        <li>
        2. Usage of Information:
            - The collected information is used to provide personalized job recommendations, communicate updates, and enhance the overall user experience
        </li>
        <li>
        3. Data Security:
            - Kaamyab Job Portal employs industry-standard security measures to protect user data from unauthorized access, disclosure, alteration, or destruction.
        </li>
        <li>
        4. Cookies and Tracking:
            - We may use cookies and tracking technologies to enhance user experience, analyze trends, and administer the website. Users can modify browser settings to disable cookies.
        </li>
        <li>
        5. Third-Party Services:
          - Kaamyab Job Portal may engage third-party services for analytics, marketing, or other purposes. These service providers adhere to our privacy standards.
        </li>
        <li>
        6. User Controls:
          - Users have the right to access, correct, or delete their personal information. Contact kaamyabjobportal@gmail.com for assistance.
        </li>
        <li>
        7. Data Retention:
          - Kaamyab Job Portal retains user data for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
        </li>
        <li>
        8. Information Sharing:
          - Kaamyab Job Portal does not sell, trade, or rent personal information to third parties. Information may be shared with trusted partners for specific purposes outlined in this policy.
        </li>
        <li>
        9. Compliance:
          - Kaamyab Job Portal complies with applicable data protection laws and regulations. Users have the right to lodge a complaint with a supervisory authority.
        </li>
        <li>
        10. Updates to Privacy Policy:
            - Kaamyab Job Portal reserves the right to update this privacy policy to reflect changes in data handling practices. Users will be notified of significant changes through our official channels.
        </li>
        <li>
        11. Contact Information:
            - For privacy-related inquiries, contact our Data Protection Officer at +915224959793
        </li>
      </ul>
      <p>By using Kaamyab Job Portal services, users consent to the practices outlined in this privacy policy. This policy is effective from 18 December 2023 and is subject to change with prior notice.</p>
      <h3>Kaamyab Job Portal - Your Privacy, Our Priority!</h3>
    </div>
  </div>
  )
}

export default PrivacyPolicy