import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import reactJs from '../assets/reactJs.png'
import reactNative from '../assets/reactNative.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'


const Skills = () => {
  return (
    <div className='container mx-auto mt-28 font-poppins'>
      <div className='mb-12'>
        <h2 className='text-white font-semibold text-4xl mb-5'>Skills</h2>
        <hr />
      </div>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-16'>
        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
          <img className='w-24 h-24 ' src={html} alt="HTML 5" />
          <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>HTML 5</h2>
          <p className='text-slate-400'>It provides modern web structure, multimedia support, and enhanced performance.</p>
        </div>

        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
            <img className='w-24 h-24 ' src={css} alt="CSS 3" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>CSS 3</h2>
            <p className='text-slate-400'>It enables responsive design, advanced styling, and dynamic visual effects.</p>
        </div>

        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
          <img className='w-24 h-24 ' src={js} alt="JavaScript" />
          <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>JavaScript</h2>
          <p className='text-slate-400'>It powers interactivity, dynamic content, and real-time functionality on websites.</p>
        </div>

        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
          <img className='w-24 h-24 ' src={reactJs} alt="React JS" />     
          <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>React JS</h2>
          <p className='text-slate-400'>It simplifies building dynamic, reusable components and enhances performance.</p>
        </div>

        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
        <img className='w-24 h-24 ' src={reactNative} alt="React Native" />
          <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>React Native</h2>
          <p className='text-slate-400'>It enables cross-platform mobile apps with a single codebase, ensuring fast development and native performance.</p>
        </div>

        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
        <img className='w-24 h-24 ' src={tailwind} alt="Tailwind CSS" />
          <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Tailwind CSS</h2>
          <p className='text-slate-400'>It offers utility-first styling, rapid customization, and streamlined responsive design.</p>
        </div>
        
        <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3'>
        <img className='w-24 h-24 ' src={redux} alt="Redux" />
         <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Redux</h2>
         <p className='text-slate-400'>It manages application state predictably, making complex state management simpler and more maintainable.</p>
        </div>
      

      </div>
    </div>
  )
}

export default Skills
