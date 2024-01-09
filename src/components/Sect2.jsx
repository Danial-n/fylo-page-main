import React from 'react';

const Sect2 = () => {
  return (
    <div>
      <div>
        <img
          src='./images/bg-curve-mobile.svg'
          //   md:src='/images/bg-curve-.svg
          alt='curve-mb'
          className='w-full pt-20'
        />
      </div>

      <div className='bg-light-grayish pb-10 text-left flex flex-col space-y-5 md:flex-row-reverse'>
        <div className='flex justify-center items-center'>
          <img
            src='./images/illustration-2.svg'
            alt='illust-2'
            className='p-10'
          />
        </div>
        <div className='md:flex md:flex-col '>
          <h3 className='text-center md:text-left px-10 py-5'>
            Stay productive, wherever you are
          </h3>
          <div className='px-10 space-y-5 text-desaturated-blue'>
            <p>
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p>
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required!
            </p>
          </div>
          <a
            href='/'
            className='flex flex-row justify-center underline p-5 text-moderate-cyan'
          >
            See how Fylo works
            <img src='./images/icon-arrow.svg' alt='arrow' />
          </a>

          <div className='flex flex-col justify-center bg-white w-10/12 mx-10 p-5 rounded-md shadow-md space-y-5'>
            <img
              src='./images/icon-quotes.svg'
              alt='quote'
              className='size-5'
            />
            <p>
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            <div className='flex flex-row p-5'>
              <img
                src='./images/avatar-testimonial.jpg'
                alt='avatar'
                className='rounded-full size-10 mr-5 mt-1'
              />
              <div className='flex flex-col'>
                <p>Kyle Burton </p>
                <p>Founder & CEO, Huddle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sect2;
