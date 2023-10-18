import "./Patron.css";
import patron from "../assets/patron.jpg";

import React from "react";

const Pattron = () => {
  return (
    <div className="container">
      <h2 className="patron-title">Patron</h2>
      <div className="patron-container">
        <div className="patron-card">
          <img src={patron} alt="" />
          <p>Mr. Ezeugwu Felix</p>
        </div>
      </div>
    </div>
  );
};

export default Pattron;
