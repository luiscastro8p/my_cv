import React from "react";
import "./index.css";
import TypingEffect from "../../../components/typeWriteEffect";

const Me = () => {
  return (
    <section className="container home">
      <div className="home-body">
        <div className="content">
          <h2>Hola, soy Luis Castro</h2>
          <TypingEffect data={["Desarrollador web","Ing. informático", "Técnico en computación"]} />
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </small>
        </div>
      </div>
      <div style={{ position: "relative" }}>
        <div className="img-profile">
          <div className="small-point" />
          <div className="big-point" />
        </div>
        {/*     <img src={perfil} alt="MrLACC" className="profile" /> */}
      </div>
    </section>
  );
};

export default Me;
