import "./ExecutiveCard.css";
import ExecutiveCard from "./ExecutiveCard";
import ExecutiveData from "./ExecutiveData";

import React from "react";

const Executive = () => {
  return (
    <div className="container">
      <h1 className="executive-heading">Executives</h1>
      <div className="executive-container">
        {ExecutiveData.map((val, index) => {
          return (
            <ExecutiveCard
              key={index}
              imgsrc={val.imgsrc}
              name={val.name}
              position={val.position}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Executive;
