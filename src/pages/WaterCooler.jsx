import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { FaWater } from "react-icons/fa";
import { BsDash } from "react-icons/bs";

const WaterCooler = () => {
    return (
        <div>
            {/* Header Section */}
            <div className='m-2 border border-black flex justify-between h-24'>
                <div className='flex items-center'>
                    <IoIosArrowBack className='' />
                </div>

                <div className='flex items-center'>
                    <div className='font-bold'>Water Cooler</div>
                </div>

                <div className='flex items-center'>
                    <SlOptionsVertical />
                </div>
            </div>

            {/* Temperature Section */}
            <div className='flex justify-center min-h-52 w-full items-center'>
                <div className='flex font-bold text-8xl ml-6'>
                    <h1>10</h1>
                    <span className='ml-1 text-4xl'>°C</span>
                </div>
            </div>

            {/* Controls Section */}
            <div className='border flex justify-between'>
                <div className='p-7 text-5xl'>
                    <BsDash />
                </div>
                <div className='p-7 text-3xl mr-4'>
                    <h1>Temp</h1>
                </div>
                <div className='p-7 text-5xl'>
                    <h1>+</h1>
                </div>
            </div>

            {/* Water Icon Section */}
            <div className='flex justify-center'>
                <div className='m-7'>
                    <FaWater className='text-6xl' />
                </div>
            </div>
        </div>
    );
}

export default WaterCooler;