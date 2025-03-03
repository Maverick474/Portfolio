import React from 'react'
import Image from './assets/personal_img.png'
import './Style.css'

const About = () => {
  return (
    <div className='w-3/4 mx-auto'>
      <div className='flex items-center justify-between py-20'>
        <div>
            <h1 className='md:text-3xl md:font-bold text-2xl font-semibold md:mt-3 fade-text uppercase'><span style={{color: '#00ABF1'}}>Muhammad</span> Zain Haseeb</h1>
            <p className='text-justify mr-6 mt-2 fade-text'>I am an enthusiastic and detail-oriented individual with a passion for technology and 
                problem-solving. 
                With strong analytical skills and a commitment to meeting deadlines,
                I excel at tacklingcomplex challenges. 
                I enjoy exploring new fields, particularly in web development and emergingtechnologies 
                such as AI/ML. 
                Currently, I am in my 8th semester at Forman Christian College, pursuing Bachelor's 
                in Computer Science.</p>

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
