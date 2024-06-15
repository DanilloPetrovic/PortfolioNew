import React from "react";
import "./Footer.css";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-info">
        <p>
          Email: <span className="footer-span">pdanilo8207@gmail.com</span>
        </p>
        <p>
          Phone: <span className="footer-span">+381 61 2988106</span>
        </p>
        <p>
          Address: <span className="footer-span">Novi Pazar, Serbia</span>
        </p>
      </div>
      <div className="social-media-div">
        <div className="ig">
          <a href="https://www.instagram.com/pdanilo10/">
            <button>
              <FaInstagram className="skill" />
            </button>
          </a>
        </div>

        <div>
          <a href="https://github.com/DanilloPetrovic">
            <button>
              <FaGithub className="skill" />
            </button>
          </a>
        </div>

        <div>
          <a href="https://www.linkedin.com/in/danilo-petrovic-26ba15312/">
            <button>
              <FaLinkedin className="skill" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
