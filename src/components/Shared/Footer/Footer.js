import React from 'react';

const Footer = () => {

    const today = new Date();
  const year = today.getFullYear();

    return (
        <footer>
            <div className="container top">
                <div className="img">
                <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
    <img src="https://api.lorem.space/image/face?hash=3174" />
  </div>
</div>
                </div>
                <p> &#169; {year} || All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer;