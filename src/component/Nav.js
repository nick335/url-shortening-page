import React from 'react'
import logo from '../images/logo.svg'


export default function Nav(){
  const [dispalyMenu, setDisplayMenu]= React.useState(false)

  function toggle(){
    setDisplayMenu(prevstate => !prevstate)
  }

  const menuClass = dispalyMenu ? 'is-active' : ''
  const showMenu = dispalyMenu ? 'active' : ''
  return(
    <nav className="nav">
      <div className="nav-logo">
        <img alt='logo' src={logo}  />
      </div>
      <div className={`nav-mobile ${showMenu}`}>
        <div className="nav-list">
          <ul className="nav-list-items">
            <li className="nav-list-item">Features</li>
            <li className="nav-list-item">Pricing</li>
            <li className="nav-list-item">Resources</li>
          </ul>
        </div>
        <div className="nav-btn">
          <button className='btn login'>Login</button>
          <button className='btn signup'>Sign Up</button>
        </div>
      </div>
      <div className={`navbar_toggle ${menuClass}`} onClick={toggle}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  )
}