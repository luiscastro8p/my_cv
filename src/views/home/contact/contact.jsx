import React, { useState } from "react";
import "./contact.css";
import Separator from "../../../components/separator/separator";

const ENDPOINT = process.env.REACT_APP_CONTACT_ENDPOINT;

const FORM_INICIAL = { nombre: "", correo: "", descripcion: "", website: "" };

const Contact = () => {
  const [form, setForm] = useState(FORM_INICIAL);
  const [estado, setEstado] = useState("idle"); // idle | enviando | ok | error
  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ENDPOINT) {
      setEstado("error");
      setMensaje(
        "El formulario aún no está configurado. Escríbeme a luisarmandocastro12@gmail.com"
      );
      return;
    }

    setEstado("enviando");
    setMensaje("");

    try {
      // text/plain evita el preflight CORS que Apps Script no responde.
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (data.ok) {
        setEstado("ok");
        setMensaje("¡Mensaje enviado! Te responderé lo antes posible.");
        setForm(FORM_INICIAL);
      } else {
        setEstado("error");
        setMensaje(data.error || "No se pudo enviar el mensaje.");
      }
    } catch (err) {
      setEstado("error");
      setMensaje(
        "No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a luisarmandocastro12@gmail.com"
      );
    }
  };

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
        <form
          className="form animate__animated animate__bounceInRight"
          onSubmit={handleSubmit}
        >
          <span>Nombre y apellido</span>
          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            placeholder="Escribe tu nombre completo"
            maxLength={100}
            required
          />
          <span>Correo electronico</span>
          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            placeholder="Correo electrónico"
            maxLength={150}
            required
          />
          <span>Descripción</span>
          <textarea
            name="descripcion"
            id="description"
            rows="3"
            value={form.descripcion}
            onChange={handleChange}
            placeholder="Descripcion"
            maxLength={3000}
            required
          ></textarea>

          {/* Honeypot anti-spam: invisible para las personas, tentador para los bots */}
          <input
            type="text"
            name="website"
            className="honeypot"
            value={form.website}
            onChange={handleChange}
            tabIndex="-1"
            autoComplete="off"
          />

          {mensaje && (
            <span className={estado === "ok" ? "text-success" : "text-danger"}>
              {mensaje}
            </span>
          )}

          <button type="submit" disabled={estado === "enviando"}>
            {estado === "enviando" ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </section>
    </>
  );
};

export default Contact;
