import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Intro2 from "../components/intro2/Intro2";
import Executive from "../components/executives/Executive";

const Executives = () => {
  return (
    <div>
      <Navbar />
      <Intro2
        heading="Executives"
        text="Welcome to the Alumni Executive Page, where you can learn more about the esteemed members of the H2018 Alumni Association's Executive Committee. Discover the dedicated individuals who are leading the charge in shaping the direction and fostering the growth of our alumni community."
      />
      <Executive />
      <Footer />
    </div>
  );
};

export default Executives;
