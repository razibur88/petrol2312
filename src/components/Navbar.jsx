import React, { useState } from 'react'
import Logo from "../assets/logo.png"
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    let [show, setShow] = useState(false)

    
  return (
    <nav className='bg-[#F40404] py-10'>
        <div className="max-w-container mx-auto">
            <div className="flex justify-between">
            <div className="">
                <img src={Logo} alt="logo" />
            </div>
            <div className="">
                <ul className={`lg:flex gap-x-6 absolute lg:static ${show == true ? 'top-[210px] left-[0] bg-[green] w-full delay-300 duration-300 ease-in-out -z-10 py-5 text-center' : 'top-[-200px] left-[0px] delay-300 duration-300 ease-in-out w-full -z-10'}`}>
                    <li className='lg:py-0 py-2'><a className='text-white font-pops font-semibold text-[18px]' href="#">Home</a></li>
                    <li><a className='text-white font-pops font-semibold text-[18px]' href="#">About</a></li>
                    <li><a className='text-white font-pops font-semibold text-[18px]' href="#">Services</a></li>
                    <li><a className='text-white font-pops font-semibold text-[18px]' href="#">Gallery</a></li>
                    <li><a className='text-white font-pops font-semibold text-[18px]' href="#">Blog</a></li>
                    <li><a className='text-white font-pops font-semibold text-[18px] inline-block lg:inline border-2 p-4 rounded' href="#">Contact</a></li>
                </ul>
            </div>
            <div className="lg:hidden relative z-50" onClick={()=>setShow(!show)}>
                {show == true ? <RxCross2/>  :  <FaBars/>}
                
            </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar