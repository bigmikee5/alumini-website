import React from "react";
import { Link } from "react-router-dom";
import "./Aboutdetails.css";

const Aboutdetails = () => {
  return (
    <div className="aboutDetails">
      <div className="detail-container">
        <div className="patron box">
          <Link to="/patron">Meet Our Patron</Link>
        </div>
        <div className="executives box">
          <Link to="/executives">Meet Our Executives</Link>
        </div>
        <div className="members box">
          <Link to="/membership">Meet Our Members</Link>
        </div>
      </div>
    </div>
  );
};

export default Aboutdetails;
