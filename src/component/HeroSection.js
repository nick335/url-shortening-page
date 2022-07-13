import React from "react";
import heroImage from '../images/illustration-working.svg'

export default function HeroSection(){
  return(
    <section className="hero-section">
      <div className="hero-section-container">
        <div className="hero-section-info">
          <h1 className="hero-section-info-header"> More than just shorter links</h1>
          <p className="hero-section-info-para">
            Build your brand’s recognition and get detailed insights on how your links are performing.
          </p>
          <button className="btn hero-btn">Get Started</button>
        </div>
        <div className="hero-section-imgDiv">
          <img alt="heroImg" className="hero-section-imgDiv-img" src={heroImage} />
        </div>
      </div>
    </section>
  )
}