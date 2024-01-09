import React from 'react';

const Form2 = () => {
  return (
    <div className='flex flex-col justify-center items-center md:items-start px-10 md:px-0'>
      <form className='w-10/12'>
        <div className='pl-20'>
          <input
            className='block w-full  rounded-sm my-5 md:px-20 border border-dark-blue h-12'
            placeholder='Enter your e-mail.'
          ></input>

          <button className='flex w-full justify-center md:my-5 pt-3 rounded-md bg-bright-blue text-white h-12'>
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form2;
