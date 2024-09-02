import React, { useState } from 'react'
import logo from '../assets/logo.png'
import menu from  '../assets/menu.png'
import cross from '../assets/cross.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  const[click, setClick] = useState(false)

  function handleMenu(){
    setClick(!click)
  }

  return (
    <div className='sticky top-0 bg-slate-900 container mx-auto justify-between items-center text-portGreen font-manrope rounded px-3 font-semibold shadow-sm shadow-portGreen flex flex-col md:flex-row scroll-smooth'>
      
      <div className='flex justify-center items-center'>
        <img className='h-24 w-40' src={logo} alt="SAREEN AHAMED" />

        {/* Menu icon */}
      <div className='flex md:hidden ms-4'>
        <img className={click ? "w-6 h-6" : "w-6 h-6"} src={click ? cross : menu} onClick={handleMenu} alt="" />
      </div>
      </div>

      

      <div className='md:flex'>
        <ul className={click ? "space-y-2 pb-3 text-center" : 'hidden md:flex md:gap-7 gap-4 justify-between mb-2'}>
          <li className='hover:text-white md:text-xl text-md duration-500'><Link to='home' smooth={true} duration={200}>Home</Link></li>
          <li className='hover:text-white md:text-xl text-md duration-500'><Link to='about' smooth={true} duration={200}>About</Link></li>
          <li className='hover:text-white md:text-xl text-md duration-500'><Link to='skills' smooth={true} duration={200}>Skills</Link></li>
          <li className='hover:text-white md:text-xl text-md duration-500'><Link to='projects' smooth={true} duration={200}>Projects</Link></li>
          <li className='hover:text-white md:text-xl text-md duration-500'><Link to='education' smooth={true} duration={200}>Education</Link></li>
        </ul>
      </div>
      
    </div>
  )
}

export default Navbar
