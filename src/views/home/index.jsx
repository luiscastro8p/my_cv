import React from "react";
import "./index.css";
import Header from "./header";
import Me from "./me";
import Skills from "./skills/skills";
import Services from "./services/services";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import AboutMe from "./about_me/about_me";
const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Me />
      <AboutMe/>
      <Skills />
      <Services />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
