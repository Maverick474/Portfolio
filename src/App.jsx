import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='custom-bg min-h-screen text-white'>
      <Navbar />
      
      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="education">
        <Education />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <Footer />
    </div>
  )
}

export default App
