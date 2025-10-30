import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Products from './components/Products/Products'
import Gallery from './components/Gallery/Gallery'
import Contact from './components/Contact/Contact'

function App(){
  return (
    <>
      <Navbar />
      <main>
        <section id="home"><Hero /></section>
        <section id="about"><About /></section> 
        <section id="products"><Products /></section>
        {/* <section id="gallery"><Gallery /></section> */}
        <section id="contact"><Contact /></section>
      </main>
       {/* 🌿 Floating WhatsApp Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
      >
        <img src="/whatsapplogo.png" alt="Chat on WhatsApp" />
      </a>
    </>
  )
}

export default App
