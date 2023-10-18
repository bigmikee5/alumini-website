import "./ExecutiveCard.css";

import React from "react";

const ExecutiveCard = (props) => {
  return (
    <div className="executive-card">
      <img src={props.imgsrc} alt="" />
      <h2 className="executive-name">{props.name}</h2>
      <div className="executive-details">
        <p>{props.position}</p>
      </div>
    </div>
  );
};

export default ExecutiveCard;
