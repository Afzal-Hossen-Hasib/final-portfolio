import React from "react";
import "./Footer.css";
import logo from "../../../Images/pic/HASIB (1).png";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <footer class="footer items-center text-neutral-content container foote-cont">
      <div class="items-center grid-flow-col title">
        <img src={logo} alt="" />
        <p className="text-center text-black">
          &#169; <span>{year}</span> || All Rights Reserved ||
          <span> AFZAL HOSSEN HASIB</span>
        </p>
      </div>
      <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end title-anc">
        <a
          href="https://www.linkedin.com/in/afzal-hossen-hasib-ba159b241/"
          target="_blank"
          className="btn_shadow"
        >
          <i class="fa-brands fa-linkedin-in"></i>
        </a>
        <a
          href="https://github.com/afzahossenhasib"
          target="_blank"
          className="btn_shadow"
        >
          <i class="fa-brands fa-github"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
