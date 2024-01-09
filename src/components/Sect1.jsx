import React from 'react';
import Forms from './Forms';

const Sect1 = () => {
  return (
    <div className='md:flex md:flex-row-reverse'>
      <div className='flex justify-center items-center md:items-center pt-20 md:size-full'>
        {/* <div> */}
        <img
          src='./images/illustration-1.svg'
          alt='illust1'
          className='md:size-1/2'
        />
        {/* </div> */}
      </div>
      <div className='px-10 space-y-5 text-center md:text-left md:flex md:flex-col md:justify-center'>
        <h1 className=' '>
          All your files in one secure location, accessible anywhere.
        </h1>
        <p className=' text-desaturated-blue'>
          Fylo stores your most important files in one secure location. Access
          them wherever you need, share and collaborate with friends, family,
          and co-workers.
        </p>
        <Forms />
      </div>
    </div>
  );
};

export default Sect1;
