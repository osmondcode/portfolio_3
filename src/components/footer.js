import React from 'react'
import { FaArrowUp } from 'react-icons/fa'

const footer = () => {
  return (
    <footer className='w-full py-4 md:px-[10vh] 2sm:px-[3vh] px-[10px] flex items-center justify-between bg-cyan-950 text-white'>
        <p>
            Copyright &copy; osmondcode 2023
        </p>
        <a href='#bannerI' className='p-3 rounded-md bg-cyan-800'>
            <FaArrowUp className=''/>
        </a>
    </footer>
  )
}

export default footer