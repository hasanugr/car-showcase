'use client';

import React, { useEffect, useState, Fragment, use } from 'react';
import { useRouter } from 'next/navigation';
import { Transition } from '@headlessui/react';

const NotFound = () => {
  const router = useRouter();
  let [isShowing, setIsShowing] = useState(true);

  useEffect(() => {
    setIsShowing(false);
    setTimeout(() => {
      router.push('/');
    }, 5000);
  }, []);

  useEffect(() => {
    if (isShowing) return;
    setIsShowing(true);
  }, [isShowing]);

  return (
    <main className='flex flex-col items-center justify-center w-full h-screen'>
      <div className='text-center items-center justify-center flex flex-col'>
        <h1 className='text-4xl font-bold text-center text-gray-700'>404</h1>
        <p className='text-xl text-center text-gray-700'>Page not found</p>
      </div>
      <div className='h-28 w-60 mt-2 text-center items-center justify-center flex flex-col'>
        <p className='text-md text-center text-gray-500 mb-2'>
          Redirecting to Home Page
        </p>
        <Transition
          as={Fragment}
          appear={true}
          show={isShowing}
          enter='transform transition duration-[6000ms] ease-linear'
          enterFrom='opacity-100 rotate-[-120deg]'
          enterTo='opacity-100 rotate-[1000deg]'
        >
          <svg viewBox='0 0 20 20' fill='none' className='h-16 w-16 opacity-50'>
            <path
              d='M14.9497 14.9498C12.2161 17.6835 7.78392 17.6835 5.05025 14.9498C2.31658 12.2162 2.31658 7.784 5.05025 5.05033C7.78392 2.31666 12.2161 2.31666 14.9497 5.05033C15.5333 5.63385 15.9922 6.29475 16.3266 7M16.9497 2L17 7H16.3266M12 7L16.3266 7'
              stroke='currentColor'
              strokeWidth='1.5'
            />
          </svg>
        </Transition>
      </div>
    </main>
  );
};

export default NotFound;
