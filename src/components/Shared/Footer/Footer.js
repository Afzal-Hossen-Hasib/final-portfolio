import React from 'react';
import './Footer.css'

const Footer = () => {

    const today = new Date();
  const year = today.getFullYear();

    return (
        <footer className='container foote-cont'>
            <div className="container top">
                <p className='text-center'> &#169; {year} || All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;