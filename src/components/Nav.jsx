import React from 'react'
import {useState} from "react";

const Nav = () => {
  return (
    <div className='nav'>
        <div className='left'>
            <h1>Masul Gousiya</h1>
        </div>
        <div className='right'>
            <a href="#about"><h2>ABOUT</h2></a>
            <a href='#skills'><h2>SKILLS</h2></a>
            <a href="#projects"><h2>PROJECTS</h2></a>
            <a href='#contact'><h2>CONTACT</h2></a>
        </div>
    </div>
  )
}

export default Nav