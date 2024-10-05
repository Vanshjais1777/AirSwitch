import React from 'react';
import { IoIosArrowBack } from "react-icons/io";
import { SlOptionsVertical } from "react-icons/sl";
import { LuProjector } from "react-icons/lu"; // Projector icon
import { BsDash } from "react-icons/bs";

const ProjectorOption = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='m-2 border border-black flex justify-between h-24'>
        <div className='flex items-center'>
          <IoIosArrowBack className='' />
        </div>

        <div className='flex items-center'>
          <div className='font-bold'>Projector</div>
        </div>

        <div className='flex items-center'>
          <SlOptionsVertical />
        </div>
      </div>

      {/* Brightness Level Section */}
      <div className='flex justify-center min-h-52 w-full items-center'>
        <div className='flex font-bold text-8xl ml-6'>
          <h1>75</h1> {/* Brightness level of the projector */}
          <LuProjector className='ml-2 text-4xl text-purple-600' /> {/* Projector icon */}
        </div>
      </div>

      {/* Brightness Control Section */}
      <div className='border flex justify-between'>
        <div className='p-7 text-5xl'>
          <BsDash />
        </div>
        <div className='p-7 text-3xl mr-4'>
          <h1>Brightness</h1> {/* Label for controlling brightness */}
        </div>
        <div className='p-7 text-5xl'>
          <h1>+</h1>
        </div>
      </div>

      {/* Power Button Section */}
      <div className='flex justify-center'>
        <div className='m-7'>
          <img className='size-24' src="src/assets/power-on.png" alt="Power Button" />
        </div>
      </div>
    </div>
  );
}

export default ProjectorOption;
