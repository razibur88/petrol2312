
import React from 'react'

const Banner = () => {
  return (
    <div className='!bg-banbg bg-no-repeat bg-center bg-cover py-[40px] lg:py-[257px] relative z-10 after:absolute after:top-0 after:left-0 after:content-[""] after:w-full after:h-full after:bg-[rgba(34,34,34,0.57)] after:-z-10'>
        <div className="max-w-container mx-auto">
            <h2 className='text-white font-pops font-bold lg:text-[64px] lg:leading-[80px] lg:w-[842px]'>We exist since 1975 on the oil and gas industry.</h2>
            <button className='bg-[#F40404] py-[14px] px-[41px] text-white font-pops font-semibold text-[16px] mt-6'>learn more</button>
        </div> 
    </div>
  )
}

export default Banner