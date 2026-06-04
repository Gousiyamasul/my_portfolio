import React from 'react'
import contact from "../assets/contact.jpg"
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
        <h1 id='chead'>CONTACT ME</h1>
        <div className="contact">
            <div className="cimg">
                <img src={contact}></img>
            </div>
            <div className="cdetails">
                <div className="detailsh">
                    <h2 className='row'>Name :</h2> 
                    <h2 className='row'>Email :</h2>
                    <h2 className='row'>LinkedIn :</h2>
                    <h2 className='row'>Git-Hub :</h2>
                </div>
                <div className="detailsd">
                    <h2>Masul Gousiya</h2>
                    <h2><a href='mailto:masulgousiya@gmail.com' id='mail'>EMail</a></h2>
                    <h2><a href='https://www.linkedin.com/in/masul-gousiya-5843442b6' id='linked'>LinkedIn</a><br></br></h2>
                    <h2><a href='https://github.com/Gousiyamasul' id='git'>Git-Hub</a></h2>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default Contact