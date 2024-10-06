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

const Home = () => {
    const [visibleLogo, setVisibleLogo] = useState(true);
    const [visibleGrid, setVisibleGrid] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleLogo(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleGrid(true);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const goToAc = (route) => {
        navigate(`/${route}`);
    }

    return (
        <div className='bg-gradient-to-br from-purple-500 to-blue-600 h-svh flex flex-col justify-center items-center overflow-hidden'>
            {visibleLogo ? (
                <div className='flex justify-center items-center h-screen transition-opacity duration-1000'>
                    <Logo />
                </div>
            ) : null}

            {visibleGrid ? (
                <div className='m-3 pb-8 py-5 flex flex-col justify-center items-center bg-gradient-to-tl from-white via-gray-300 to-gray-400 border border-gray-300 shadow-lg rounded-lg p-3 transition-opacity duration-1000'>
                    <h1 className='font-bold text-5xl mb-10 mt-3 text-gray-800 bg-blue-100 p-4 rounded-lg animate-fade-in'>
                        Air Switch
                    </h1>
                    <div className='grid grid-cols-3 grid-rows-3 gap-3 h-full'>
                        {/* Device Buttons */}
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
                                onClick={() => goToAc(txt.toLowerCase())}
                            >
                                {icon}
                                <DevicesBtn txt={txt} />
                            </div>
                        ))}
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default Home;
