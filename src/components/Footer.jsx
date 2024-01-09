import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <div className='bg-dark-blue text-white pl-20 pt-10 pb-10 flex flex-col space-y-10'>
      <Logo />
      <div className='md:flex md:flex-row space-x-40'>
        <div className='flex flex-col space-y-6'>
          <div className='flex flex-row space-x-5'>
            <img src='./images/icon-phone.svg' alt='phone' />
            <p>Phone: +1-123-123-1234</p>
          </div>
          <div className='flex flex-row space-x-5'>
            <img src='./images/icon-email.svg' alt='email' />
            <p>example@gmail.com</p>
          </div>
        </div>

        <div className='flex flex-col space-y-2'>
          <p>About Us</p>
          <p>Jobs</p>
          <p>Press</p>
          <p>Blog</p>
        </div>

        <div className='flex flex-col space-y-2'>
          <p>Contact Us</p>
          <p>Terms</p>
          <p>Pivacy</p>
        </div>

        <div className='flex justify-center items-center pb-10'>
          <img src='./images/favicon-32x32.png' alt='icons' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
