import React from "react";
import "./contact.css";
import Separator from "../../../components/separator/separator";

const Contact = () => {
  return (
    <>
      <Separator label={"Contáctame"} />
      <section className="contact scroll-target " id="section-contact">
        <div className="text animate__animated animate__bounceInLeft">
          <h2>¡Contáctame!</h2>
          <p>
            Si tienes alguna pregunta o comentario, no dudes en ponerte en
            contacto conmigo a través del siguiente formulario. Estaré encantado
            de responderte.
          </p>
        </div>
        <div className="form animate__animated animate__bounceInRight">
          <span>Nombre y apellido</span>
          <input type="text" placeholder="Escribe tu nombre completo" />
          <span>Correo electronico</span>
          <input type="text" placeholder="Correo electrónico" />
          <span>Descripción</span>
          <textarea
            name="description"
            id="description"
            rows="3"
            placeholder="Descripcion"
          ></textarea>
          <span className="text-danger">
            Formulario actualmente deshabilitado contactame por mis redes
            sociales o un correo a luisarmandocastro12@gmail.com
          </span>
          {/*    <button disabled>Enviar</button> */}
        </div>
      </section>
    </>
  );
};

export default Contact;
