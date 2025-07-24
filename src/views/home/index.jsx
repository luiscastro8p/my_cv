import React from "react";
import "./index.css";
import Header from "./header";
import Me from "./me";
import Skills from "./skills/skills";
import Services from "./services/services";
import Contact from "./contact/contact";
import Footer from "./footer/footer";
import AboutMe from "./about_me/about_me";
import moon from '../../assets/img/moon.jpg'
import Sun from '../../assets/img/Sun.png'

const Home = () => {
  const [darkMode, setDarkMode] = React.useState(false)
  React.useEffect(() => {
    const default_color = {
      '--primary': '#30391f',
      '--dark': 'black',
      '--white': '#ffffff',
      '--background': 'white',
      '--gray': '#9d9c9c',
      '--gray-light': '#9d9c9c40'
    }
    const dark_color = {
      '--primary': '#697d4b',
      '--dark': 'white',
      '--white': 'black',
      '--background': 'black',
      '--gray': '#9d9c9c',
      '--gray-light': '#9d9c9c40'
    }
    const rootElement = document.documentElement
    if (dark_color || default_color) {
      if (darkMode) {
        for (const key in dark_color) {
          const dark = dark_color[key];
          rootElement.style.setProperty(key, dark);
        }
      } else {
        for (const key in default_color) {
          const def = default_color[key];
          rootElement.style.setProperty(key, def);
        }
      }
    }
    return () => { }
  }, [darkMode])

  const handleOnClick = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div>
      <div className="container" style={{ position: "relative" }}>
        <div className="float-bottom" onClick={() => handleOnClick()} >
          Cambiar el modo
          <img src={darkMode ? Sun : moon} alt="moon" width={30} />
        </div>

        <Header />
        <Me />
       {/*  <AboutMe /> */}
        <Skills />
        <Services darkMode={darkMode} />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
