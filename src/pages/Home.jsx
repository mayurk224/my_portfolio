import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Testimonial from '../sections/Testimonial'
import Contact from '../sections/Contact'
import Footer from '../components/Footer'
import ScrollToTop from '../components/ScrollToTop'

const Home = () => {
  return (
    <div className='h-screen flex'>
        <div className="hidden sm:flex">
            <Navbar/>
        </div>
        <div className="components sm:ml-36 w-full">
          <ScrollToTop/>
          <Hero/>
          <About/>
          <Skills/>
          <Projects/>
          <Testimonial/>
          <Contact/>
          <Footer/>
        </div>
    </div>
  )
}

export default Home