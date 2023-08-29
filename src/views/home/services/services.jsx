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

const Services = () => {
  const works = [
    {
      title: "nas",
      img: nas,
      description: `Plataforma administrativa para empresa acuícola, logrando
      control automatizado de alimentación de peces. Utilicé Angular
      y tecnología webSocket, push notifications con Firebase,
      autenticación de múltiples roles y colaboré con equipo
      backend.`,
      tecnology: 1,
    },
    {
      title: "wep",
      img: wep,
      description: `Plataforma de gestión para entregas a domicilio e inventario que agiliza
      el proceso mediante la categorización y seguimiento por estados. 
      Esto brinda una visión completa y en tiempo real de cada entrega, 
      mejorando la eficiencia operativa y la satisfacción del cliente."`,
      tecnology: 1,
    },
    {
      title: "DoCapital",
      img: docap,
      description: `Plataforma administrativa para gestionar 
      pagos en inversiones, asegurando transparencia y eficiencia en modelos de negocios."`,
      tecnology: 2,
    },
    {
      title: "Agronodo",
      img: agronodo,
      description: `Plataforma agrícola que supervisa informes y
       actividades de ingenieros en campo, mejorando la eficiencia y toma de decisiones.`,
      tecnology: 1,
    },
    {
      title: "Clariti",
      img: claribot,
      description: `Plataforma administrativa que gestiona pagos de servicios y 
      brinda soporte a través de chat, optimizando la experiencia del cliente`,
      tecnology: 2,
    },
    {
      title: "Asi",
      img: asi,
      description: `Landing page para una empresa de construcción,
       destacando servicios, proyectos y experiencia de manera efectiva.`,
      tecnology: 2,
    },
    {
      title: "Creaciones decorativas alma",
      img: alma,
      description: `Landing page para una empresa de venta de productos para el hogar, 
      presentando una variedad de artículos y soluciones para mejorar la vida en casa."`,
      tecnology: 2,
    },
    {
      title: "Captiosys",
      img: cap,
      description: `Plataforma administrativa que permite el control  integral de inventario y 
      gestión de instalaciones en entornos rurales, optimizando la eficiencia operativa.""`,
      tecnology: 2,
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
                <div key={idx}>
                  <div
                    class="content"
                    style={{ backgroundImage: `url("${item.img}")` }}
                  >
                    <div class="content-overlay"></div>
                    <div class="content-details fadeIn-left">
                      <p>{item.description}</p>
                    </div>
                  </div>
                  <h3 className="center">{item.title}</h3>
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
