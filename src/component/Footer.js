import React from "react";
import logo from '../images/logo2.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFacebookSquare, faTwitter, faInstagram, faPinterest} from '@fortawesome/free-brands-svg-icons'


export default function Footer(){
  return(
    <footer className="footer">
      <div className="footer-div">
        <div className="footer-div-logo">
          <img alt="logo" className="logo" src={logo}/>
        </div>
        <div className="footer_link-logo">
          <div className="link-divs">
            <div className="link-div">
              <h3 className="link-div-header">Features</h3>
              <ul className="links">
                <li className="link">Link Shortening</li>
                <li className="link">Branded Links</li>
                <li className="link">Analytics</li>
              </ul>
            </div>
            <div className="link-div">
              <h3 className="link-div-header">Resources</h3>
              <ul className="links">
                <li className="link">Blog</li>
                <li className="link">Developers</li>
                <li className="link">Support</li>
              </ul>
            </div>
            <div className="link-div">
              <h3 className="link-div-header">Company</h3>
              <ul className="links">
                <li className="link">About</li>
                <li className="link">Our Team</li>
                <li className="link">Careers</li>
                <li className="link">Contact</li>
              </ul>
            </div>
          </div>
          <div className="logos">
            <FontAwesomeIcon className="social-icon" icon={faFacebookSquare} />
            <FontAwesomeIcon className="social-icon" icon={faTwitter} />
            <FontAwesomeIcon className="social-icon" icon={faPinterest} />
            <FontAwesomeIcon className="social-icon" icon={faInstagram} />
          </div>
        </div>
      </div>
    </footer>
  )
}