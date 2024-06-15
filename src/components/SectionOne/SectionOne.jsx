import React from "react";
import "./SectionOne.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import hi from "../../photos/hi.png";

const SectionOne = () => {
  const [text] = useTypewriter({
    words: ["Hi! I'm Danilo Petrovic, web developer :)"],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 0,
  });

  return (
    <div class="section-hi section">
      <div class="container">
        <img src={hi} className="pfp" alt="Profile" />
        <h1>
          {text}
          <Cursor />
        </h1>
      </div>
    </div>
  );
};

export default SectionOne;
