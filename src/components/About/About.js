import React from "react";
import hero from "../../Images/pic/new2.png";
import "./About.css";

const About = () => {
  return (
    <div className="container about-hero">
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="right">
            <div className="about_img">
              <img src={hero} alt="" />
            </div>
          </div>

          <div className="left top">
            <h1>
              <span>About Me</span>
            </h1>
            <p className="mb-10">
              I enjoy taking complex problems and turning them into simple ones.
              I also love the logic and structure of coding and always strive to
              write efficient code whether it be HTML, CSS, or ReactJs. I'm a
              self-motivated and passionate web developer with a deep interest
              in JavaScript. Expert in developing Single-Page applications
              (SPA)using ReactJS. Have a good knowledge of ES6, Bootstrap and
              also comfortable with NodeJS, Material-UI, ExpressJS, and MongoDB.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
