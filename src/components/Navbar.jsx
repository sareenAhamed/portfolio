import React from 'react'
import logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <div className='container mx-auto justify-between  items-center text-portGreen font-manrope rounded px-3 font-semibold shadow-sm shadow-portGreen flex flex-col md:flex-row'>
      <div className='flex justify-center'>
        <img className='h-24 w-40' src={logo} alt="SAREEN AHAMED" />
      </div>

      <div>
        <ul className='flex md:gap-7 gap-4 justify-between mb-2'>
          <li className='hover:text-white md:text-xl text-md  duration-500 cursor-pointer'>Home</li>
          <li className='hover:text-white md:text-xl text-md duration-500 cursor-pointer'>About</li>
          <li className='hover:text-white md:text-xl text-md duration-500 cursor-pointer'>Skills</li>
          <li className='hover:text-white md:text-xl text-md duration-500 cursor-pointer'>Projects</li>
          <li className='hover:text-white md:text-xl text-md duration-500 cursor-pointer'>Contact</li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
