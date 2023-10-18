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
        text="H2018 Alumni Association is a vibrant union comprising the graduates
        of the 2020 Biochemistry class from the esteemed Institute of
        Management and Technology, Enugu. Officially established in 2022,
        two years subsequent to their academic achievements, the Alumni
        Association was born from the collective desire to strengthen the
        camaraderie and foster lasting connections among its members. Beyond
        its internal objectives, the association holds a profound commitment
        to making a positive impact within the larger community, actively
        engaging in various initiatives aimed at social development and
        progress. The primary aim of the association is to provide a
        conducive environment for members to establish valuable professional
        networks, thereby creating opportunities for collaborative growth
        and development. By nurturing a spirit of unity and support, the
        association endeavors to serve as a pillar of strength for its
        members, aiding them in achieving their personal and professional
        aspirations."
      />
      <Aboutdetails />
      <Footer />
    </div>
  );
};

export default About;
