import React from "react";
import "./services.css";
import Separator from "../../../components/separator/separator";
import nas from "../../../assets/img/works/nas.png";
import wep from "../../../assets/img/works/wep.jpg";
import agronodo from "../../../assets/img/works/agronodo.png";
import claribot from "../../../assets/img/works/claribot.png";
import docap from "../../../assets/img/works/docap.jpg";
import asi from "../../../assets/img/works/asi.png";
import alma from "../../../assets/img/works/alma.png";
import cap from "../../../assets/img/works/cap.png";
import futureDev from "../../../assets/img/works/future.jpg";
import collapse from "../../../assets/img/works/collapse.png";
import points from "../../../assets/img/works/points.png";
import Tecnologies from "../../../components/tecnologies/tecnologies";

const Services = () => {
  const [mode, setMode] = React.useState(false);

  /* 1:angular
     2:react
     3:boostrap
     4:sass 
     5:html
     6:js
     7:js */
  const works = [
    {
      title: "nas",
      img: nas,
      description: `Plataforma acuicola para monitoreo, supervicion y control para granjas.`,
      tecnology: [1, 7, 3, 4],
    },
    {
      title: "wep",
      img: wep,
      description: `Plataforma que agiliza entregas e inventario con seguimiento por estados, 
      ofreciendo visión completa en tiempo real, mejorando eficiencia y satisfacción del cliente.`,
      tecnology: [1, 3, 4],
    },
    {
      title: "DoCapital",
      img: docap,
      description: `Plataforma administrativa para gestionar 
      pagos en inversiones, asegurando transparencia y eficiencia en modelos de negocios.`,
      tecnology: [2, 4, 6],
    },
    {
      title: "Agronodo",
      img: agronodo,
      description: `Plataforma agrícola que supervisa informes y
       actividades de ingenieros en campo, mejorando la eficiencia y toma de decisiones.`,
      tecnology: [1, 7, 3, 4],
    },
    {
      title: "Clariti",
      img: claribot,
      description: `Plataforma administrativa que gestiona pagos de servicios y 
      brinda soporte a través de chat, optimizando la experiencia del cliente.`,
      tecnology: [2, 4, 6],
    },
    {
      title: "Asi",
      img: asi,
      description: `Landing page para una empresa de construcción,
       destacando servicios, proyectos y experiencia de manera efectiva.`,
      tecnology: [6, 3, 5, 4],
    },
    {
      title: "Creaciones decorativas alma",
      img: alma,
      description: `Landing page para una empresa de venta de productos para el hogar, 
      presentando una variedad de artículos y soluciones para mejorar la vida en casa.`,
      tecnology: [6, 3, 5, 4],
    },
    {
      title: "Captiosys",
      img: cap,
      description: `Plataforma administrativa que permite el control integral de inventario y 
      gestión de instalaciones en entornos rurales, optimizando la eficiencia operativa.`,
      tecnology: [2, 4, 6],
    },
    {
      title: "FutureDevelopers",
      img: futureDev,
      description: `Plataforma para la gestión de estudiantes,
       foros de comentarios y ejercicios de desarrollo, abarcando áreas de backend, frontend y más.`,
      tecnology: [1, 7, 3, 4],
    },
  ];

  const duration = 300; // ms
  const delay = 100; // ms

  const animStr = (i) =>
    `pulse ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;
  return (
    <div className="container">
      <section className="services scroll-target" id="section-services">
        <Separator label={"Servicios"} />
        <p>Éstos son algunos de mis trabajos.</p>
        <div className="icon-collapse">
          {mode && (
            <img
              src={points}
              alt="points"
              width={25}
              height={25}
              onClick={() => setMode(false)}
            />
          )}
          {!mode && (
            <img
              src={collapse}
              alt="collapse"
              width={30}
              height={30}
              onClick={() => setMode(true)}
            />
          )}
        </div>
        <div className="center">
          {!mode && (
            <div className="work">
              {works.map((item, idx) => {
                return (
                  <div
                    className={`card w-card`}
                    key={idx}
                    style={{ animation: animStr(idx) }}
                  >
                    <div
                      className="content"
                      style={{ backgroundImage: `url("${item.img}")` }}
                    >
                      <div className="content-overlay"></div>
                      <div className="content-details fadeIn-left">
                        <p>{item.description}</p>
                      </div>
                    </div>
                    <div className="content-name">
                      <h5>{item.title}</h5>
                      <div>
                        {item.tecnology.map((item, idx) => {
                          return (
                            <div key={`tecnologies-${idx}`}>
                              <Tecnologies data={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {mode && (
            <div className="work-list">
              {works.map((item, idx) => {
                return (
                  <div
                    className="item-work card"
                    key={idx}
                    style={{ animation: animStr(idx) }}
                  >
                    <img
                      className="work-image"
                      src={item.img}
                      alt={item.title}
                    />

                    <div className="content">
                      <div className="text">
                        <h3>{item.title}</h3>
                        <p> {item.description}</p>
                      </div>
                      <div className="tecnologies">
                        {item.tecnology.map((item, idx) => {
                          return (
                            <div key={`tecnologies-${idx}`}>
                              <Tecnologies data={item} />
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
