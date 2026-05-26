import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Stats from './components/Stats'
import Partners from './components/Partners'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyUs />
      <Stats />
      <Partners />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  )
}

export default App
