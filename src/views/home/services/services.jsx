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
import angular from "../../../assets/img/skills/angular.png";
import react from "../../../assets/img/skills/react.png";
import bootstrap from "../../../assets/img/skills/bootstrap.png";
import sass from "../../../assets/img/skills/sass.png";
import html from "../../../assets/img/skills/html.png";
import js from "../../../assets/img/skills/js.png";
import ts from "../../../assets/img/skills/typescript.svg";


const Services = () => {
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
      description: `plataforma para acuicultura que supervisa y controla 
      las alimentadoras de camarones, asegurando un seguimiento preciso y eficiente.`,
      tecnology: [1,7,3,4],
    },
    {
      title: "wep",
      img: wep,
      description: `Plataforma que agiliza entregas e inventario con seguimiento por estados, 
      ofreciendo visión completa en tiempo real, mejorando eficiencia y satisfacción del cliente.`,
      tecnology: [1,3,4],
    },
    {
      title: "DoCapital",
      img: docap,
      description: `Plataforma administrativa para gestionar 
      pagos en inversiones, asegurando transparencia y eficiencia en modelos de negocios.`,
      tecnology: [2,4,6],
    },
    {
      title: "Agronodo",
      img: agronodo,
      description: `Plataforma agrícola que supervisa informes y
       actividades de ingenieros en campo, mejorando la eficiencia y toma de decisiones.`,
       tecnology: [1,7,3,4],
    },
    {
      title: "Clariti",
      img: claribot,
      description: `Plataforma administrativa que gestiona pagos de servicios y 
      brinda soporte a través de chat, optimizando la experiencia del cliente.`,
      tecnology: [2,4,6],
    },
    {
      title: "Asi",
      img: asi,
      description: `Landing page para una empresa de construcción,
       destacando servicios, proyectos y experiencia de manera efectiva.`,
      tecnology: [6,3,5,4],
    },
    {
      title: "Creaciones decorativas alma",
      img: alma,
      description: `Landing page para una empresa de venta de productos para el hogar, 
      presentando una variedad de artículos y soluciones para mejorar la vida en casa.`,
      tecnology: [6,3,5,4],
    },
    {
      title: "Captiosys",
      img: cap,
      description: `Plataforma administrativa que permite el control integral de inventario y 
      gestión de instalaciones en entornos rurales, optimizando la eficiencia operativa.`,
      tecnology: [2,4,6],
    },
    {
      title: "FutureDevelopers",
      img: futureDev,
      description: `Plataforma para la gestión de estudiantes,
       foros de comentarios y ejercicios de desarrollo, abarcando áreas de backend, frontend y más.`,
       tecnology: [1,7,3,4],
    },
  ];
  return (
    <div className="container">
      <section className="services">
        <Separator label={"Servicios"} />
        <p>Éstos son algunos de mis trabajos.</p>
        <div className="center">
          <div className="work">
            {works.map((item, idx) => {
              return (
                <div className="item-work" key={idx}>
                  <div
                    class="content"
                    style={{ backgroundImage: `url("${item.img}")` }}
                  >
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-left">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <div className="content-name">
                    <h5>{item.title}</h5>
                    <div >
                      {item.tecnology.map((item) => {
                        return (
                          <>
                            {item === 1 && (
                              <img
                                src={angular}
                                alt="angular"
                                width={20}
                                height={20}
                              />
                            )}
                            {item === 2 && (
                              <img
                                src={react}
                                alt="react"
                                width={25}
                                height={20}
                              />
                            )}
                            {item === 3 && (
                              <img
                                src={bootstrap}
                                alt="bootstrap"
                                width={24}
                                height={20}
                              />
                            )}
                            {item === 4 && (
                              <img
                                src={sass}
                                alt="sass"
                                width={24}
                                height={20}
                              />
                            )}
                            {item === 5 && (
                              <img
                                src={html}
                                alt="html"
                                width={20}
                                height={20}
                              />
                            )}
                            {item === 6 && (
                              <img src={js} alt="js" width={20} height={20} />
                            )}
                             {item === 7 && (
                              <img src={ts} alt="ts" width={20} height={20} />
                            )}
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
