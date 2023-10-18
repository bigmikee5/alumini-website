import React from "react";
import "./MemberPage.css";

const MemberPage = (props) => {
  return (
    <div className="member-card">
      <img src={props.imgsrc} alt="" className="member-img" />
      <div className="member-details">
        <h2 className="member-name">{props.name}</h2>
        <p className="occupation">{props.occupation}</p>
        <p className="location">{props.location}</p>
        <p className="phone">{props.phone}</p>
      </div>
    </div>
  );
};

export default MemberPage;
