import React from 'react'
import './Style.css'

const Footer = () => {
  return (
    <div className='py-4 custom-background'>
      <div className='w-3/4 mx-auto text-center'>
        <h1 className='mb-4'>Copyright &copy; 2025 All Rights Reserved</h1>
        <hr className='w-[33%] mx-auto' />
        <div className='mt-4'>
            <a href="https://www.linkedin.com/in/muhammad-zain-haseeb-aa76381bb" target='_blank' rel="noopener noreferrer"><i class="fa-brands text-gray-300 hover:text-slate-400 duration-300 transition-all fa-linkedin text-xl"></i></a>
            <a href="https://x.com/zaynX45" target='_blank' rel="noopener noreferrer"><i class="fa-brands text-gray-300 hover:text-slate-400 duration-300 transition-all mx-2 fa-square-x-twitter text-xl"></i></a>
            <a href="https://github.com/Maverick474" target='_blank' rel="noopener noreferrer"><i class="fa-brands text-gray-300 hover:text-slate-400 duration-300 transition-all fa-github text-xl"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Footer
