import React, {useState} from 'react'
import {Link} from "react-router-dom"
import Button from './Button';
import "./Navbar.css"

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => {
        setClick(false);
    }

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener("resize", showButton)

    return (
    <>
        <nav className="navbar">
            <div className="navbar-container">
              <Link to="/" className="navbar-logo">
                  portfolio  <i className="fab fa-typo3" />
              </Link>
              <div className="menu-icon" onClick={handleClick}>
                  <i className={click ? "fas fa-times" : "fas fa-bars"} />
              </div>
              <ul className={click ? "nav-menu active" : "nav-menu"}>
                  <li className="nav-item">
                      <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                          Home
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/Skills" className="nav-links" onClick={closeMobileMenu}>
                          Skills
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/Education" className="nav-links" onClick={closeMobileMenu}>
                          Education
                      </Link>
                  </li>
                  <li className="nav-item">
                      <Link to="/contact" className="nav-links-mobile" onClick={closeMobileMenu}>
                          contact
                      </Link>
                  </li>
              </ul>
              {button && <Button buttonStyle="btn--outline">Contact</Button>}
            </div>
        </nav>
    </>                
    )
}

export default Navbar
