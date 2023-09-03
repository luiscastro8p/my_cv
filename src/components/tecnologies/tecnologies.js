import React from "react";
import angular from "../../assets/img/skills/angular.png";
import react from "../../assets/img/skills/react.png";
import bootstrap from "../../assets/img/skills/bootstrap.png";
import sass from "../../assets/img/skills/sass.png";
import html from "../../assets/img/skills/html.png";
import js from "../../assets/img/skills/js.png";
import ts from "../../assets/img/skills/typescript.svg";
const Tecnologies = ({ data }) => {
  return (
    <>
      {data === 1 && <img src={angular} alt="angular" width={20} height={20} />}
      {data === 2 && <img src={react} alt="react" width={25} height={20} />}
      {data === 3 && (
        <img src={bootstrap} alt="bootstrap" width={24} height={20} />
      )}
      {data === 4 && <img src={sass} alt="sass" width={24} height={20} />}
      {data === 5 && <img src={html} alt="html" width={20} height={20} />}
      {data === 6 && <img src={js} alt="js" width={20} height={20} />}
      {data === 7 && <img src={ts} alt="ts" width={20} height={20} />}
      
    </>
  );
};

export default Tecnologies;
