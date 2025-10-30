import React, { useState } from 'react'
import './Navbar.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
  const handleScroll = (id) => {
    if(isOpen){
      setIsOpen(false);
    }
    const el = document.getElementById(id)

    if(el){
      const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
      const yOffset = -navbarHeight;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
    
    }
  }

  return (
    <header className="navbar">
      <div className="logo">MarbleLux</div>

       {/* Hamburger Icon */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>

      <nav  className={`nav-links ${isOpen ? "active" : ""}`}>
        <a onClick={() => handleScroll('home')}>Home</a>
        <a onClick={() => handleScroll('about')}>About</a>
        <a onClick={() => handleScroll('products')}>Products</a>
        {/* <a onClick={() => handleScroll('gallery')}>Gallery</a> */}
        <a onClick={() => handleScroll('contact')}>Contact</a>
        <a className="cta" onClick={() => handleScroll('contact')}>Get Location</a>
      </nav>
    </header>
  )
}

export default Navbar
