import React from 'react'
import './about.css'
import { FaGithub, FaFacebook, FaTwitter } from 'react-icons/fa';

import img from '../img/img.jpg'
import jai from '../img/jai.jpg'
function About() {
  return (
    <>
    <div>
      <h1>
        ABOUT US
      </h1>
      <img className='img' src={img} alt="img" />
      <div className='hi'>
      <p>Macabebe is a municipality in the province of Pampanga,</p>
       <p>Philippines. Nestled in the heart of the province,</p>  
       <p>  Macabebe is known for its rich cultural heritage, </p>
       <p> vibrant community, and its commitment to contributing </p>
       <p>to the vision and mission of the larger province of Pampanga.</p>
       </div>

      <div className="icon-container">
      <a href='#' className="icon">
        <FaFacebook />
      </a>
      <a href='#' className="icon">
        <FaGithub />
      </a>
      <a href='#' className="icon">
        <FaTwitter />
      </a>
    </div>
    </div>


    <p className='mission'>
    OUR MISION & VISION
  </p>
  <div className='row'>
  <div className='column'>
    <p className='hoh'>VISION</p>
    <p>“We envision Pampanga as a competitive province that is effective,</p>
    <p>transparent and responsive, duly governed and managed by competent</p>
    <p>and committed human resource where peace, love and respect to the</p>
    <p>environment reign in the heart of every Kapampangan.”</p>
  </div>

  <div className='column'>
  <p className='hoh'>MISSION</p>
    
    <p>The Provincial Government of Pampanga adheres to uphold effective and comprehensive delivery</p>
    <p> of social services, role model in terms of good governance, environment protection, promotion</p>
    <p>  of culture,peace and catalyst of change through sustainable trade and investment, quality</p>
    <p> and affordable education, availability of needed infrastructures and public utilities where its</p>
    <p>  public officials, private sectors and the Kapampangans are partners and committed to the principles</p>
    <p>  of common, unity, love of country,and dedicated service God Almighty.</p>
    
  </div>
</div>

<div className='she'>
<h2>MEET OUR TEAM</h2>
<p>"Hello from our dynamic team of developers!</p>  
<p>  👋 We're a passionate group dedicated to</p>  
<p> turning ideas into reality through the power</p>  
<p>  of code. As a collective, we thrive on collaboration,</p>  
<p>    innovation, and pushing the boundaries of what's </p>  
<p>   possible in the digital realm. With a diverse </p>  
<p>   set of skills and a shared love for problem-solving,</p>  
<p>     we're on a mission to create impactful solutions </p>  
<p>   that make a difference. Join us on this exhilarating </p>  
<p> journey where every line of code contributes to our</p>  
<p>  shared vision. Together, we're not just writing </p>  
<p>  software; we're crafting the future."</p>
</div>

<div className='grid'>
  <div className='grid-item'>
    <img className='ing' src={jai} alt="img" />
    <p>JUSTINE </p>
    <div className="sold">
      <a href='#' className="ish">
        <FaFacebook />
      </a>
      <a href='#' className="ish">
        <FaGithub />
      </a>
      <a href='#' className="ish">
        <FaTwitter />
      </a>
    </div>
  </div>
  <div className='grid-item'>
    <img className='ing' src={jai} alt="img" />
    <p>JAINIE </p>
    <div className="sold">
      <a href='#' className="ish">
        <FaFacebook />
      </a>
      <a href='#' className="ish">
        <FaGithub />
      </a>
      <a href='#' className="ish">
        <FaTwitter />
      </a>
    </div>
  </div>

  <div className='grid-item'>
    <img className='ing' src={jai} alt="img" />
    <p>JAI </p>
    <div className="sold">
      <a href='#' className="ish">
        <FaFacebook />
      </a>
      <a href='#' className="ish">
        <FaGithub />
      </a>
      <a href='#' className="ish">
        <FaTwitter />
      </a>
    </div>
  </div>
  <div className='grid-item'>
    <img className='ing' src={jai} alt="img" />
    <p>JAI </p>
    <div className="sold">
      <a href='#' className="ish">
        <FaFacebook />
      </a>
      <a href='#' className="ish">
        <FaGithub />
      </a>
      <a href='#' className="ish">
        <FaTwitter />
      </a>
    </div>
  </div>
  <div className='grid-item'>
    <img className='ing' src={jai} alt="img" />
    <p>JAI </p>
    <div className="sold">
      <a href='#' className="ish">
        <FaFacebook />
      </a>
      <a href='#' className="ish">
        <FaGithub />
      </a>
      <a href='#' className="ish">
        <FaTwitter />
      </a>
    </div>
  </div>
</div>



  </>
  )
}

export default About