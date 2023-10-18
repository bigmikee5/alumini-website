import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Intro2 from "../components/intro2/Intro2";
import Pattron from "../components/patron/Pattron";

const Patron = () => {
  return (
    <div>
      <Navbar />
      <Intro2
        heading="Our Beloved Patron"
        text="Our  Honorary Patron Mr. Ezeugwu Felix is a distinguished individual whose support, guidance, and commitment to our community exemplify the highest standards of leadership and excellence. Serving as a beacon of inspiration, our Honorary Patron plays a pivotal role in guiding the strategic direction and fostering the growth of our alumni association. With their invaluable contributions and unwavering dedication to our shared mission, they continue to inspire and empower us to reach new heights of achievement and success."
      />
      <Pattron />
      <Footer />
    </div>
  );
};

export default Patron;
