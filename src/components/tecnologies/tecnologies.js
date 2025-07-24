import React from "react";
import angular from "../../assets/img/skills/angular.png";
import react from "../../assets/img/skills/react.png";
import bootstrap from "../../assets/img/skills/bootstrap.png";
import sass from "../../assets/img/skills/sass.png";
import html from "../../assets/img/skills/html.png";
import js from "../../assets/img/skills/js.png";
import ts from "../../assets/img/skills/typescript.svg";
import nodejs from "../../assets/img/skills/nodejs.png";
import rxjs from "../../assets/img/skills/rxjs.jpeg";


const Tecnologies = ({ data }) => {
  const tecnologies = [
    { id: 1, img: angular, alt: "Angular", width: 20, height: 20 },
    { id: 2, img: react, alt: "React", width: 25, height: 20 },
    { id: 3, img: bootstrap, alt: "Bootstrap", width: 24, height: 20 },
    { id: 4, img: sass, alt: "Sass", width: 24, height: 20 },
    { id: 5, img: html, alt: "HTML", width: 20, height: 20 },
    { id: 6, img: js, alt: "JavaScript", width: 20, height: 20 },
    { id: 7, img: ts, alt: "TypeScript", width: 20, height: 20 },
    { id: 8, img: nodejs, alt: "Node js", width: 20, height: 20 },
    { id: 9, img: rxjs, alt: "Rxjs", width: 20, height: 20 },
  ];
  const selectedTech = tecnologies.find((tech) => tech.id === data);
  return (
    <>
      {selectedTech && (
        <img
          src={selectedTech.img}
          alt={selectedTech.alt}
          width={selectedTech.width}
          height={selectedTech.height}
        />
      )}
    </>
  );
};

export default Tecnologies;
