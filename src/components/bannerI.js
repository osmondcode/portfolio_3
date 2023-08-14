import React from 'react'

const bannerI = () => {
  return (
    <div className='w-full min-h-[90vh] flex flex-col md:flex-row md:items-center items-center md:justify-between justify-center gap-[8vh] px-[2vh] md:px-[5vh] lg:px-[12vh] text-white mb-[10vh] md:mb-[5vh] pt-[1vh] pb-[7vh]' id='bannerI'>
        <div className='xl:w-[35%] md:w-[45%] h-[60vh] md:h-fit w-full flex flex-col items-start justify-center mb-[5vh]'  data-aos='zoom-in'>
            <h3 className='text-cyan-500 text-[1.4em] w-fit h-[1.4em]  font-bold'>Hi there, I'm</h3>
            <h1 className='text-[7vw] 2sm:text-[2.3rem] font-bold'>OSMOND UGBODAGA</h1>
            <h2 className='text-[7vw] 2sm:text-[1.7em]'>A <span className='capitalize font-bold text-cyan-500'>frontend web developer</span></h2>
            <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate dolorum cumque quae corrupti exercitationem, consequatur</p>
            <button className='outline-none w-fit h-fit px-3 py-1 shadow-md shadow-cyan-500 hover:shadow-none rounded-lg bg-cyan-500 duration-500 mt-3 text-[1.1em]'>Know More</button>
        </div>
        <div className='2sm:w-[400px] w-full h-[300px] flex items-center justify-center 2sm:h-[400px]'  data-aos='zoom-in'>
              <span className='bg-cyan-500 shadow-xl shadow-cyan-500 w-[210px] h-[210px] 2sm:w-[300px] 2sm:h-[300px] rotate'></span>
        </div>
    </div>
  )
}

export default bannerI