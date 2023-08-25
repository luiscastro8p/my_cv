import React from "react";
import "./index.css";
import Header from "./header";
import Me from "./me";
import Skills from "./skills/skills";

const Home = () => {
  return (
    <div style={{ position: "relative" }}>
      <Header />
      <Me />
      <Skills/>
    
    </div>
  );
};

export default Home;
