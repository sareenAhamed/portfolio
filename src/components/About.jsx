import React from 'react'
import sareen2 from '../assets/sareen2.png'

const About = () => {
  return (
    <div className='container mx-auto mt-24 font-poppins scroll-smooth'>
      <div>
        <h2 className='text-white font-semibold text-4xl mb-5 text-center'>About me</h2>
        <hr />
      </div>

      <div className='flex flex-col md:flex-row pt-12 items-center'>
        <div className='md:w-1/2'>
          <img className='w-auto h-auto' src={sareen2} alt="" />
        </div>

        <div className='md:w-1/2 mt-12 md:mt-16 px-3 md:p-0'>
          <h3 className='text-white font-semibold text-xl text-left mb-4'>Hi! there,</h3>
          <p className='text-slate-400 text-lg text-justify'>
          I’m Sareen Ahamed, a passionate Front-End Developer with a knack for crafting visually stunning and user-friendly web applications. With a strong foundation in HTML, CSS, and JavaScript, I specialize in bringing creative designs to life with clean and efficient code. My goal is to create seamless digital experiences that are not only functional but also engaging. I’m constantly learning and experimenting with new technologies to stay ahead in the ever-evolving world of web development. When I'm not coding, you'll find me exploring the latest trends in tech or working on exciting side projects. Let’s build something amazing together!
          </p>
        </div>
      </div>
      
    </div>
  )
}

export default About
