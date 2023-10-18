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
            The idea of the Alumni Association was conceived when it was
            considered necessary to create an organization that would forster
            our unity
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
