import React from 'react'
import './Navbar.css'
import logo from '../../Assets/logo.png'

const Navbar = () => {
  return (
    <div className='container'>
      <nav className='navbar'>
        <div className='nav-logo'>
          <img src={logo} alt=''/>
        </div>
        <div className='nav'>
          <ul className='list-inline'>
            <li className='list-inline-item'><a className='nav-link' href='#'>Home</a></li>
            <li className='list-inline-item'><a className='nav-link' href='#'>About</a></li>
            <li className='list-inline-item'><a className='nav-link' href='#'>Skills</a></li>
            <li className='list-inline-item'><a className='nav-link' href='#'>Projects</a></li>
            <li className='list-inline-item'><a className='nav-link' href='#'>Contact</a></li>
          </ul>
        </div>

      </nav>

    
      
    </div>
  )
}

export default Navbar
