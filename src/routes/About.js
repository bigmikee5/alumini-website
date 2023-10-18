import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Intro2 from "../components/intro2/Intro2";
import Aboutdetails from "../components/aboutdetails/Aboutdetails";

const About = () => {
  return (
    <div>
      <Navbar />
      <Intro2
        heading=" About Us"
        text="The idea of the Alumni Association was conceived when it was considered necessary to create an organization that would forster our unity"
      />
      <Aboutdetails />
      <Footer />
    </div>
  );
};

export default About;
