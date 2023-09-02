import React from "react";
import "./about_me.css";
import Separator from "../../../components/separator/separator";
import perfil from "../../../assets/img/about.png";
const AboutMe = () => {
  function calculateAge(date) {
    const current = new Date();
    const year = date.getFullYear();
    const mount = date.getMonth();
    const day = date.getDate();

    const currentYear = current.getFullYear();
    const currentMount = current.getMonth();
    const currentDay = current.getDate();

    let edad = currentYear - year;

    // Ajustar la edad si aún no ha cumplido años este año
    if (currentMount < mount || (currentMount === mount && currentDay < day)) {
      edad--;
    }

    return edad;
  }
  function calculateExperiencie(date) {
    const current = new Date();
    const year = date.getFullYear();
    const currentYear = current.getFullYear();

    let experiencieYear = currentYear - year;

    return `${experiencieYear} años`;
  }
  return (
    <div className="container">
      <Separator label={"Sobre mí"} />
      <section className="background-home scroll-target" id="about-me">
        <div className="container">
          <div className="about">
            <div className="content-image">
              <img src={perfil} alt="perfil" width={300} />
            </div>
            <div className="about-body">
              <div>
                <p>
                  Nombre: <b>Luis Armando Castro Cota</b>
                </p>
                <p>
                  Edad: <b>{calculateAge(new Date("1999-10-29"))}</b>
                </p>
                <p>
                  Ciudad: <b>Los Mochis. Sin</b>
                </p>
                <p>
                  Experiencia:{" "}
                  <b>{calculateExperiencie(new Date("2018-09-01"))}</b>
                </p>
                <p>
                  Nivel de experiencia:
                  <b> Mid-level</b>
                </p>
              </div>

              <div className="content-text animate__animated animate__fadeInLeft animate__fast ">
                <p>
                  Desarrollador web entusiasta, abierto al aprendizaje. Mi
                  pasión por crear soluciones digitales se combina con un deseo
                  constante de aprender y mejorar. Siempre estoy listo para
                  enfrentar nuevos desafíos y mantenerme actualizado en este
                  campo en constante evolución.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
