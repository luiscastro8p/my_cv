import React from "react";
import "./index.css";

const Me = () => {
  return (
    <section className="home">
      <div className="home-body">
        <h3>Hola, soy Luis Castro</h3>
        <h5>Desarrollador web</h5>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui
          distinctio reprehenderit ab voluptates sed dolor porro fuga!
        </p>
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
