import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaFan } from "react-icons/fa"; // Fan icon for the device
import { BsDash } from "react-icons/bs";

const FanOption = () => {
  return (
    <div className='bg-gradient-to-b from-blue-300 to-blue-100 p-4 rounded-lg shadow-lg'>
      {/* Header Section */}
      <div className='m-2 border border-gray-300 rounded-lg flex justify-between items-center h-24 p-4 bg-white shadow-sm'>
        <div className='flex items-center text-gray-700'>
          <IoIosArrowBack className='text-2xl cursor-pointer hover:text-blue-600 transition duration-200' />
        </div>

        <div className='flex items-center text-gray-700'>
          <div className='font-bold text-xl'>Fan</div>
        </div>

        <div className='flex items-center text-gray-700'>
          <SlOptionsVertical className='text-2xl cursor-pointer hover:text-blue-600 transition duration-200' />
        </div>
      </div>

      {/* Fan Speed Section */}
      <div className='flex justify-center min-h-52 w-full items-center'>
        <div className='flex font-bold text-8xl'>
          <h1>3</h1> {/* Fan speed level */}
          <FaFan className='ml-1 text-4xl text-blue-600 animate-spin' /> {/* Fan icon with spin animation */}
        </div>
      </div>

      {/* Fan Speed Control Section */}
      <div className='border flex justify-between bg-white p-4 rounded-lg shadow-md'>
        <div className='p-7 text-5xl text-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-100 rounded-full transition duration-300'>
          <BsDash />
        </div>
        <div className='p-7 text-3xl text-gray-800 flex items-center justify-center'>
          <h1>Speed</h1>
        </div>
        <div className='p-7 text-5xl text-blue-500 flex items-center justify-center cursor-pointer hover:bg-blue-100 rounded-full transition duration-300'>
          <h1>+</h1>
        </div>
      </div>

      {/* Power Button Section */}
      <div className='flex justify-center'>
        <div className='m-7'>
          <img className='w-24 h-24 hover:scale-110 transition-transform duration-300' src="src/assets/power-on.png" alt="Power Button" />
        </div>
      </div>
    </div>
  );
}

export default FanOption;
