import React from 'react'
import Cleaning from "./images/cy cleaning service.png";
import Pickie from "./images/pickie.png";
import Sole from "./images/sole.png";
import { FaLink } from 'react-icons/fa';

const myProject = () => {
  return (
    <div className='w-full min-h-[100vh] bg-cyan-950 flex flex-col items-center justify-start text-white py-4 md:px-[10vh] 2sm:px-[3vh] px-[10px] pb-[8vh]' id='myProject'>
      <h1 className='md:text-[2.4em] 2sm:text-[2.2rem] text-[2rem] mt-[5vh] font-bold mb-[7vh]'  data-aos='zoom-in'>My <span className='text-cyan-500'>Project</span></h1>

      <div className='w-full flex items-center flex-wrap justify-center lg:justify-between gap-[44px]'>
        <span className='w-[350px] h-[200px] flex items-center justify-center bg-cyan-800 rounded-xl overflow-hidden cursor-pointer relative' data-aos='zoom-in'>
        <span className='absolute top-0 left-0 bg-black/80 flex flex-col items-center justify-center gap-[25px] w-full h-full text-justify px-[10%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate</p>
            <button className='w-[40px] h-[40px] flex items-center justify-center border-[1px] border-white hover:border-[1px] hover:border-cyan-500 hover:bg-white duration-500 hover:text-cyan-500 bg-cyan-500 rounded-md'>
              <FaLink/>
            </button>
          </span>
          <img src={Sole} alt='Project pages'  className='w-full h-full'/>
        </span>
        <span className='w-[350px] h-[200px] flex items-center justify-center bg-cyan-800 rounded-xl overflow-hidden cursor-pointer relative' data-aos='zoom-in'>
        <span className='absolute top-0 left-0 bg-black/80 flex flex-col items-center justify-center gap-[25px] w-full h-full text-justify px-[10%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate</p>
            <button className='w-[40px] h-[40px] flex items-center justify-center border-[1px] border-white hover:border-[1px] hover:border-cyan-500 hover:bg-white duration-500 hover:text-cyan-500 bg-cyan-500 rounded-md'>
              <FaLink/>
            </button>
          </span>
          <img src={Cleaning} alt='Project pages'  className='w-full h-full'/>
        </span>
        <span className='w-[350px] h-[200px] flex items-center justify-center bg-cyan-800 rounded-xl overflow-hidden cursor-pointer relative' data-aos='zoom-in'>
          <span className='absolute top-0 left-0 bg-black/80 flex flex-col items-center justify-center gap-[25px] w-full h-full text-justify px-[10%]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate</p>
            <button className='w-[40px] h-[40px] flex items-center justify-center border-[1px] border-white hover:border-[1px] hover:border-cyan-500 hover:bg-white duration-500 hover:text-cyan-500 bg-cyan-500 rounded-md'>
              <FaLink/>
            </button>
          </span>
          <img src={Pickie} alt='Project pages'  className='w-full h-full hover:scale-[1.03] flex items-center justify-center duration-500'/>
        </span>
      </div>
      
    </div>
  )
}

export default myProject