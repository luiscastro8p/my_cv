import React from "react";
import "./index.css";
import Header from "./header";
import Me from "./me";
import Skills from "./skills/skills";
import Services from "./services/services";
import Contact from "./contact/contact";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Me />
      <Skills />
      <Services />
      <Contact/>
    </div>
  );
};

export default Home;
