import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Image src={Logo} height={60} width={90} className="logo" />

        <div class="links">
          <div class="group">
            <ul>
              <li>Home</li>
              <li>Services</li>
            </ul>
          </div>
          <div class="group">
            <ul>
              <li>Contact Us</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="right">© 2023 AK Enterprises. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
