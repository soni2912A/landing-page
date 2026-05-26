import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyUs from './components/WhyUs'
import Stats from './components/Stats'
import Portfolio from './components/Portfolio'
import Partners from './components/Partners'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import RegisterModal from './components/RegisterModal'

function App() {
  const [showModal, setShowModal] = useState(false)

  const handleGetStarted = () => {
    setShowModal(true)
  }

  return (
    <div className="min-h-screen">
      <Navbar onGetStarted={handleGetStarted} />
      <Hero onGetStarted={handleGetStarted} />
      <WhyUs onGetStarted={handleGetStarted} />
      <Stats />
      <Portfolio />
      <Partners />
      <Blog />
      <Testimonials />
      <FAQ />
      <Footer onGetStarted={handleGetStarted} />
      {showModal && <RegisterModal onClose={() => setShowModal(false)} />}
    </div>
  )
}

export default App
