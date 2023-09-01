/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import user from "../../../assets/img/menu/user-solid.svg";
import cog from "../../../assets/img/menu/gears-solid.svg";
import folder from "../../../assets/img/menu/folder-open-regular.svg";
import contact from "../../../assets/img/menu/envelope-solid.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState("");
  const [activeClassHeader, setActiveClassHeader] = React.useState("");
  const [activeMenu, setActiveMenu] = React.useState(false);

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

  const onClickMenu = () => {
    setActiveMenu(!activeMenu);
  };
  return (
    <>
      {/* <div className={`position-header ${activeClassHeader}`}>
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
      </div> */}

      <nav>
        <ul>
          <li
            className={activeSection === "#section-me" ? "active" : ""}
            style={{content:activeSection === "#section-me" ? "home" : ""}}
            onClick={() => scrollToSection("#section-me")}
          >
            <div className="about-icon  ">
              <img src={user} alt="icon" width={30} />
            </div>
          </li>
          <li
            className={
              activeSection === "#section-skills" ? "active" : ""
            }
            onClick={() => scrollToSection("#section-skills")}
          >
            <div className="about-icon">
              <img src={cog} alt="cog" width={30} />
            </div>
          </li>
          <li
            className={
              activeSection === "#section-services" ? "active" : ""
            }
            onClick={() => scrollToSection("#section-services")}
          >
            <div className="about-icon">
              <img src={folder} alt="folder" width={30} />
            </div>
          </li>
          <li
            className={
              activeSection === "#section-contact" ? "active" : ""
            }
            onClick={() => scrollToSection("#section-contact")}
          >
            <div className="about-icon">
              <img src={contact} alt="contact" width={30} />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
