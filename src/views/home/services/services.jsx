import React from "react";
import "./services.css";
import Separator from "../../../components/separator/separator";
import ImageModal from "../../../components/modal/ImageModal";
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
import Sorteo from "../../../assets/img/works/Sorteo.png";
import boletiza from "../../../assets/img/works/boletiza.png";
import unaFlor from "../../../assets/img/works/una_flor.png";
import fuelbishop from "../../../assets/img/works/fuelbishop.png";

const Services = ({ darkMode }) => {
  const [mode, setMode] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState(null);
  const [selectedTitle, setSelectedTitle] = React.useState(null);
  /* 1:angular
     2:react
     3:boostrap
     4:sass 
     5:html
     6:js
     7:ts
     8:node js
     9:rxjs */
  const works = [
    {
      title: "Boletiza",
      img: boletiza,
      description: `Plataforma administrativa y pública para la gestión integral de eventos y venta de boletos en línea. Integración de pasarela de pago con Mercado Libre, selección dinámica de secciones y asientos interactivos. Arquitetura monorepo escalable para reutilizar componentes entre web y React Native.`,
      tecnology: [2, 4, 7],
    },
    {
      title: "Una Flor",
      img: unaFlor,
      description: `Plataforma integral de gestión de ventas de flores para múltiples tiendas y repartidores. Incluye mapas interactivos para seguimiento logístico en tiempo real, visualización dinámica de sectores, dashboards analíticos con reportes semanales y sistema automático de comisiones.`,
      tecnology: [1, 4, 7],
    },
    {
      title: "FuelBishop",
      img: fuelbishop,
      description: `Plataforma de administración de control volumétrico para gestionar empresas, estaciones, tanques, dispensadores y mangueras, con enfoque en el control operativo y la gestión de facturas.`,
      tecnology: [2, 4, 6],
    },
    {
      title: "NAS",
      img: nas,
      description: `Plataforma acuicola para monitoreo, supervicion y control para granjas.`,
      tecnology: [1, 7, 3, 4],
    },
    {
      title: "Agronodo",
      img: agronodo,
      description: `Plataforma agrícola que supervisa informes y
       actividades de ingenieros en campo, mejorando la eficiencia y toma de decisiones.`,
      tecnology: [1, 7, 3, 4],
    },
    {
      title: "Sorteos el teroque",
      img: Sorteo,
      description: `Plataforma para la gestión integral de inventarios, control de gastos y administración de antenas de instalación.`,
      tecnology: [1, 7, 3, 8, 4],
    },
    {
      title: "WEP",
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
      title: "Clariti",
      img: claribot,
      description: `Plataforma administrativa que gestiona pagos de servicios y 
      brinda soporte a través de chat, optimizando la experiencia del cliente.`,
      tecnology: [2, 4, 6],
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
  ];

  const duration = 300; // ms
  const delay = 100; // ms

  const handleOpenModal = (image, title) => {
    setSelectedImage(image);
    setSelectedTitle(title);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedTitle(null);
  };

  const animStr = (i) =>
    `pulse ${duration}ms ease-out ${delay * (i + 1)}ms forwards`;
  return (
    <>
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
          {darkMode && <p>'gola'</p>}
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
                      <h5
                        onClick={() => handleOpenModal(item.img, item.title)}
                        style={{ cursor: "pointer" }}
                      >
                        {item.title}
                      </h5>
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
                        <h3
                          onClick={() => handleOpenModal(item.img, item.title)}
                          style={{ cursor: "pointer" }}
                        >
                          {item.title}
                        </h3>
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
      <ImageModal
        isOpen={isModalOpen}
        image={selectedImage}
        title={selectedTitle}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Services;
