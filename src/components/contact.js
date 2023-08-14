import React from 'react'

const contact = () => {
  return (
    <div className='w-full min-h-[100vh] flex flex-col items-center justify-center text-white mb-[10vh]' id='contact' data-aos='zoom-in'>
        <h1 className='md:text-[2.4em] 2sm:text-[2.2rem] text-[2rem] font-bold mb-[7vh] mt-[4vh] 2sm:mt-0'  data-aos='zoom-in'>My <span className='text-cyan-500'>Contact</span></h1>
        <div className='w-full flex items-center justify-center px-2 2sm:px-5'  data-aos='zoom-in'>
            <form className='lg:w-[50%] md:w-[70%] w-full flex flex-col items-center justify-between gap-3'>
                <div className='w-full flex flex-col sm:flex-row gap-3  items-center justify-between'>
                    <input type='text' placeholder='First Name' className='w-full sm:w-[49%] h-[35px] px-2 rounded-sm bg-cyan-950 outline-none border-none'/>
                    <input type='text' placeholder='Last Name' className='w-full sm:w-[49%] h-[35px] px-2 rounded-sm bg-cyan-950 outline-none border-none'/>
                </div>
                <div className='w-full flex flex-col sm:flex-row gap-3  items-center justify-between'>
                    <input type='email' placeholder='Email Address' className='w-full sm:w-[49%] h-[35px] px-2 rounded-sm bg-cyan-950 outline-none border-none'/>
                    <input type='number' placeholder='Mobile Number' className='w-full sm:w-[49%] h-[35px] px-2 rounded-sm bg-cyan-950 outline-none border-none'/>
                </div>
                <textarea placeholder='Send a message......' className='w-full h-[350px] bg-cyan-950 px-2 rounded-sm resize-none outline-none'></textarea>
            </form>
        </div>
    </div>
  )
}

export default contact