
import './App.css'
import About from './components/About'
import Education from './components/Education'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { Routes, Route } from 'react-router-dom'

function App() {
  

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Footer />

      
     
    </>
  )
}

export default App
