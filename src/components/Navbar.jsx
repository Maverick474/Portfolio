import React, { useState } from 'react'
import './Style.css'
import CV from './assets/M.ZainHaseeb_cv.pdf'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
  return (
    <div className='fixed w-full z-10'>
      <div style={{backgroundColor: '#081B29', opacity: '0.8'}} className='flex md:flex-row flex-col md:justify-between py-6'>
      <button className='md:hidden text-gray-500 focus:outline-none' onClick={toggle}>
        <i className={`fa ${isOpen ? 'fa-times hover:text-blue-400 duration-300 transition-all spin-f' : 'fa-bars hover:text-blue-400 duration-300 transition-all spin-reverse'} fa-2x`}></i>
      </button>
        <h1 className='text-xl mr-4 md:ml-5 hidden md:block font-semibold'><a href="">Portfolio.</a></h1>
        <div>
            <div className={`md:flex md:items-center ${isOpen ? 'menu-open block text-center' : 'menu-closed hidden'}`}>
                <ul className='md:flex md:items-center'>
                    <li className='md:ml-5 custom-color duration-400'><a href="#">About</a></li>
                    <li className='md:ml-5 custom-color duration-400'><a href="#experience">Experience</a></li>
                    <li className='md:ml-5 custom-color duration-400'><a href="#education">Education</a></li>
                    <li className='md:ml-5 custom-color duration-400'><a href="#skills">Skills</a></li>
                    <li className='md:ml-5 custom-color duration-400'><a href="#projects">Projects</a></li>
                    <li className='md:ml-5 md:mr-6 custom-color duration-400'><a href={CV} download='M.ZainHaseeb.pdf'>Resume</a></li>
                </ul> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
