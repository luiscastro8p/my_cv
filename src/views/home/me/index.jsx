import "./index.css";
import TypingEffect from "../../../components/typeWriteEffect";
import github from "../../../assets/img/github.svg";

import facebook from "../../../assets/img/facebook.svg";
import instagram from "../../../assets/img/instagram.svg";
import download from "../../../assets/img/download.svg";
import portafolio from "../../../assets/portafolio.pdf";
import whatsapp from "../../../assets/img/whatsapp.svg";

const Me = () => {
  return (
    <section className="background-home scroll-target" id="section-me">
      <div className="home">
        <div className="home-body">
          <div className="content-text">
            <div className="animate__animated animate__fadeInLeft animate__fast">
              <h2>
                Hola, soy <br></br> Luis Castro
              </h2>
              <TypingEffect
                data={[
                  "Desarrollador web",
                  "Ing. informático",
                  "Técnico en computación",
                ]}
              />
            </div>
            {/*   <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small> */}

            <p className="description">
              Soy un desarrollador web frontend con más de 5 años de experiencia
              en la creación de interfaces modernas, dinámicas y responsivas.
              Actualmente resido en Sinaloa, México, y me especializo en
              desarrollar soluciones escalables y optimizadas para distintos
              dispositivos. Me enfoco en escribir código limpio, seguir buenas
              prácticas de desarrollo y mantenerme siempre actualizado con las
              últimas tendencias del desarrollo web.
            </p>

            <div className="buttons-body animate__animated animate__fadeInLeft animate__faster">
              {/*     <button className="btn-dark">Más sobre mí</button> */}

              <a
                className="btn-white"
                href={portafolio}
                target="_blank"
                rel="noopener noreferrer"
              >
                Resumen
                <img
                  src={download}
                  alt="download"
                  width={13}
                  style={{ marginLeft: "8px" }}
                />
              </a>
            </div>
            <div className="img-body ">
              <a
                href="https://github.com/luiscastro8p"
                target="_blank"
                rel="noreferrer"
              >
                <img src={github} alt="github" />
              </a>
              <a
                href="https://www.facebook.com/luiscastro8p/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/luiscastro8p"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="instagram" />
              </a>
              <a
                href="https://wa.me/+526683977444"
                target="_blank"
                rel="noreferrer"
              >
                <img src={whatsapp} alt="whatsapp" />
              </a>
            </div>
          </div>
        </div>
        <div className="content-image animate__animated animate__fadeInTopRight">
          <div style={{ position: "relative" }}>
            <div className="img-profile">
              <div className="small-point" />
              <div className="big-point" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Me;
