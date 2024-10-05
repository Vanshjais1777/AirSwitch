import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { MdTv } from "react-icons/md";
import { BsDash } from "react-icons/bs";

const Tv = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='m-2 border border-black flex justify-between h-24'>
        <div className='flex items-center'>
          <IoIosArrowBack className='' />
        </div>

        <div className='flex items-center'>
          <div className='font-bold'>TV</div>
        </div>

        <div className='flex items-center'>
          <SlOptionsVertical />
        </div>
      </div>

      {/* Volume Section */}
      <div className='flex justify-center min-h-52 w-full items-center'>
        <div className='flex font-bold text-8xl ml-6'>
          <h1>50</h1>
          <span className='ml-1 text-4xl'>%</span>
        </div>
      </div>

      {/* Controls Section */}
      <div className='border flex justify-between'>
        <div className='p-7 text-5xl'>
          <BsDash />
        </div>
        <div className='p-7 text-3xl mr-4'>
          <h1>Volume</h1>
        </div>
        <div className='p-7 text-5xl'>
          <h1>+</h1>
        </div>
      </div>

      {/* TV Icon Section */}
      <div className='flex justify-center'>
        <div className='m-7'>
          <MdTv className='text-6xl' />
        </div>
      </div>
    </div>
  );
}

export default Tv;
