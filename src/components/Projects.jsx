import React from 'react'
import { Element } from 'react-scroll'
import weatherapp from '../assets/weatherapp.jpg'
import cineseat from '../assets/cineseat.png'

// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from './varients/Variant.js'


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
        <motion.div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-3 mt-12'
         variants={fadeIn("up", 0.1)} 
         initial = "hidden" 
         whileInView={"show"} 
         viewport={{once: true, amount: 0.7}}>

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
            <p className='text-center my-4 text-white text-lg'>
              <a href="https://github.com/sareenAhamed/weatherApp">Check out the GitHub page</a>
              <br />
              <button className='bg-slate-900 text-portGreen px-5 py-2 rounded-full mt-4'>
                <a href="https://weatherwithsareen.netlify.app/">View Project</a>
              </button>
              
              </p>
           </div>
            
          </div>

          {/* Project 2 */}
          <div className='text-slate-400 bg-slate-800 m-4 px-2 pt-2 rounded hover:shadow-lg hover:shadow-portGreen transform translate-y-0 hover:-translate-y-3 duration-500'>
           <div className=''>
            <img className='object-cover rounded h-52 w-72 mx-auto' src={cineseat} alt="" />
           </div>

           <div className='mt-3'>
            <p className='font-semibold text-white text-center my-2'>CineSeat</p>
              <p className='text-justify'>CineSeat is a web app created for experimenting with Tailwind CSS. It provides a movie ticket booking interface to explore practical applications of the framework's styling features.

              </p>
           </div>
           <div>
            <p className='text-center my-4 text-white text-lg'>
              <a href="https://github.com/sareenAhamed/cineseat">Check out the GitHub page</a>
              <br />
              <button className='bg-slate-900 text-portGreen px-5 py-2 rounded-full mt-4'>
                <a href="https://cineseat.netlify.app/">View Project</a>
              </button>
              
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
            <p className='text-center my-4 text-white text-lg'>
              <a href="https://github.com/sareenAhamed/weatherApp">Check out the GitHub page</a>
              <br />
              <button className='bg-slate-900 text-portGreen px-5 py-2 rounded-full mt-4'>
                <a href="https://weatherwithsareen.netlify.app/">View Project</a>
              </button>
              
              </p>
           </div>
            
          </div>
        </motion.div>
        
      </div>
    </Element>
  )
}

export default Projects
