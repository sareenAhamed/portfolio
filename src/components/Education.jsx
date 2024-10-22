import React from 'react'
import { Element } from 'react-scroll'
import unilogo from '../assets/unilogo.png'
import schoolLogo from '../assets/schoollogo.png'

// motion
import { motion } from 'framer-motion'
// variant
import { fadeIn } from './varients/Variant.js'

const Education = () => {
  return (
    <Element name='education'>
        <div className='container mx-auto pb-8 pt-32 font-poppins'>
            <div className='mb-12'>
            <h2 className='text-white font-semibold text-4xl mb-5 text-center'>Education</h2>
            <hr />
            </div>

            
            <div className='flex flex-col md:flex-row justify-around pt-5'>
                {/* Degree */}
                <motion.div className='flex justify-between mb-7'
                    variants={fadeIn("right", 0.1)} 
                    initial = "hidden" 
                    whileInView={"show"} 
                    viewport={{once: true, amount: 0.7}}>
                        
                    <div className='w-1/3 ps-1'>
                        <img className='w-32 h-32' src={unilogo} alt="university logo" />
                    </div>
                    <div className=' text-slate-400 pt-2 ps-5'>
                        <p className=' text-white font-semibold'>Bachelor of ICT (Hons) in Software Technology (R)</p>
                        <p>Faculty of Technology</p>
                        <p>University of Sri Jayewardenepura</p>
                        <p>2022 - Present</p>
                    </div>
                
                </motion.div>
    
                {/* A/L */}
                <motion.div className='flex mb-7'
                    variants={fadeIn("left", 0.1)} 
                    initial = "hidden" 
                    whileInView={"show"} 
                    viewport={{once: true, amount: 0.7}}>

                    <div className='w-1/3'>
                        <img className='w-32 h-32' src={schoolLogo} alt="university logo" />
                    </div>
                    <div className=' text-slate-400 pt-5 md:ps-5'>
                        <p className=' text-white font-semibold'>G.C.E. Advanced Level</p>
                        <p>Technology Stream</p>
                        <p>T/MU/Mutur Central College</p>
                        <p>2018 - 2020</p>
                    </div>
                
                </motion.div>
            </div>
            
        </div>
    </Element>
  )
}

export default Education
