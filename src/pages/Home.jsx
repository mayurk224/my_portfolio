import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'

const Home = () => {
  return (
    <div className='h-screen flex'>
        <div className="hidden sm:flex">
            <Navbar/>
        </div>
        <div className="components sm:ml-24 w-full">
          <Hero/>
          <About/>
          <Skills/>
        </div>
    </div>
  )
}

export default Home