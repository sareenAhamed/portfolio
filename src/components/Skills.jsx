import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css-3.png'
import js from '../assets/js.png'
import reactJs from '../assets/reactJs.png'
import reactNative from '../assets/reactNative.png'
import tailwind from '../assets/tailwind.png'
import redux from '../assets/redux.png'
import { Element } from 'react-scroll'
import bootstrap from '../assets/bootstrap.png'
import git from '../assets/git.png'
import intellij from '../assets/intellij.png'
import vscode from '../assets/vscode.png'
import java from '../assets/java.png'
import mysql from '../assets/mysql.png'






const Skills = () => {
  return (
    <Element name='skills'>
      <div className='container mx-auto pt-28 font-poppins'>
        <div className='mb-12'>
          <h2 className='text-white font-semibold text-4xl mb-5 text-center'>Skills</h2>
          <hr />
        </div>

        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6'>
          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14' src={html} alt="HTML 5" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>HTML 5</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
              <img className='w-14 h-14 ' src={css} alt="CSS 3" />
              <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>CSS 3</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={js} alt="JavaScript" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>JavaScript</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14' src={reactJs} alt="React JS" />     
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>React JS</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={reactNative} alt="React Native" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>React Native</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={tailwind} alt="Tailwind CSS" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Tailwind CSS</h2>
          </div>
          
          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={redux} alt="Redux" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Redux</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={bootstrap} alt="Bootstrap" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Bootstrap</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={mysql} alt="MySQL" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>MySQL</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={java} alt="Java" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Java</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={vscode} alt="Vs Code" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Vs Code</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={git} alt="Git" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Git</h2>
          </div>

          <div className='bg-slate-800 pt-5 m-3 rounded flex flex-col items-center pb-3 text-center'>
            <img className='w-14 h-14 ' src={intellij} alt="Intellij" />
            <h2 className='mt-6 font-semibold text-portGreen text-xl mb-1'>Intellij</h2>
          </div>

          
        

        </div>
      </div>
    </Element>
  )
}

export default Skills
