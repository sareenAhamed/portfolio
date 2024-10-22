import React from 'react'
import sareen1 from '../assets/sareen1.png'
import { Element } from 'react-scroll'

import cv from '../assets/Sareen Ahamed.pdf'

// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from './varients/Variant.js'

const Home = () => {
  return (
    <Element name='home'>
      <div className='container mx-auto flex flex-col-reverse md:flex-row md:justify-between md:pt-10 md:items-center font-poppins'>

        <motion.div className='my-4 md:text-left md:w-1/2 text-center'
          variants={fadeIn("right", 0.1)} 
          initial = "hidden" 
          whileInView={"show"} 
          viewport={{once: true, amount: 0.7}}>

          <div className='flex-col mb-5 '>
            <p className='text-slate-400 font-semibold py-1 text-xl md:text-2xl'>Hey, I'm <span className='text-3xl md:text-4xl text-slate-300'>Sareen Ahamed</span></p>
            <p className='font-semibold text-portGreen text-5xl md:text-5xl py-1 mt-3'>Front End Developer</p>
            <p className='text-slate-400 py-1 text-lg md:text-xl'>I'm dedicated to crafting responsive and engaging websites that provide exceptional user experiences.</p>
          </div>
          <div>
            <a href={cv}><button className='bg-portGreen text-slate-700 font-semibold rounded px-3 py-1 hover:text-portGreen hover:bg-slate-700 m-2 duration-500 text-md md:text-lg'>Download CV</button></a>
          </div>
        </motion.div>

        <motion.div className='flex justify-center pt-5 mt-8'
          variants={fadeIn("left", 0.1)} 
          initial = "hidden" 
          whileInView={"show"} 
          viewport={{once: true, amount: 0.7}}>
            
          <img className='w-auto h-auto' src={sareen1} alt="Hello" />
        </motion.div>
        
      </div>
    </Element>
  )
}

export default Home
