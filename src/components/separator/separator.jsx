import React from "react";

const Separator = ({label}) => {
  return (
    <div className="separation animate__animated animate__fadeIn">
      <p>{label}</p>
      <div className="line"></div>
    </div>
  );
};

export default Separator;
