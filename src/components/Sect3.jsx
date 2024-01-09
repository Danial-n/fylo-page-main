import React from 'react';
import Form2 from './Form2.jsx';

const Sect3 = () => {
  return (
    <div className='bg-desaturated-blue px-5 py-14 md:flex md:flex-row'>
      <div className='md:flex md:flex-col'>
        <h2 className='text-center md:text-left text-white md:p-5 '>
          Get early access today{' '}
        </h2>
        <p className='text-white text-center md:text-left p-5'>
          It only takes a minute to sign up and our free starter tier is
          extremely generous. If you have any questions, our support team would
          be happy to help you.
        </p>
      </div>
      <Form2 />
    </div>
  );
};

export default Sect3;
