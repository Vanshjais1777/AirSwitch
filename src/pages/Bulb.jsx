import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaLightbulb } from "react-icons/fa"; // Bulb icon
import { BsDash } from "react-icons/bs";

const BulbOption = () => {
  return (
    <div className='bg-gradient-to-b from-yellow-300 to-yellow-100 p-4 rounded-lg shadow-lg'>
      {/* Header Section */}
      <div className='m-2 border border-gray-300 rounded-lg flex justify-between items-center h-24 p-4 bg-white shadow-sm'>
        <div className='flex items-center text-gray-700'>
          <IoIosArrowBack className='text-2xl cursor-pointer hover:text-yellow-600' />
        </div>

        <div className='flex items-center text-gray-700'>
          <div className='font-bold text-xl'>Bulb</div>
        </div>

        <div className='flex items-center text-gray-700'>
          <SlOptionsVertical className='text-2xl cursor-pointer hover:text-yellow-600' />
        </div>
      </div>

      {/* Bulb Status Section */}
      <div className='flex justify-center min-h-52 w-full items-center'>
        <div className='flex font-bold text-8xl ml-6'>
          <FaLightbulb className='text-yellow-500' /> {/* Yellow bulb for "on" state */}
        </div>
      </div>

      {/* On/Off Control Section */}
      <div className='border flex justify-between bg-white p-4 rounded-lg shadow-md'>
        <div className='p-7 text-5xl text-yellow-500 flex items-center justify-center cursor-pointer hover:bg-yellow-200 rounded-full transition'>
          <BsDash />
        </div>
        <div className='p-7 text-3xl text-gray-800 flex items-center justify-center'>
          <h1>Power</h1>
        </div>
        <div className='p-7 text-5xl text-yellow-500 flex items-center justify-center cursor-pointer hover:bg-yellow-200 rounded-full transition'>
          <h1>+</h1>
        </div>
      </div>

      {/* Power Button */}
      <div className='flex justify-center'>
        <div className='m-7'>
          <img className='w-24 h-24' src="src/assets/power-on.png" alt="Power Button" />
        </div>
      </div>
    </div>
  );
}

export default BulbOption;
