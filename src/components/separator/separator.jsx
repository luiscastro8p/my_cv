import React from "react";

const Separator = ({label}) => {
  return (
    <div className="separation">
      <p>{label}</p>
      <div className="line"></div>
    </div>
  );
};

export default Separator;
