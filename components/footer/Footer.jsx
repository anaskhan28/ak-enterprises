import React from "react";
import Image from "next/image";
import Logo from "../../public/logo.png";
import "./footer.scss";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Image src={Logo} className="logo" />

        <div class="links">
          <div class="group">
            <ul>
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/services'>Services</Link></li>
            </ul>
          </div>
          <div class="group">
            <ul>
              <li> <Link href='/contact'>Contact Us</Link></li>
              <li><Link href='/about'>About Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className="right">© 2025 AK Enterprise Group. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
