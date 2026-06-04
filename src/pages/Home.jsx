import React,{useRef, useState} from 'react'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <>
        <div className='intro'>
           
                <h1 id='name'>Hi! I am Masul Gousiya</h1>
                <h3 id='deg'>Computer Science Engineering Graduate</h3>
                <h2 id='ed'>I'm a Python Full Stack Developer</h2>
                <p id='appli'>Passionate Python Full Stack Developer focused on building responsive and user-friendly web applications.</p>
                <a href='#contact'><button>Contact Me</button></a>        
                <a href='/Resume.pdf' target='_blank' rel='noreferrer'><button>View Resume</button></a>
        </div>
    </>
  )
}

export default Home
