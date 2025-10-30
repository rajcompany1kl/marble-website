import React from 'react'
import './Gallery.css'

const Gallery = () => (

  <div className="gallery container">
    <div className="kicker">Our Work</div>
    <h2>Our Services</h2>

    
    <div className="gallery-grid">
      {[1,2,3,4,5,6].map((n) => (
        <img key={n} src={`https://images.yourstory.com/cs/21/98e25df018b511e988ceff9061f4e5e7/Imagewhy6-1581686876624.jpg`} alt={"project-"+n} />
      ))}
    </div>
  </div>
)

export default Gallery
