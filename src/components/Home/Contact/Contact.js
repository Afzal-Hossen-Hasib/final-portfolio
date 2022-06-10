import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import email from "../../../Images/email/undraw_Newsletter_re_wrob.png";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_h5qf96d",
        "template_4t2g012",
        form.current,
        "NbUhiOvOlqbpAl_4U"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="mb-20 contact container">
      <h1 class="text-3xl font-bold mb-3">Get In Touch Contact Me</h1>
      <div class="hero bg-base-200 shadow-2xl contact-card">
        <div class="hero-content flex-col lg:flex-row">
          <img src={email} class="w-5/12 rounded-lg" />
          <div className="ml-8">
            <form ref={form} onSubmit={sendEmail}>
              <div>
                <label class="label">
                  <span class="label-text mr-5">Name: </span>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>

              <div>
                <label class="label">
                  <span class="label-text mr-5">Email:</span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    class="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>

              <div>
                <label class="label">
                  <span class="label-text mr-5">Subject:</span>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    class="input input-bordered w-full max-w-xs"
                  />
                </label>
              </div>

              <div>
                <label class="label">
                  <span class="label-text mr-5">Message:</span>
                  <textarea
                    class="input input-bordered w-full max-w-xs"
                    name="message"
                    id=""
                    cols="37"
                    rows="3"
                    placeholder="Your Message"
                  ></textarea>
                </label>
              </div>

              <button class="btn btn-sm home-btn mt-5">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
