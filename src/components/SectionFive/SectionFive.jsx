import React, { useRef } from "react";
import "./SectionFive.css";
import emailjs from "@emailjs/browser";

const SectionFive = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_uv9j9jt", "template_10pe29h", form.current, {
        publicKey: "Xl6LeMDgkTYwUVGYz",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="section-contact" className="section-contact section">
      <div className="contact">
        <h2>Contact me!</h2>
        <div className="contact-form ">
          <form ref={form} onSubmit={sendEmail}>
            <div className="u-e">
              <input
                type="text"
                name="user_name"
                className="user_name"
                placeholder="Your Name"
              />
              <input
                type="email"
                name="user_email"
                className="user_email"
                placeholder="Your e-mail"
              />
            </div>
            <div>
              <textarea
                name="message"
                className="message"
                placeholder="Your message..."
              />
            </div>
            <input type="submit" value="Send" className="send-button" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
