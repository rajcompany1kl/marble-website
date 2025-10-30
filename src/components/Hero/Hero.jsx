import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <div className="kicker">Trusted Marble Exporters</div>
          <h1>Supplying Premium Stone for Global Projects</h1>
          <p>Delivering the finest Indian marble and granite since 1995. We source, process, and export high-quality natural stone for builders, dealers, and architectural ventures.</p>
          <div className="actions">
            <button className="btn-primary" onClick={() => document.getElementById('products')?.scrollIntoView({behavior:'smooth'})}>View Products</button>
            <button className="btn-secondary" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>Get a Quote</button>
          </div>
        </div>

        <div className="feature-card card">
          <h3>Why MarbleLux?</h3>
          <p>Direct quarry sourcing • Export-quality finishes • Reliable supply for bulk orders</p>
        </div>
      </div>
    </section>
  )
}

export default Hero  
