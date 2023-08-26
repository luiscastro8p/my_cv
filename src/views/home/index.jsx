import React from "react";
import "./index.css";
import Header from "./header";
import Me from "./me";
import Skills from "./skills/skills";
import Services from "./services/services";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Me />
      <Skills/>
      <Services/>
    
    </div>
  );
};

export default Home;
