import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Intro2 from "../components/intro2/Intro2";
import Member from "../components/memberpage/Member";

const Membership = () => {
  return (
    <div>
      <Navbar />
      <Intro2
        heading="Membership"
        text="We are thrilled to welcome you to the Membership Page of the H2018 Alumni Association. Below, you will find the list of our esteemed members."
      />
      <Member />
      <Footer />
    </div>
  );
};

export default Membership;
