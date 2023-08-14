import React from 'react'

const bannerII = () => {
  return (
    <div className='w-full flex flex-col min-h-[100vh] items-center justify-center px-[2vh] md:px-[5vh] lg:px-[12vh] text-white mb-[10vh] md:mb-[5vh] bg-cyan-950 pt-[4vh] pb-[7vh] md:pb-0' id='bannerII' >
        <h1 className='md:text-[2.4em] 2sm:text-[2.2rem] text-[2rem] font-bold mb-[7vh]'  data-aos='zoom-in'>About <span className='text-cyan-500'>Me</span></h1>
        <div className='w-full min-h-[70vh] flex flex-col md:flex-row-reverse md:items-start items-center  justify-center gap-[8vh]' >
            <div className='md:w-[50%] w-full flex md:ml-6 mr-0 flex-col items-start justify-center'  data-aos='zoom-in'>
                <p>Hello, i'm Osmond Ugbodaga... I'm a frontend web developer with 2 years of experience. Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate dolorum cumque quae corrupti exercitationem, consequatur hic ea quis fuga quasi enim doloremque earum, quaerat officiis adipisci minus. Ab!</p>
                <p className='hidden lg:flex'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate dolorum cumque quae corrupti exercitationem, consequatur hic ea quis fuga quasi enim doloremque earum, quaerat officiis adipisci minus. Ab!Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam tempora voluptate dolorum cumque quae corrupti exercitationem, consequatur hic ea quis fuga quasi enim doloremque earum, quaerat officiis adipisci minus. Ab!</p>
                <button className='outline-none w-fit h-fit px-3 py-1 shadow-md shadow-cyan-500 hover:shadow-none rounded-lg bg-cyan-500 duration-500 mt-3 text-[1.1em]'>Read More</button>
            </div>
            <div className='2sm:w-[400px] w-full h-[300px] flex items-center justify-center 2sm:h-[400px]'  data-aos='zoom-in'>
              <span className='bg-cyan-500 shadow-xl shadow-cyan-500 w-[210px] h-[210px] 2sm:w-[300px] 2sm:h-[300px] rotate'></span>
            </div>
        </div>
    </div>
  )
}

export default bannerII