import React from 'react'
import SerOne from "../assets/serone.png"

const Service = () => {
  return (
    <>
        <div className="flex flex-wrap items-center">
            <div className="w-1/2 h-[300px]">
                <div className="flex items-center h-[300px]">
                <div className="">
                <h2>Our Services</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
                </div>
            </div>
            <div className={`bg-[url('..${SerOne}')] w-1/2 h-[300px] bg-no-repeat bg-cover bg-center`}>
                <h2>hello</h2>
            </div>
            <div className={`bg-[url('..${SerOne}')] w-1/2 h-[300px] bg-no-repeat bg-cover bg-center`}>
                <h2>hello</h2>
            </div>
            <div className={`bg-[url('..${SerOne}')] w-1/2 h-[300px] bg-no-repeat bg-cover bg-center`}>
                <h2>hello</h2>
            </div>
        </div>
    </>
  )
}

export default Service