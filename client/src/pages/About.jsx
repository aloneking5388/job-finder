import React from "react";
import { JobImg } from "../assets";

const About = () => {
  return (
    <div className='container mx-auto flex flex-col gap-8 2xl:gap-14 py-6 '>
      <div className='w-full flex flex-col-reverse md:flex-row gap-10 items-center p-5'>
        <div className='w-full md:2/3 2xl:w-2/4'>
          <h1 className='text-3xl text-blue-600 font-bold mb-5'>About Us</h1>
          <p className='text-justify leading-7'>
          Kaamyab job portal is intended only to serve as a preliminary medium of contact and exchange of information for its users / members / visitors who have a bona fide intention to contact and/or be contacted for the purposes related to genuine existing job vacancies and for other career enhancement services.
          </p>
        </div>
        <img src={JobImg} alt='About' className='w-auto h-[300px]' />
      </div>

      <div className='leading-8 px-5 text-justify'>
        <p>
        PURPOSE:
USE TO BE IN ACCORDANCE WITH THE PURPOSE

Kaamyab job portal(and related products) or service or product that is subscribe to or used (whether the same is paid for by you or not) is meant for the Purpose and only the exclusive use of the subscriber/registered user , Copying or downloading or recreating or sharing passwords or sublicensing or sharing in any manner which is not in accordance with these terms, is a misuse of the platform or service or product and we reserves its rights to act in such manner as to protect its loss of revenue or reputation or claim damages including stopping your service or access and reporting to relevant authorities. In the event you are found to be copying or misusing or transmitting or crawling any data or photographs or graphics or any information available on kaamyabjobportal.com for any purpose other than that being a bonafide Purpose, we reserve the right to take such action that we deem fit including stopping access and claiming damages


The site is a public site with free access and we assumes no liability for the quality and genuineness of responses. Kaamyab job portal cannot monitor the responses that a person may receive in response to information he/she has displayed on the site. The individual/company would have to conduct its own background checks on the bonafide nature of all response(s)

You give us permission to use the information about actions that you have taken on kaamyabjobportal.com in connection with ads, offers and other content (whether sponsored or not) that we display across our services, without any compensation to you. We use data and information about you to make relevant suggestions and recommendation to you and others . 

The platform may contain links to third party websites, these links are provided solely as convenience to You and the presence of these links should not under any circumstances be considered as an endorsement of the contents of the same, if You chose to access these websites you do so at your own risk.

Whilst using this platform an obligation is cast upon you to only provide true and correct information and in the case of creating a profile you undertake to at all times keep the information up to date. Kaamyab job portal will not be liable on account of any inaccuracy of information on this web site. It is the responsibility of the visitor to further research the information on the site. Any breach of privacy or of the information provided by the consumer to kaamyabjobportal.com to be placed on the website by technical or any other means is not the responsibility of us .kaamyabjobportal.com does not guarantee confidentiality of information provided to it by any person acquiring/using all/any information displayed on the kaamyabjobportal.com website or any of its other websites / domains owned and operated by kaamyab job portal


Kaamyabjobportal.com does not share personally identifiable data of any individual with other companies / entities without obtaining permission except with those acting as our agents.Kaamyab job portal shall share all such information that it has in its possession in response to legal process, such as a court order or subpoena. The user shall not utilize the services offered by kaamyabjobportal.com in any manner so as to impair the interests and functioning of kaamyabjobportal.com . The user undertakes not to duplicate, download publish, modify and distribute material on kaamyab job portal unless specifically authorized by us in this regard


The user undertakes to use kaamyabjobportal.com for his/her own purposes. Using content from kaamyabjobportal.com for derivative works with a commercial motive without prior written consent from kaamyab job portal is strictly prohibited.

Users undertake that the services offered by kaamyab job portal  shall not be utilized to upload, post, email, transmit or otherwise make available either directly or indirectly, any unsolicited bulk e-mail or unsolicited commercial e-mail. Kaamyabjobpotal.com reserves the right to filter and monitor and block the emails sent by you/user using the servers maintained by us to relay emails. All attempts shall be made by kaamyabjobportal.com and the user to abide by International Best Practices in containing and eliminating Spam.


Users shall not spam the platform maintained by kaamyabjobportal.com or indiscriminately and repeatedly post jobs/forward mail indiscriminately etc. Any conduct of the user in violation of this clause shall entitle us to forthwith terminate all services to the user without notice and to forfeit any amounts paid by him.

The user shall not upload, post, transmit, publish, or distribute any material or information that is unlawful, or which may potentially be perceived as being harmful, threatening, abusive, harassing, defamatory, libelous, vulgar, obscene, or racially, ethnically, or otherwise objectionable.

The user expressly states that the resume/insertion or information/ data being fed into the network of kaamyab job portal by the user is correct and complete in all respects and does not contain any false, distorted, manipulated, fraudulent or misleading facts or averments. Kaamyabjobportal.com expressly disclaims any liability arising out of the said resume insertion/information/ data so fed into the network of kaamyab job portal. by the user. Further, the user agrees to indemnify kaamyab job portal. for all losses incurred by us. due to any false, distorted, manipulated, defamatory, libelous, vulgar, obscene, fraudulent or misleading facts or otherwise objectionable averments made by the user on the network of kaamyabjobportal.com

The User is solely responsible for maintaining confidentiality of the User password and user identification and all activities and transmission performed by the User through his user identification and shall be solely responsible for carrying out any online or off-line transaction involving credit cards / debit cards or such other forms of instruments or documents for making such transactions and kaamyab job portal assumes no responsibility or liability for their improper use of information relating to such usage of credit cards / debit cards used by the subscriber online / off-line.


The User/Subscriber/Visitor to kaamyabjobportal.com and/or its affiliated websites does hereby specifically agree that he/she shall, at all times, comply with the requirements of the Information Technology Act, 2000 as also rules, regulations, guidelines, bye laws and notifications made thereunder, while assessing or feeding any resume/ insertion or information/data into the computers, computer systems or computer network of kaamyab job portal . The said User/ subscriber/ visitor to kaamyabjobportal.com and/or its affiliated websites does further unequivocally declare that in case he violates any provisions of the Information Technology Act, 2000 and/or rules, regulations, guidelines, byelaws and notifications made thereunder, he shall alone be responsible for all his acts, deeds and things and that he alone shall be liable for civil and criminal liability there under or under any other law for the time being in force.


The User is solely responsible for obtaining, at his own cost, all licenses, permits, consents, approvals and intellectual property or other rights as may be required by the user for using the Service.
        </p>
      </div>
    </div>
  );
};

export default About;
