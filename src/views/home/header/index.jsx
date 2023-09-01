/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./index.css";
import user from "../../../assets/img/menu/user-solid.svg";
import cog from "../../../assets/img/menu/gears-solid.svg";
import folder from "../../../assets/img/menu/folder-open-regular.svg";
import contact from "../../../assets/img/menu/envelope-solid.svg";

const Navbar = () => {
  const [activeSection, setActiveSection] = React.useState("#section-me");
  const [activeClassHeader, setActiveClassHeader] = React.useState("");
  const [activeMenu, setActiveMenu] = React.useState(false);
  const [currentSection, setCurrentSection] = React.useState("#section-me");
  console.log(currentSection);

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

  React.useEffect(() => {
    console.log("cambio");
    /*    const section = document.querySelector(currentSection);
    section.classList.add("animate__animated");
    section.classList.add("animate__fadeIn");
    setTimeout(() => {
      section.classList.remove("animate__animated");
      section.classList.remove("animate__fadeIn");
    }, 1000); */
  }, [currentSection]);

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
      <nav>
        <ul>
          <li
            className={activeSection === "#section-me" ? "active" : ""}
            onClick={() => scrollToSection("#section-me")}
          >
            <div>
              <img src={user} alt="icon" width={30} />
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
          <li></li>
        </ul>
      </nav>
      
    </>
  );
};

export default Navbar;
