import React from 'react';
import hero from '../../Images/pic/new2.png'
import './About.css'

const About = () => {
    return (
        <div className='container about-hero'>
            <section className='hero' id='home'>
                <div className="container f_flex top">

                <div className="right">
                    <div className="right_img">
                        <img src={hero} alt="" />
                    </div>
            </div>

                    <div className="left top">
                        <h3>WELCOME TO MY WORLD</h3>
                        <h1>Hi, I'm <span>Afzal Hossen Hasib</span></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident obcaecati laborum dolor, libero dolorum inventore eum corrupti ab a iste nobis? Officia aperiam repellat aliquid, quibusdam nobis harum ut illo nisi enim veritatis dignissimos mollitia non cum tempore cumque delectus, rem minus corrupti ratione vel? Nesciunt quis facilis a ad?</p>

       
                    </div>

                    

                </div>
            </section>
        </div>
    );
};

export default About;