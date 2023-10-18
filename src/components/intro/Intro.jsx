import React from "react";
import "./Intro.css";
import bgImg from "../assets/bg.jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="mask">
        <img src={bgImg} alt="" className="introImage" />
      </div>
      <div className="content">
        <p>#Great Metabolites!</p>
      </div>
    </div>
  );
};

export default Intro;
