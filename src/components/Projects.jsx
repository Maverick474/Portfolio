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
          <p className='mt-2'>Created a deepfake detection prototype using CNN + RNN (PSO) trained on DFDC and FaceForensic++ datasets. 
            Optimized performance with data preprocessing and fine-tuning.
            Developed a Django web app and web extension for easy detection.</p>
        </div>

        <div className='cursor-pointer custom-border rounded p-4 shadow-lg transition-all duration-700 hover:scale-110'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold flex flex-col md:flex-row md:items-baseline custom-textColor'>Recommendation System </h2>
            <a href='https://github.com/Maverick474/Recommedation_System' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github hover:text-gray-400 transition-all duration-300 text-3xl"></i></a>
          </div>
          <p className='italic font-semibold text-slate-400'>NumPy, Seaborn, Matplotlib, Scikit-learn</p>
          <p className='mt-2'>Developed a recommendation system using Singular Value Decomposition (SVD) to predict user purchases for 
            online stores like Amazon and Walmart. Evaluated the model's performance using key metrics such as F1 score, 
            precision, recall, and accuracy. Utilized Seaborn and Matplotlib to create visualizations, 
            including histograms, to analyze user purchase patterns and enhance insights.
          </p>
        </div>

        <div className='cursor-pointer custom-border rounded p-4 shadow-lg transition-all duration-700 hover:scale-110'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold flex flex-col md:flex-row md:items-baseline custom-textColor'>Audio Classification</h2>
            <a href='https://github.com/Maverick474/ML_Final_Project' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github hover:text-gray-400 transition-all duration-300 text-3xl"></i></a>
          </div>
          <p className='italic font-semibold text-slate-400'>Pandas, NumPy, Librosa, Scikit-learn, Joblib</p>
          <p className='mt-2'>Developed an audio classification system using MFCC features and machine learning models, 
            achieving 89.4% validation accuracy with Random Forest as the top-performing model. 
            Extracted features using Librosa, preprocessed with Scikit-learn’s StandardScaler, 
            and evaluated models 
            (Random Forest, SVM, KNN, Decision Tree) using k-fold cross-validation.
          </p>
        </div>

        <div className='cursor-pointer custom-border rounded p-4 shadow-lg transition-all duration-700 hover:scale-110'>
          <div className='flex items-center justify-between'>
            <h2 className='text-xl font-bold custom-textColor'>Whole Sale Management System</h2>
            <a href='https://github.com/Maverick474/WholeSale-Management-System' target='_blank' rel="noopener noreferrer"><i class="fa-brands fa-github hover:text-gray-400 transition-all duration-300 text-3xl"></i></a>
          </div>
          <p className='italic font-semibold text-slate-400'>MongoDB, Express-Js, Node-Js, React-Js</p>
          <p className='mt-2'>
          Developed a fully responsive inventory and order management CRUD application using the MERN stack 
          (MongoDB, Express.js, React.js, Node.js), featuring user management, real-time updates, 
          and seamless data handling for efficient inventory tracking and order processing.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Projects
