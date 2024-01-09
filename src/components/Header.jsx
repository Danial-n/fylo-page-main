import React from 'react';

const Header = () => {
  return (
    <div className='flex flex-row justify-between p-5 md:px-10'>
      <nav className='flex items-start px-5 space-x-4 '>
        <img
          className='object-contain size-16 md:size-24'
          src='./images/logo.svg'
          alt='logo'
        />
      </nav>
      <nav className='flex items-start space-x-4 py-5 px-5'>
        <a href='/home' className='px-1 py-2'>
          Features
        </a>
        <a href='/home' className='px-1 py-2'>
          {' '}
          Team
        </a>
        <a href='/home' className='px-1 py-2'>
          Sign In
        </a>
      </nav>
    </div>
  );
};

export default Header;
