/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import home from "../../../assets/img/menu/home.svg";
import cog from "../../../assets/img/menu/gears-solid.svg";
import folder from "../../../assets/img/menu/folder-open-regular.svg";
import contact from "../../../assets/img/menu/envelope-solid.svg";
import address from "../../../assets/img/menu/address.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState("#section-me");
  const [currentSection, setCurrentSection] = React.useState("#section-me");

  React.useEffect(() => {
    const sections = [
      "#section-me",
      "#about-me",
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
            if (sectionId !== currentSection) {
              setTimeout(() => {
                setCurrentSection(sectionId);
              }, 100);
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
    <>
      <nav>
        <ul>
          <li
            className={activeSection === "#section-me" ? "active" : ""}
            onClick={() => scrollToSection("#section-me")}
          >
            <div>
              <img src={home} alt="icon" width={30} />
            </div>
          </li>
          <li
            className={activeSection === "#about-me" ? "active" : ""}
            onClick={() => scrollToSection("#about-me")}
          >
            <div>
              <img src={address} alt="icon" width={30} />
            </div>
          </li>
          <li
            className={activeSection === "#section-skills" ? "active" : ""}
            onClick={() => scrollToSection("#section-skills")}
          >
            <div>
              <img src={cog} alt="cog" width={30} />
            </div>
          </li>
          <li
            className={activeSection === "#section-services" ? "active" : ""}
            onClick={() => scrollToSection("#section-services")}
          >
            <div>
              <img src={folder} alt="folder" width={30} />
            </div>
          </li>
          <li
            className={activeSection === "#section-contact" ? "active" : ""}
            onClick={() => scrollToSection("#section-contact")}
          >
            <div>
              <img src={contact} alt="contact" width={30} />
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
