import React from 'react'
import './About.css'
import sareen2 from '../../Assets/sareen2.png'

const About = () => {
  return (
    <div className='container py-5'>
      <div className='about'>
        <h1 className='text-center pb-4'>About Me</h1>
      </div>

      <div className='row'>
        <div className='col-12 col-md-6 about-img'>
          <img className='ms-3 mt-4' src={sareen2} alt='' />
        </div>

        <div className='col-12 col-md-6 about-sentence pt-5 ps-2'>
          <p> 
            As a dedicated undergraduate student at the University of Sri Jayewardenepura pursuing a Bachelor of Information Communication Technology (BICT), I am passionate about frontend development and creating dynamic, user-friendly web applications. Proficient in HTML, CSS, JavaScript, and React JS, I have a solid foundation in building responsive and interactive user interfaces. Committed to continuous learning and staying current with industry trends, I bring a proactive and collaborative approach to problem-solving. Eager to apply my skills and knowledge in real-world projects, I am focused on delivering high-quality, visually appealing, and efficient web solutions.
          </p>
          <button className='btn btn-hire mt-3'>Hire Me</button>
        </div>

      </div>
      
    </div>
  )
}

export default About
