import React from 'react'
import './Style.css'

const Projects = () => {
  return (
    <div className='py-20 w-3/4 mx-auto'>
      <div className='flex items-center mb-4'>
        <span><i class="fa-solid fa-laptop text-slate-400 mr-2 fa-2x"></i></span>
        <h1 className='font-bold text-3xl'>Projects:</h1>
      </div>
      <div className='custom-grid2 custom-grid-md1'>
        <div className='cursor-pointer custom-border rounded p-4 shadow-lg transition-all duration-700 hover:scale-110'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold custom-textColor'>Deep-Sight: Deepfake Detection using Multi Attentional Detection</h2>
            <a href='https://github.com/Maverick474/DeepFake_Web_App' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github hover:text-gray-400 transition-all duration-300 text-3xl"></i></a>
          </div>
          <p className='mt-2'>Created a deepfake detection prototype using CNN + RNN (PSO) trained on different datasets. 
            Optimized performance with data preprocessing and fine-tuning.
            Developed a Django web app and web extension for easy detection. Currently working on adding transformer layer 
            to the deepfake detection model to enhance features by capturing global context and relationships. Additionally, 
            will incorporate Video Gran Cam to highlight inconsistencies in the captured video frames.</p>
        </div>

        <div className='cursor-pointer custom-border rounded p-4 shadow-lg transition-all duration-700 hover:scale-110'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold flex flex-col md:flex-row md:items-baseline custom-textColor'>Teleco Chatbot</h2>
            <a href='https://github.com/Maverick474/ML_Final_Project' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github hover:text-gray-400 transition-all duration-300 text-3xl"></i></a>
          </div>
          <p className='italic font-semibold text-slate-400'>Langchain, OpenAI, ChromaDB, Langgraph, Fast Api, Streamlit, Docker</p>
          <p className='mt-2'>
          A containerized, multi-agent telecom chatbot built with FastAPI, LangChain, LangGraph, and
          Streamlit that uses RAG and an LLM to provide secure, multilingual (English, Urdu, Arabic)
          customer support across policies, billing, packages, and troubleshooting. It features
          intelligent agent routing with guardrails and maintains conversation memory to deliver
          context-aware, personalized responses across multi-turn interactions
          </p>
        </div>

        <div className='cursor-pointer custom-border rounded p-4 shadow-lg transition-all duration-700 hover:scale-110'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold flex flex-col md:flex-row md:items-baseline custom-textColor'>Recommendation System </h2>
            <a href='https://github.com/Maverick474/Recommedation_System' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github hover:text-gray-400 transition-all duration-300 text-3xl"></i></a>
          </div>
          <p className='italic font-semibold text-slate-400'>NumPy, Seaborn, Matplotlib, Scikit-learn</p>
          <p className='mt-2'>Developed a recommendation system using Singular Value Decomposition (SVD) to anaylze 
            prediction of user purchases from
            online stores like Amazon and Walmart. Evaluated the model's performance using key metrics such as F1 score, 
            precision, recall, and accuracy. Utilized Seaborn and Matplotlib to create visualizations, 
            including histograms, to analyze user purchase patterns and enhance insights.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Projects
