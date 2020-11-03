import React from "react";

const CardHeader = ({ name, platformLogos }) => {
  return (
    <div className="bg-dark text-white p-3 card-header">
      <p>{name}</p>
      <div className="platforms-logos">
        {platformLogos.map((logo) => (
          <img src={logo} key={`platform-logo-${name}`} />
        ))}
      </div>
    </div>
  );
};

export default CardHeader;
// on arrete a la 27eme minutes !!!!!!!!!!!
