/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState("");
  const [activeClassHeader, setActiveClassHeader] = React.useState("");

  React.useEffect(() => {
    const sections = [
      "#section-me",
      "#section-skills",
      "#section-services",
      "#section-contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const sectionId of sections) {
        const section = document.querySelector(sectionId);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;

          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            if (sectionId !== "#section-me") {
              setActiveClassHeader("header-active");
            } else {
              setActiveClassHeader("");
            }
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className={`position-header ${activeClassHeader}`}>
      <div className="container header">
        <p className="text">
          <b>Portafolio </b> /Luis Castro{" "}
        </p>
        <nav className="menu">
          <ul>
            <li>
              <a
                data-item="Home"
                onClick={() => scrollToSection("#section-me")}
                className={activeSection === "#section-me" ? "active" : ""}
              >
                Home
              </a>
            </li>
            <li>
              <a
                data-item="Habilidades"
                onClick={() => scrollToSection("#section-skills")}
                className={activeSection === "#section-skills" ? "active" : ""}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                data-item="Servicios"
                onClick={() => scrollToSection("#section-services")}
                className={
                  activeSection === "#section-services" ? "active" : ""
                }
              >
                Servicios
              </a>
            </li>
            <li>
              <a
                data-item="Contacto"
                onClick={() => scrollToSection("#section-contact")}
                className={activeSection === "#section-contact" ? "active" : ""}
              >
                Contáctame
              </a>
            </li>
            <li>
              <button className="btn-dark">Más sobre mí</button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
