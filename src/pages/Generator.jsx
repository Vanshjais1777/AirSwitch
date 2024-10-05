import React, { useState } from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { GiPowerGenerator } from "react-icons/gi"; // Generator icon
import { BsDash } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const GeneratorOption = () => {
    const [isOn, setIsOn] = useState(false); // State to manage the generator's on/off status
    const navigate = useNavigate();

    const handleBack = () => {
        navigate("/"); // Navigate back to Home
    };

    const toggleGenerator = () => {
        setIsOn(!isOn); // Toggle the generator's state
    };

    return (
        <div className='bg-gradient-to-br from-purple-500 to-blue-600 min-h-screen flex flex-col'>
            {/* Header Section */}
            <div className='flex justify-between items-center p-4 border-b border-gray-300 bg-white shadow-md'>
                <button onClick={handleBack} className='text-gray-700 hover:text-blue-600 transition-colors'>
                    <IoIosArrowBack className='text-2xl' />
                </button>
                <h1 className='font-bold text-xl'>Generator</h1>
                <SlOptionsVertical className='text-gray-700 hover:text-blue-600 transition-colors text-2xl' />
            </div>

            {/* Power Output Section */}
            <div className='flex justify-center items-center flex-grow'>
                <div className='flex font-bold text-8xl text-white animate-fade-in'>
                    <h1>{isOn ? "75" : "0"}</h1> {/* Display power output based on the generator state */}
                    <GiPowerGenerator className='ml-2 text-4xl text-green-600' />
                </div>
            </div>

            {/* Power Output Control Section */}
            <div className='flex justify-between items-center bg-white p-4 shadow-md rounded-lg mb-4 mx-4'>
                <button className='text-5xl text-gray-700 hover:text-blue-600 transition-colors' onClick={() => isOn && toggleGenerator()}>
                    <BsDash />
                </button>
                <div className='text-3xl text-gray-800'>Output</div>
                <button className='text-5xl text-gray-700 hover:text-blue-600 transition-colors' onClick={() => !isOn && toggleGenerator()}>
                    <h1>+</h1>
                </button>
            </div>

            {/* On/Off Toggle Section */}
            <div className='flex justify-center mb-4'>
                <button 
                    onClick={toggleGenerator} 
                    className={`py-2 px-4 rounded-full font-bold text-white transition-colors ${isOn ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}>
                    {isOn ? "Generator is On" : "Generator is Off"}
                </button>
            </div>

            {/* Power Button Section */}
            <div className='flex justify-center mb-4'>
                <img 
                    onClick={toggleGenerator} 
                    className={`size-24 transform transition-transform hover:scale-110 rounded-full py-2 px-2`} 
                    src="src/assets/power-on.png" 
                    alt="Power Button" 
                />
            </div>
        </div>
    );
}

export default GeneratorOption;
