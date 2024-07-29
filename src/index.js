import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from '../src/components/Navbar/Navbar'
import Home from '../src/components/Home/Home'
import About from '../src/components/About/About'
import Skills from '../src/components/Skills/Skills'
import Final from '../src/components/Final/Final'
import Work from '../src/components/Work/Work'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <About />
    <Skills />
    <Work />
    <Final />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
