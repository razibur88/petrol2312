import React from 'react'

const Country = () => {
    return (
        <div className='max-w-container mx-auto py-[30px] lg:pt-[80px] lg:pb-[100px]'>
            <div className="lg:flex items-center">
                <div className="lg:w-1/4">
                    <h3 className='font-bold lg:text-[48px] font-pops text-center max-[376px]:text-[18px] text-[20px]'>The biggest
                        supplier on
                        the country</h3>
                </div>
                <div className="lg:w-3/4">
                    <p className='lg:px-[160px] font-normal text-[16px] font-pops'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
                </div>
            </div>
        </div>
    )
}

export default Country