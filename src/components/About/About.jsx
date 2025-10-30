import React from 'react'
import './About.css'

const About = () => (
  <div className="about container">
    <div className="wrap">
      <div>
        <div className="kicker">About Us</div>
        <h2>We deliver stone excellence from quarry to site</h2>
        <p /* style={{ textAlign: 'center' }} */>At MarbleLux, we bring the finest Indian marble and granite to your projects. With over 25 years of experience in natural stone trade, we ensure unmatched quality and reliability for builders and exporters.</p>
        <p /* style={{ textAlign: 'center' }} */>We manage quarry selection, block cutting, slab processing, and global dispatch — all under one roof.</p>

        <div className="stats" style={{marginTop:18}}>
          <div className="stat">
            <div className="num">+25</div>
            <div className="label">Years experience</div>
          </div>
          <div className="stat">
            <div className="num">1200+</div>
            <div className="label">Projects completed</div>
          </div>
          <div className="stat">
            <div className="num">20</div>
            <div className="label">Premium quarries</div>
          </div>
        </div>
      </div>

      <div className="card" style={{textAlign:'center'}}>
        <h3>Quality & Service</h3>
        <p style={{color:'var(--muted)'}}>Advanced machinery, skilled finishers, and strict inspection to meet global export standards.</p>
      </div>
    </div>
  </div>
)

export default About  
