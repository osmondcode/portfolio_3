import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa";

const header = ({navHandle, sidebar}) => {
  return (
    <div className='w-full h-[10vh] sticky bg-[#031c26] top-0 right-0 flex items-center justify-between px-[2vh] 2sm:px-[5vh] md:px-[12vh] text-white z-50'>
        <h1 className='text-[2em] uppercase font-bold'>Os<span className='text-cyan-500'>mo</span>nd</h1>
        <button className='text-white text-[1.4em] md:hidden flex p-1 border-[0.5px] rounded-lg border-white' onClick={navHandle}>
          {sidebar ? <FaTimes/> : <FaBars/>}
        </button>
        <div className='hidden md:flex items-center gap-[15px] text-[1.1em]'>
            <a href='#bannerI' className='hover:text-cyan-600 text-cyan-500 duration-500 cursor-pointer'>Home</a>
            <a href='#bannerII' className='hover:text-cyan-600 duration-500 cursor-pointer'>About</a>
            <a href='#mySkill' className='hover:text-cyan-600 duration-500 cursor-pointer'>Skills</a>
            <a href='#myProject' className='hover:text-cyan-600 duration-500 cursor-pointer'>Projects</a>
            <a href='#contact' className='outline-none w-fit h-fit px-3 py-1 shadow-md shadow-cyan-500 hover:shadow-none rounded-lg bg-cyan-500 duration-500'>Let's Connect</a>
        </div>
    </div>
  )
}

export default header