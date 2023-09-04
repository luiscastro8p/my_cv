import React from "react";
import "./skills.css";

import angular from "../../../assets/img/skills/angular.png";
import react from "../../../assets/img/skills/react.png";
import js from "../../../assets/img/skills/js.png";
import ts from "../../../assets/img/skills/typescript.svg";
import html from "../../../assets/img/skills/html.png";
import css from "../../../assets/img/skills/css.svg";
import sass from "../../../assets/img/skills/sass.png";
import ionic from "../../../assets/img/skills/ionic.avif";
import Separator from "../../../components/separator/separator";
import github from "../../../assets/img/skills/git.png";


const Skills = () => {
  const duration = 2000; // ms
  const delay = 500; // ms

  const animStr = (i) =>
    `pulse ${duration}ms ease-out ${delay * (i + 1)}ms forwards infinite`;
  return (
    <>
      <section className="skills scroll-target" id="section-skills">
        <Separator label={"Habilidades"} />
        <div className="content">
          <div className="question  animate__animated animate__bounceInLeft">
            <p>
              ¿Qué incluyen mis <br></br> habilidades de programación?
            </p>
            <small>
              Tengo experiencia sólida en programación con JavaScript y
              TypeScript, abarcando el desarrollo front-end usando{" "}
              <b className="text-secondary">
                {" "}
                HTML, CSS, React, Ionic y Angular.
              </b>{" "}
              Además, domino sistemas de control de versiones como{" "}
              <b className="text-secondary">Git</b> y la resolución de problemas
              en entornos de desarrollo. Mi enfoque colaborativo potencia mis
              habilidades técnicas en proyectos de equipo.
            </small>
          </div>
          <div className="img-skills  animate__animated animate__bounceInRight ">
            <img
              src={angular}
              alt="angular"
              style={{ animation: animStr(0) }}
            />
            <img src={react} alt="react" style={{ animation: animStr(1) }} />
            <img src={js} alt="js" style={{ animation: animStr(2) }} />
            <img src={ts} alt="ts" style={{ animation: animStr(3) }} />
            <img src={html} alt="html" style={{ animation: animStr(4) }} />
            <img src={css} alt="css" style={{ animation: animStr(5) }} />
            <img src={sass} alt="sass" style={{ animation: animStr(6) }} />
            <img src={ionic} alt="ionic" style={{ animation: animStr(7) }} />
            <img src={github} alt="github" style={{ animation: animStr(8) }} />

          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
