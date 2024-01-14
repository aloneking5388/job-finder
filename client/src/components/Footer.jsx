import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { footerLinks } from "../utils/data";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { GooglePlay } from "../assets/index"

const Footer = () => {
  return (
    <footer className='text-white mp-20'>
      <div className='overflow-x-hidden -mb-0.5'>
        <svg
          preserveAspectRatio='none'
          viewBox='0 0 1200 120'
          xmlns='http://www.w3.org/2000/svg'
          style={{
            fill: "#1d4ed8",
            width: "125%",
            height: 112,
            transform: "rotate(180deg)",
          }}
        >
          <path d='M321.39 56.44c58-10.79 114.16-30.13 172-41.86 82.39-16.72 168.19-17.73 250.45-.39C823.78 31 906.67 72 985.66 92.83c70.05 18.48 146.53 26.09 214.34 3V0H0v27.35a600.21 600.21 0 00321.39 29.09z' />
        </svg>
      </div>

      <div className='bg-[#1d4ed8] '>
        <div className='container px-5 py-20 mx-auto '>
          <div className='w-full flex flex-wrap gap-10 justify-between -mb-10 -px-4'>
              <div className='w-auto px-4 '>
                <Link to="/" className='font-bold text-white tracking-widest text-xl gap-6'>
                  Kaam yab <span className="text-slate-400">job portal</span>
                </Link>
                <div className='mb-1 text-sm flex flex-col'>
                    <p> kaamyabjobportal@gmail.com</p>
                    <p> +91 5224959793</p>
                </div>
              </div>
              <div className='w-auto px-4 '>
                <h1 className="font-bold ">POLICY</h1>
                <div className='mb-6 flex flex-col gap-3 '>
                  <ul className="text-sm font-medium">
                    <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                    <li><Link to="/refund-policy">Refund Policy</Link></li>
                    <li><Link to="/terms-and-condition">TERMS AND CONDITIONS</Link></li>
                  </ul>
                </div>
              </div>
              <div className='w-auto px-4 mr-8'>
                <h1 className="font-bold ">SUPPORT</h1>
                <div className='mb-6 flex flex-col gap-3 '>
                  <ul className="text-sm font-medium">
                    <li><Link to="/contact-us">Contact Us</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

        <div className=''>
          <p className='container px-5 mx-auto text-white mt-2 '>
            Subscribe to our Newsletter
          </p>

          <div className='container mx-auto px-5 pt-6 pb-8 flex flex-wrap items-center justify-between '>
            <div className='w-full md:w-2/4 lg:w-1/3 h-16 flex items-center justify-center md:justify-start '>
              <TextInput
                styles='w-full flex-grow md:w-40 2xl:w-64 bg-gray-100 sm:mr-4 md-2'
                type='email'
                placeholder='Email Address'
              />

              <CustomButton
                title='Subscribe'
                containerStyles={
                  "block bg-[#001a36] text-white px-5 py-2.5 text-md rounded hover:bg-blue-800 focus:potline-none flex-col items-center mt-2"
                }
              />
            </div>
            <div className="inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
              <img src={GooglePlay} alt="googleplay" className="w-36 h-16 hover:scale-125 ease-in-out duration-300"/>
            </div>

            <span className='inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto'>
              <a href="https://www.facebook.com/profile.php?id=61553582699069&mibextid=ZbWKwL" className='text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaFacebookF />
              </a>
              <a href="https://www.youtube.com/@Kaamyabjobportal" className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaYoutube />
              </a>
              <a href="https://www.instagram.com/kaamyabjobportal?igsh=ZHVnOWZramFybmN4" className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FiInstagram />
              </a>

              <a href="https://www.linkedin.com/in/kaamyabjob-portal-29378629b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className='ml-3 text-white text-xl  hover:scale-125 ease-in-out duration-300'>
                <FaLinkedinIn />
              </a>
            </span>
          </div>
        </div>

        <div className='bg-[#001a36]'>
          <div className='container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row'>
            <p className='text-gray-300 text-sm text-center sm:text-left'>
              &copy; 2023 KaamYab Job Portal —
              <a
                href='https://kaalcoders.com'
                className='text-[#1199e7] ml-1'
                target='_blank'
                rel='noopener noreferrer'
              >
                @kaalcoders
              </a>
            </p>

            <span className='sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-300 text-sm'>
              Designed by Alone King
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
