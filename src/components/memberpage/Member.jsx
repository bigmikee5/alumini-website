import React from "react";
import "./MemberPage.css";
import MemberPage from "./MemberPage";
import MemberData from "./MemberData";

const Member = () => {
  return (
    <div className="container">
      <h1 className="member-heading">Members</h1>
      <div className="memberContainer">
        {MemberData.map((val, index) => {
          return (
            <MemberPage
              key={index}
              imgsrc={val.imgsrc}
              name={val.name}
              occupation={val.occupation}
              location={val.location}
              phone={val.phone}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Member;
