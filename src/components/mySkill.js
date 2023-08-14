import React from 'react'
import { FaCss3, FaGithub, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa'

const mySkill = () => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center justify-start text-white pb-[8vh] px-[12vh]' id='mySkill' >
        <h1 className='md:text-[2.4em] 2sm:text-[2.2rem] text-[2rem] font-bold mb-[7vh]'  data-aos='zoom-in'>My <span className='text-cyan-500'>Skills</span></h1>
        <div className='w-[85%] flex flex-wrap items-center justify-center gap-7'>
            <div className='flex flex-col hover:scale-[1.03] duration-500 items-center justify-center gap-3'  data-aos='zoom-in'>
                <span className='w-[195px] h-[195px] rounded-[.8rem] cursor-pointer flex items-center justify-center border-[5px] border-orange-500'>
                    <FaHtml5 className='w-[160px] h-[160px] text-orange-500'/>
                </span>
                <h2 className='text-[18px] font-bold'>HTML</h2>
            </div>
            <div className='flex flex-col hover:scale-[1.03] duration-500 items-center justify-center gap-3'  data-aos='zoom-in'>
                <span className='w-[195px] h-[195px] rounded-[.8rem] cursor-pointer flex items-center justify-center border-[5px] border-blue-500'>
                    <FaCss3 className='w-[150px] h-[150px] text-blue-500'/>
                </span>
                <h2 className='text-[18px] font-bold'>CSS</h2>
            </div>
            <div className='flex flex-col hover:scale-[1.03] duration-500 items-center justify-center gap-3'  data-aos='zoom-in'>
                <span className='w-[195px] h-[195px] rounded-[.8rem] cursor-pointer flex items-center justify-center border-[5px] border-yellow-500'>
                    <FaJsSquare className='w-[165px] h-[165px] text-yellow-500'/>
                </span>
                <h2 className='text-[18px] font-bold'>JAVASCRIPT</h2>
            </div>
            <div className='flex flex-col hover:scale-[1.03] duration-500 items-center justify-center gap-3'  data-aos='zoom-in'>
                <span className='w-[195px] h-[195px] rounded-[.8rem] cursor-pointer flex items-center justify-center border-[5px] border-white'>IMAGE</span>
                <h2 className='text-[18px] font-bold'>TAILWIND CSS</h2>
            </div>
            <div className='flex flex-col hover:scale-[1.03] duration-500 items-center justify-center gap-3'  data-aos='zoom-in'>
                <span className='w-[195px] h-[195px] rounded-[.8rem] cursor-pointer flex items-center justify-center border-[5px] border-purple-600'>
                    <FaReact className='w-[160px] h-[160px] text-purple-600'/>
                </span>
                <h2 className='text-[18px] font-bold'>REACT JS</h2>
            </div>
            <div className='flex flex-col hover:scale-[1.03] duration-500 items-center justify-center gap-3'  data-aos='zoom-in'>
                <span className='w-[195px] h-[195px] rounded-[.8rem] cursor-pointer flex items-center justify-center border-[5px] border-blue-900'>
                    <FaGithub className='w-[165px] h-[165px] text-blue-900'/>
                </span>
                <h2 className='text-[18px] font-bold'>GIT</h2>
            </div>
        </div>

    </div>
  )
}

export default mySkill