import React from 'react'
import { Element } from 'react-scroll'
import weatherapp from '../assets/weatherapp.jpg'

const Projects = () => {
  return (
    <Element name='projects'>
      <div className='container mx-auto pt-28 font-poppins'>
        <div className='mb-12'>
          <h2 className='text-white font-semibold text-4xl mb-5 text-center'>Projects</h2>
          <hr />
        </div>

        <div className='px-2 text-slate-400 text-center text-xl mb-4'>
          <p className=''>
            Here are some of my projects that I have worked on. You can find the source code for each project on my GitHub page.
          </p>
        </div>

        {/* Add Projects */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 mt-12'>
          {/* Project 1 */}
          <div className='text-slate-400 bg-slate-800 m-4 px-2 pt-2 rounded hover:shadow-lg hover:shadow-portGreen transform translate-y-0 hover:-translate-y-3 duration-500'>
           <div className=''>
            <img className='object-cover rounded h-52 w-72 mx-auto' src={weatherapp} alt="" />
           </div>

           <div className='mt-3'>
            <p className='font-semibold text-white text-center my-2'>Weather App</p>
              <p className='text-justify'>Utilizing real-time weather data from openweathermap.org, this app provides accurate and up-to-date weather information. This project has been an incredible journey in learning React JS and working with APIs, enhancing my front-end development skills.

              </p>
           </div>
           <div>
            <p className='text-center my-4 '>Check out the project <br />
              <a href="https://github.com/sareenAhamed/weatherApp">GitHub Page</a>
              <br />
              <a href="https://weatherwithsareen.netlify.app/">View App</a>
              </p>
           </div>
            
          </div>

          {/* Project 2 */}
          <div className='text-slate-400 bg-slate-800 m-4 px-2 pt-2 rounded hover:shadow-lg hover:shadow-portGreen transform translate-y-0 hover:-translate-y-3 duration-500'>
           <div className=''>
            <img className='object-cover rounded h-52 w-72 mx-auto' src={weatherapp} alt="" />
           </div>

           <div className='mt-3'>
            <p className='font-semibold text-white text-center my-2'>Weather App</p>
              <p className='text-justify'>Utilizing real-time weather data from openweathermap.org, this app provides accurate and up-to-date weather information. This project has been an incredible journey in learning React JS and working with APIs, enhancing my front-end development skills.

              </p>
           </div>
           <div>
            <p className='text-center my-4 '>Check out the project <br />
              <a href="https://github.com/sareenAhamed/weatherApp">GitHub Page</a>
              <br />
              <a href="https://weatherwithsareen.netlify.app/">View App</a>
              </p>
           </div>
            
          </div>

          {/* Project 3 */}
          <div className='text-slate-400 bg-slate-800 m-4 px-2 pt-2 rounded hover:shadow-lg hover:shadow-portGreen transform translate-y-0 hover:-translate-y-3 duration-500'>
           <div className=''>
            <img className='object-cover rounded h-52 w-72 mx-auto' src={weatherapp} alt="" />
           </div>

           <div className='mt-3'>
            <p className='font-semibold text-white text-center my-2'>Weather App</p>
              <p className='text-justify'>Utilizing real-time weather data from openweathermap.org, this app provides accurate and up-to-date weather information. This project has been an incredible journey in learning React JS and working with APIs, enhancing my front-end development skills.

              </p>
           </div>
           <div>
            <p className='text-center my-4 '>Check out the project <br />
              <a href="https://github.com/sareenAhamed/weatherApp">GitHub Page</a>
              <br />
              <a href="https://weatherwithsareen.netlify.app/">View App</a>
              </p>
           </div>
            
          </div>
        </div>
        
      </div>
    </Element>
  )
}

export default Projects
