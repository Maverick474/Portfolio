import React from 'react'
import Image from './assets/personal_img.png'
import './Style.css'

const About = () => {
  return (
    <div className='w-3/4 mx-auto'>
      <div className='flex items-center justify-between py-20'>
        <div>
            <h1 className='md:text-3xl md:font-bold text-2xl font-semibold md:mt-3 fade-text uppercase'><span style={{color: '#00ABF1'}}>Muhammad</span> Zain Haseeb</h1>
            <p className='text-justify mr-6 mt-2 fade-text'>I am an enthusiastic and detail-oriented professional with a strong passion for problem-solving.
            With solid analytical abilities and a proven track record of meeting deadlines, I thrive in tackling
            complex challenges. I enjoy exploring new domains, particularly in web development and emerging
            technologies such as Machine learning and Generative AI. I was honored with the Best Research
            FYP Award for my final year project and have recently graduated from Forman Christian College
            University.</p>

            <a href="https://www.linkedin.com/in/muhammad-zain-haseeb-aa76381bb" target='_blank' rel="noopener noreferrer">
              <button className='mt-6 p-4 font-semibold custom-btn fade-text'>Connect With Me</button>
            </a>
        </div>
        <img className='fade-image hidden lg:block custom-opacity' src={Image} alt="failed to load" />
      </div>
    </div>
  )
}

export default About
