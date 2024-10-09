import React, { useEffect, useState } from 'react';
import DevicesBtn from '../components/DevicesBtn';
import Logo from '../components/Logo';
import { TbAirConditioning } from "react-icons/tb";
import { FaTv } from "react-icons/fa6";
import { FaFan } from "react-icons/fa";
import { LuProjector } from "react-icons/lu";
import { IoCamera } from "react-icons/io5";
import { GiCooler, GiSolarPower, GiPowerGenerator } from "react-icons/gi";
import { FaLightbulb } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import SignUp from './SIgnUp'; // Importing the SignUp component

const Home = () => {
    const [visibleLogo, setVisibleLogo] = useState(true); // Show logo initially
    const [visibleGrid, setVisibleGrid] = useState(false); // Control grid visibility
    const [visibleOptions, setVisibleOptions] = useState(false); // Sidebar state
    const [isFirstTime, setIsFirstTime] = useState(false); // First time check state
    const navigate = useNavigate();

    // Show logo for 2 seconds
    useEffect(() => {
        const logoTimer = setTimeout(() => {
            setVisibleLogo(false);
            // Check if the user has signed up after logo is hidden
            const userSignedUp = localStorage.getItem('userSignedUp');
            if (!userSignedUp) {
                setIsFirstTime(true); // Show signup if first time
            } else {
                setVisibleGrid(true); // Show grid if user has already signed up
            }
        }, 2000); // 2-second delay for logo

        return () => clearTimeout(logoTimer);
    }, []);

    const toggleOptions = () => {
        setVisibleOptions(!visibleOptions); // Toggle sidebar menu
    }

    const handleLogout = () => {
        // Clear user data (or authentication token) from localStorage
        localStorage.removeItem('userSignedUp');  // or any other key related to authentication

        // Redirect to login page
        navigate('/login');
    };

    return (
        <div className='bg-gradient-to-br from-purple-500 to-blue-600 h-svh flex flex-col justify-center items-center overflow-hidden'>
            {/* Show Logo first */}
            {visibleLogo && (
                <div className='flex justify-center items-center h-screen transition-opacity duration-1000'>
                    <Logo />
                </div>
            )}

            {/* Show SignUp page if it's the first time */}
            {isFirstTime && !visibleLogo && (
                <SignUp setIsFirstTime={setIsFirstTime} setVisibleGrid={setVisibleGrid} />
            )}

            {/* Show grid after signup or for returning users */}
            {visibleGrid && !isFirstTime && !visibleLogo && (
                <div className='m-3 pb-8 py-5 flex flex-col justify-center items-center bg-gradient-to-tl from-white via-gray-300 to-gray-400 border border-gray-300 shadow-lg rounded-lg p-3 transition-opacity duration-1000'>
                    <div className='flex items-center mb-4 justify-around space-x-24'>
                        <div>
                            <h1 className='font-bold text-3xl w-44 text-gray-800 p-3 rounded-lg animate-fade-in'>
                                Air Switch
                            </h1>
                        </div>
                        <div onClick={toggleOptions}>
                            <GiHamburgerMenu className='h-7 w-7' />
                        </div>

                        {/* Sidebar */}
                        {visibleOptions && (
                            <div id="sidebar" className={`fixed top-0 z-10 right-0 w-48 h-full bg-gray-800 text-white transition-transform duration-1000 ease-in-out ${visibleOptions ? 'translate-x-0' : 'translate-x-full'}`}>
                                <button id="closeBtn" className="p-4 text-white focus:outline-none" onClick={toggleOptions}>X</button>
                                <ul className="p-4">
                                    <li className="py-2 border-b border-gray-600">Home</li>
                                    <li className="py-2 border-b border-gray-600">Account</li>
                                    <li className="py-2 border-b border-gray-600">Settings</li>
                                    <li onClick={handleLogout} className="py-2 border-b border-gray-600">Log out</li>
                                </ul>
                            </div>
                        )}
                    </div>
                    {/* Device Buttons */}
                    <div className='grid grid-cols-3 grid-rows-3 gap-3 h-full'>
                        {[
                            { icon: <TbAirConditioning className='text-4xl text-purple-600' />, txt: "AC" },
                            { icon: <FaTv className='text-4xl text-red-600' />, txt: "TV" },
                            { icon: <FaFan className='text-4xl text-blue-500' />, txt: "FAN" },
                            { icon: <IoCamera className='text-4xl text-pink-600' />, txt: "CAMERA" },
                            { icon: <GiCooler className='text-4xl text-teal-500' />, txt: "WCOOLER" },
                            { icon: <LuProjector className='text-4xl text-yellow-500' />, txt: "PROJECTOR" },
                            { icon: <GiSolarPower className='text-4xl text-green-500' />, txt: "SOLAR" },
                            { icon: <GiPowerGenerator className='text-4xl text-orange-500' />, txt: "GENERATOR" },
                            { icon: <FaLightbulb className='text-4xl text-yellow-300' />, txt: "BULB" },
                        ].map(({ icon, txt }, index) => (
                            <div
                                key={index}
                                className='flex flex-col justify-center items-center cursor-pointer hover:scale-105 duration-300 bg-gradient-to-r from-indigo-300 to-blue-300 p-4 rounded-lg shadow-md hover:shadow-xl transform transition-all h-36'
                                onClick={() => navigate(`/${txt.toLowerCase()}`)}
                            >
                                {icon}
                                <DevicesBtn txt={txt} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;
