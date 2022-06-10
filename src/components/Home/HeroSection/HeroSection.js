import React from "react";
import hero from "../../../Images/pic/new1.png";
import "./HeroSection.css";

const HeroSection = () => {
  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="container">
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span>Afzal Hossen Hasib</span>
            </h1>
            <h2>
              A <span>Junior Web Developer !!</span>
            </h2>

            <p>
              I'm a Bangladesh based Junior Web Developer focused on crafting
              clean and user‑friendly experiences, I am passionate about
              building excellent website that improves the lives of those around
              me.
            </p>

            <a href="https://drive.google.com/uc?export=download&id=1OQuZUZxirHnBiMHDCmweVaHp9SiHH-Qb">
              <button class="home-btn mt-10" download>
                Download Resume
              </button>
            </a>

            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>FIND WITH ME</h4>
                <div className="button">
                  <a href="https://www.linkedin.com/in/afzal-hossen-hasib-ba159b241/" target="_blank" className="btn_shadow">
                    <i class="fa-brands fa-linkedin-in"></i>
                  </a>

                  <a href="https://github.com/afzahossenhasib" target="_blank" className="btn_shadow">
                    <i class="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <div className="right_img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
