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

const Skills = () => {
  return (
    <div className="container">
      <section className="skills scroll-target" id="section-skills">
        <Separator label={"Habilidades"} />
        <div className="content">
          <div className="question">
            <p>
              ¿Qué incluyen mis <br></br> habilidades de programación?
            </p>
            <small>
              Tengo experiencia sólida en programación con JavaScript y
              TypeScript, abarcando el desarrollo front-end usando{" "}
              <b className="text-secondary"> HTML, CSS, React, Ionic y Angular.</b> Además, domino sistemas
              de control de versiones como   <b className="text-secondary">Git</b> y la resolución de problemas en
              entornos de desarrollo. Mi enfoque colaborativo potencia mis
              habilidades técnicas en proyectos de equipo.
            </small>
          </div>
          <div className="img-skills">
            <img src={angular} alt="angular" />
            <img src={react} alt="react" />
            <img src={js} alt="js" />
            <img src={ts} alt="ts" />
            <img src={html} alt="html" />
            <img src={css} alt="css" />
            <img src={sass} alt="sass" />
            <img src={ionic} alt="ionic" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
