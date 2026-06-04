import React from 'react'
import projects from "../assets/projects.jpg"
const Projects = () => {
  return (
    <>
        <h1 id='ph'>PROJECTS</h1>
        <div className="pdata">
          <div>
            <img src={projects} id='pimg'></img>
          </div>
          <div className="pmain">
            <h2 className='phead'>Code Bug Explainer</h2>
            <p>• Developed an AI-powered web app for bug analysis and solution generation. <br></br><br></br>• Implemented user authentication, API integration, database storage, and bug tracking using Flask and Python.</p>
            <h2 className='phead'>Food Recommendation Based on Mood</h2>
            <p>• Designed and developed a food recommendation system that suggests food items based on the user’s current mood.<br></br><br></br>• Implemented logic-driven mapping between moods and food categories to provide relevant suggestions.</p>
            <h2 className='phead'>Hybrid Deep Learning and Image Processing Approach for Bank Cheque Validation</h2>
            <p id='bp'>• Developed an automated bank cheque validation system using deep learning, image processing, and Generative AI.<br></br><br></br>• Applied OCR and Generative AI for text extraction, CNN for digit recognition, and SIFT + SVM for signature verification.<br></br><br></br>• Built a Django-based web application for real-time processing and validation.</p>
            <h2 className='phead'>E-Commerce Website</h2>
            <p id='ep'>• Developed a responsive e-commerce web application using React.js with product listing, product details, and order 
            placement features. <br></br><br></br>• Integrated REST APIs for handling HTTP requests and data rendering.<br></br><br></br>• Built an interactive and user-friendly interface using React components and state management. </p>
          </div>
        </div>
    </>
  )
}

export default Projects