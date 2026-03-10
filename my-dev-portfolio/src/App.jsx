import React from 'react'
import Navbar from './components/layout/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

const App = () => {
  return (
    <div className='min-h-screen bg-black pb-[100vh]'>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>

  )
}

export default App