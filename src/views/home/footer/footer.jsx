import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date()
  return <div className="footer">
    <h3>Luis Castro (MrLACC)</h3>
    <small>Copyright © {date.getFullYear()} Portfolio. Todos los permisos reservados</small>
  </div>;
};

export default Footer;
