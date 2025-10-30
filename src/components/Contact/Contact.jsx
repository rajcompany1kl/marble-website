import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className="contact container">
    <div className="kicker">Get in touch</div>
    <h2>Contact Us</h2>
    <div className="content">
      <div className="info">
        <p style={{fontWeight:700}}>📍 Bhuvana, Udaipur, Rajasthan</p>
        <p style={{fontWeight:700}}>📞 +91 8302207268</p>
        <p style={{fontWeight:700}}>📧 info@marbleomlux.com</p>
        <p style={{marginTop:12, color:'var(--muted)'}}>We respond within 1 business day. For urgent enquiries call the number above.</p>
         {/* <a
          href="https://www.google.com/maps?q=Bhuvana,+Udaipur,+Rajasthan"
          target="_blank"
          rel="noopener noreferrer"
          className="map-btn"
        >
           Open in Google Maps
        </a> */}
      </div>

      <div className="map card">
        <iframe
          title="MarbleLux Location"
          src="https://www.google.com/maps?q=Bhuvana,+Udaipur,+Rajasthan&output=embed"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </div>
  </div>
)

export default Contact
