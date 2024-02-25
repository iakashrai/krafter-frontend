import React from 'react';
import codeImage from '../images/landing-image.gif'
import '../Styles/landingpage.css'

function LandingPage() {

  return (
    <section className='landingpage 
      min-h-screen min-w-screen
    '>
        <div className='landing-hero-container flex flex-row 
          items-center justify-around min-w-full min-h-max'
          >
          <div className='landingpage-intro-container'>
              <h2>Welcome to</h2>
              <h1>Krafter</h1>
              <h2>A web based Code Compiler</h2>
          </div>
          <div className='landigpage-image-container h-1/2 w-1/2'>
              <img src={codeImage} alt='' style={{backgroundBlendMode:'multiply'}}/>
          </div>
        </div>
    </section>
  )
}

export default LandingPage