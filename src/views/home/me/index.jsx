import React from "react";
import "./index.css";
import TypingEffect from "../../../components/typeWriteEffect";
import github from "../../../assets/img/github.svg";

import facebook from "../../../assets/img/facebook.svg";
import instagram from "../../../assets/img/instagram.svg";
import download from "../../../assets/img/download.svg";
import portafolio from '../../../assets/portafolio.pdf'
const Me = () => {
  return (
    <section className="background-home scroll-target" id="section-me">
      <div className="container">
        <div className="home">
          <div className="home-body">
            <div className="content-text ">
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
              <div className="buttons-body animate__animated animate__fadeInLeft animate__faster">
                <button className="btn-dark">Más sobre mí</button>
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
      </div>
    </section>
  );
};

export default Me;
