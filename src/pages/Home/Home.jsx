import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import hi from "../../photos/hi.png";
import {
  FaCode,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { IoLogoJavascript, IoLogoFirebase } from "react-icons/io5";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const collectionRef = collection(db, "projects");
  const form = useRef();
  const [text] = useTypewriter({
    words: ["Hi! I'm Danilo Petrovic, web developer :)"],
    loop: 1,
    typeSpeed: 50,
    deleteSpeed: 0,
  });

  const getProjects = async () => {
    try {
      const ads = await getDocs(collectionRef);
      const filteredAds = ads.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProjects(filteredAds);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

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
    <div className="Home">
      <div className="section-hi">
        <img src={hi} className="pfp" alt="Profile" />
        <h1>
          {text}
          <Cursor />
        </h1>
      </div>

      <div id="section-about" className="section-about">
        <h2>About me!</h2>
        <div className="texts">
          <div className="text-1">
            <p>
              Hello! My name is Danilo Petrović, an aspiring web developer from
              Novi Pazar, Serbia. At the age of 17, I am passionately diving
              into the world of web development, aiming to enhance my skills and
              create inspiring digital products.
            </p>
            <p className="code-p">
              <FaCode className="code-p" />
            </p>
          </div>

          <div className="text-2">
            <p>
              I have completed a web programming course, which has further
              strengthened my knowledge and skills in this field. Currently, I
              attend Technical School in Novi Pazar, studying Electrical
              Engineer in Information Technology. Here, I discovered my interest
              in programming and design, motivating me to explore the world of
              web technologies and embark on my career in this dynamic field.
            </p>
          </div>
        </div>
      </div>

      <div id="section-projects" className="section-projects">
        <h2>My projects!</h2>
        <div className="slide">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
          >
            {projects.map((project) => (
              <SwiperSlide className="project-div">
                <div className="image-container">
                  <img src={project.imageURL} />
                </div>
                <h6 className="project-title">{project.title}</h6>
                <p className="project-description">{project.description}</p>
                <a href={project.link}>
                  {project.link !== "" ? (
                    <button>See Project</button>
                  ) : (
                    <button>Coming Soon</button>
                  )}
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div id="section-skills" className="section-skills">
        <h1>Skills</h1>
        <div className="skills">
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

      <div id="section-contact" className="section-contact">
        <div className="contact">
          <h2>Contact me!</h2>
          <div className="contact-form">
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
          <hr />
          <footer>
            <div className="footer-content">
              <div className="contact-info">
                <p>
                  Email:{" "}
                  <span className="footer-span">pdanilo8207@gmail.com</span>
                </p>
                <p>
                  Phone: <span className="footer-span">+381 61 2988106</span>
                </p>
                <p>
                  Address:{" "}
                  <span className="footer-span">Novi Pazar, Serbia</span>
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
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
