import React from 'react'

const sidebar = ({navHandle}) => {
  return (
    <nav className='fixed top-[10vh] right-0 w-[90%] duration-500 h-[90vh] flex flex-col items-start justify-start backdrop-blur-lg text-white p-4 gap-3 z-50  text-[1.1rem]' data-aos='fade-down'>
        <a onClick={navHandle} href='#bannerI' className='hover:text-cyan-600 text-cyan-500 duration-500 cursor-pointer'>Home</a>
            <a onClick={navHandle} href='#bannerII' className='hover:text-cyan-600 duration-500 cursor-pointer'>About</a>
            <a onClick={navHandle} href='#mySkill' className='hover:text-cyan-600 duration-500 cursor-pointer'>Skills</a>
            <a onClick={navHandle} href='#myProject' className='hover:text-cyan-600 duration-500 cursor-pointer'>Projects</a>
            <a onClick={navHandle} href='#contact' className='outline-none w-[200px] h-fit text-center py-1 shadow-md shadow-cyan-500 hover:shadow-none rounded-lg bg-cyan-500 duration-500'>Let's Connect</a>
    </nav>
  )
}

export default sidebar