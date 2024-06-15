import React from "react";
import "./SectionThree.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel, Keyboard } from "swiper/modules";
import { db } from "../../firebase";
import { getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SectionThree = () => {
  const [projects, setProjects] = useState([]);
  const collectionRef = collection(db, "projects");

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

  return (
    <div id="section-projects" className="section-projects section">
      <h2>My projects!</h2>
      <div className="slide">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          {projects.map((project) => (
            <SwiperSlide className="ss" key={project.id}>
              <div className="project-div">
                <div className="image-container">
                  <img src={project.imageURL} alt={project.title} />
                </div>

                <div className="info-container">
                  <h6 className="project-title">{project.title}</h6>
                  <p className="project-description">{project.description}</p>
                  <a href={project.link}>
                    {project.link !== "" ? (
                      <button>See Project</button>
                    ) : (
                      <button>Coming Soon</button>
                    )}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SectionThree;
