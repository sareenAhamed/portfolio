import React from 'react'
import './Home.css'
import sareen1 from '../../Assets/sareen1.png'

const Home = () => {
  return (
    <div className='container py-5'>
      <div className='row home-deatils'>
        <div className='col-12 col-md-6'>
          <div className='details'>
            <div>
              <p className='my-name'>Hey there, I'm <span>Sareen Ahamed</span></p>
              <p className='developer'>Front End Developer</p>
              <p className='my-tag'>With a passion for creating intuitive and visually appealing web experiences.</p>
            </div>
            <button className='btn btn-download'>Download CV</button>
            <button className='btn btn-contact'>Contact Me</button>
          </div>
          
        </div>
        <div className='col-12 col-md-6 sm-p-0 ps-5 pt-5'>
          <div className='home-img'>
            <img className='ms-5' src={sareen1} alt=''/>
          </div>

        </div>
      </div>
      
    </div>
  )
}

export default Home
