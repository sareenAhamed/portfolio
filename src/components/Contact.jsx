import React from 'react'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
import facebook from '../assets/facebook.png'
import gmail from '../assets/gmail.png'

const Contact = () => {
  return (
    <div className='z-50'>

        <div className='fixed right-0 bottom-10 pe-3'>
            {/* LinkedIn */}
            <div className='h-8 w-8 mb-4 ml-auto'>
                <a  href="https://www.linkedin.com/in/sareen-ahamed/"><img className='hover:shadow-md hover:shadow-portGreen rounded' src={linkedin} alt="LinkedIn" /></a>
                
            </div>

            {/* GitHub */}
            <div className='h-8 w-8 mb-4 ml-auto'>
                <a href="https://github.com/sareenAhamed"><img className='hover:shadow-md hover:shadow-portGreen rounded-full' src={github} alt="GitHub" /></a>
                
            </div>

            {/* Twitter */}
            <div className='h-8 w-8 mb-4 ml-auto'>
                <a href="https://x.com/sareen_ahamed"><img className='hover:shadow-md hover:shadow-portGreen rounded' src={twitter} alt="Twitter" /></a>
            
            </div>

            {/* Facebook */}
            <div className='h-8 w-8 mb-4 ml-auto'>
                <a href="https://facebook.com/sareen.ahamed.9"><img className='hover:shadow-md hover:shadow-portGreen rounded-full' src={facebook} alt="Facebook" /></a>
                
            </div>

            {/* Gmail */}
            <div className='h-8 w-8 mb-4 ml-auto'>
                <a href="mailto:max.sareenahamed40@gmail.com.com?body=My custom mail body"><img className='hover:shadow-md hover:shadow-portGreen rounded' src={gmail} alt="Gmail" /></a>
                
            </div>
        </div>
        
     

    </div>
  )
}

export default Contact
