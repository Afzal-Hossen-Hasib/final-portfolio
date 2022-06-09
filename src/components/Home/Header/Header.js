import React, { useState } from 'react';
import logo from '../../../Images/pic/logo.png'
import './Header.css'
import { Link } from 'react-router-dom';


const Header = () => {

    // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)

    return (
        <div>
            <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' />
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li><Link to='/'>Home</Link></li>
                <li><Link to='/about'>About</Link></li>
                  <li><Link to='/project'>Projects</Link></li>
                  <li><Link to='/'>Resume</Link></li>
                  <li><Link to='/'>Blog</Link></li>
                  <li><Link to='/'>Contact</Link></li>
            </ul>

            <button className='t-btn' onClick={() => setMobile(!Mobile)}>
            {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
        </div>
    );
};

export default Header;