import React, { useRef, useState, useEffect } from "react";
import "./Home.css";
import SectionOne from "../../components/SectionOne/SectionOne";
import SectionTwo from "../../components/SectionTwo/SectionTwo";
import SectionThree from "../../components/SectionThree/SectionThree";
import SectionFour from "../../components/SectionFour/SectionFour";
import SectionFive from "../../components/SectionFive/SectionFive";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div className="Home">
      <SectionOne />

      <SectionTwo />

      <SectionThree />

      <SectionFour />

      <SectionFive />

      <Footer />
    </div>
  );
};

export default Home;
