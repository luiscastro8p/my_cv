import React from "react";
import "./index.css";
import Header from "./header";
import Me from "./me";
import Skills from "./skills/skills";
import Services from "./services/services";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import 'animate.css';
const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Me />
      <Skills />
      <Services />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
