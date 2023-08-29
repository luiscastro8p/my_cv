import React from "react";
import "./index.css";
import TypingEffect from "../../../components/typeWriteEffect";
import github from "../../../assets/img/github.png";

import facebook from "../../../assets/img/facebook.png";
import instagram from "../../../assets/img/instagram.png";
import download from "../../../assets/img/download.png";

const Me = () => {
  return (
    <section className="background-home">
      <div className="container">
        <div className="home">
          <div className="home-body">
            <div className="content-text">
              <h2>Hola, soy <br></br> Luis Castro</h2>
              <TypingEffect
                data={[
                  "Desarrollador web",
                  "Ing. informático",
                  "Técnico en computación",
                ]}
              />
            {/*   <small>Lorem ipsum dolor sit amet consectetur adipisicing.</small> */}
              <div className="buttons-body">
                <button className="btn-dark">Más sobre mí</button>
                <button className="btn-white">
                  Resumen
                  <img
                    src={download}
                    alt="download"
                    width={13}
                    style={{ marginLeft: "8px" }}
                  />
                </button>
              </div>
              <div className="img-body">
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
          <div className="content-image">
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
