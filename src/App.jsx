import React,{useState} from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from "./pages/Contact"
import Nav from './components/Nav'


const App = () => {
  return (
    <>  <div className="all">
          <Nav/>
          <div id='home'><Home/></div>
          <div><About/></div>
          <div id='skills'><Skills/></div>
          <div id='projects'><Projects/></div>
          <div id='contact'><Contact/></div>
        </div>
    </>
  )
}

export default App