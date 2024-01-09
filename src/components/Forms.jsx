import React from 'react';

const Forms = () => {
  return (
    <div className='flex flex-col justify-center items-center md:items-start px-10 md:px-0'>
      <form className='w-10/12'>
        <div className='md:flex md:flex-row space-x-5'>
          <input
            className='block w-full md:w-2/3 rounded-sm my-5 border border-dark-blue h-12'
            placeholder='   Enter your e-mail.'
          ></input>

          <button className='flex w-full md:w-1/3 justify-center md:my-5 pt-3 rounded-md bg-bright-blue text-white h-12'>
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
};

export default Forms;
