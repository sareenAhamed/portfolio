
import './App.css'
import About from './components/About'
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
      <Projects />
      <Footer />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/contact'element={<Footer />} />
      </Routes>
     
    </>
  )
}

export default App
