import React from 'react'
import './Style.css'

const Education = () => {
  return (
    <div className='w-3/4 mx-auto py-20'>
      <div className='flex items-center'>
        <span><i class="fa-solid fa-book-open text-slate-400 fa-2x"></i></span>
        <h1 className='text-3xl font-bold ml-2'>Education:</h1>
      </div>
      <div className='flex mt-4'>
        {/* Line & Dots container */}
        <div className='flex flex-col items-center mx-2'>
            {/* Dot Top */}
            <span className='custom-dotsColor rounded-full w-4 h-4'></span>

            {/* Vertical Line */}
            <span className='w-1 custom-lineColor h-[50%]'></span>

            {/* Dot Bottom */}
            <span className='custom-dotsColor rounded-full w-4 h-4'></span>
        </div>

        <div className=''>
            <h1 className='text-xl font-semibold'>Bachelor's of Computer Science</h1>
            <p className='custom-textColor'>Forman Chritian College University</p>
            <p className='italic mt-2'>Sep 2021 - Sep 2025</p>

            <h1 className='text-xl font-semibold mt-8'>A Levels</h1>
            <p className='custom-textColor'>Beaconhouse Defense Campus</p>
            <p className='italic mt-2'>Sep 2021 - Sep 2025</p>
        </div>
      </div>
    </div>
  )
}

export default Education
