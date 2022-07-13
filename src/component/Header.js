import React from 'react'
import Nav from './Nav'
import HeroSection from './HeroSection'
export  default function Header(){

  return(
    <header className="header">
      <div className="header-container">
       <Nav />
      </div>
      <HeroSection />
    </header>
  )
}

