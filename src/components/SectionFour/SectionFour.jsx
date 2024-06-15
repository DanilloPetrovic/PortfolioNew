import React from "react";
import "./SectionFour.css";
import { FaHtml5, FaCss3, FaReact, FaBootstrap } from "react-icons/fa";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";

const SectionFour = () => {
  return (
    <div id="section-skills" className="section-skills section">
      <h2>Skills</h2>
      <div className="skills centery">
        <div className="up">
          <div>
            <button>
              <FaHtml5 className="skill" />
            </button>
            <p className="skills-p">HTML</p>
          </div>

          <div>
            <button>
              <FaCss3 className="skill" />
            </button>
            <p className="skills-p">CSS</p>
          </div>

          <div>
            <button>
              <IoLogoJavascript className="skilljs" />
            </button>
            <p className="skills-p">JavaScript</p>
          </div>
        </div>

        <div className="down">
          <div>
            <button>
              <FaReact className="skill" />
            </button>
            <p className="skills-p">React</p>
          </div>

          <div>
            <button>
              <IoLogoFirebase className="skill" />
            </button>
            <p className="skills-p">Firebase</p>
          </div>

          <div>
            <button>
              <FaBootstrap className="skill" />
            </button>
            <p className="skills-p">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
