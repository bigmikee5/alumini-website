import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaMailBulk, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="information">
        <div className="about">
          <h1 className="name">H2018 ALUMINI</h1>
          <p className="description">
            H2018 Alumni Association is a vibrant union comprising the graduates
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
            aspirations.
          </p>
        </div>
        <div className="contact">
          <h1 className="name">Contact</h1>
          <div className="description">
            <p>
              <FaPhone size={20} style={{ color: "#fff" }} />{" "}
              <span>07030017345</span>
            </p>
            <p>
              <FaMailBulk size={20} style={{ color: "#fff" }} />{" "}
              <span>h2018alumini@gmail.com</span>
            </p>
            <p className="social">
              <Link
                to="https://www.instagram.com/h2018alumini/"
                target="_blank"
              >
                <FaInstagram />
              </Link>
              <Link>
                <FaFacebook />
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="rights">
        <p>
          &copy; H2018 Alumini. All Rights Reserved | Designed by Edeh Michael
          Ifeanyichukwu
        </p>
      </div>
    </div>
  );
};

export default Footer;
