import React from 'react'
import './Style.css'

const Experience = () => {
  return (
    <div className='custom-background h-full py-20'>
      <div className='w-3/4 mx-auto flex items-center'>
        <span className='text-slate-400'><i class="fa-solid fa-briefcase fa-2x"></i></span>
        <h1 className='ml-2 font-bold text-3xl'>Experience:</h1>
      </div>
      <div className='w-3/4 mx-auto flex mt-4'>
        <div className='flex flex-col items-center mx-2'>
            {/* Dot Top */}
            <span className='custom-dotsColor rounded-full w-4 h-4'></span>

            {/* Vertical Line */}
            <span className='w-1 custom-lineColor h-[56.5%] cus-height'></span>

            {/* Dot Bottom */}
            <span className='custom-dotsColor rounded-full w-4 h-4'></span>
        </div>
        <div className=''>
            <h2 className='text-xl font-semibold'>Systems Limited</h2>
            <p className='custom-textColor'>Sep 2025 - Dec 2025</p>
            <p className='italic my-2'>AI intern</p>
            <ul className='list-disc list-outside space-y-2'>
                <li className='ml-10'>Designed RAG pipelines with AI guardrails for safe, reliable, context-aware responses using GPT-4o-mini and Claude 3.5 Haiku.</li>
                <li className='ml-10'>Developed AI chatbot systems using FastAPI (backend) and Streamlit (frontend),
                incorporating advanced prompt engineering and optimized model workflows</li>
                <li className='ml-10'>Built agentic AI workflows using LangGraph, enabling structured multi-step reasoning, agent
                coordination, and automated task execution.</li>
                <li className='ml-10'>Engineered and deployed scalable multi-agent AI systems using Docker, ensuring modular,
                containerized, and production-ready architectures.</li>
            </ul>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience
