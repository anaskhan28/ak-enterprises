'use client'
import React, { useEffect, useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import "./nav.scss";
import Image from "next/image";
import Logo from '../../public/logo.png'
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);

  };
  const linkClickHanlder = () =>{
    setMenuOpen(false)
  }
 

  return (
    <header className="header">
      <div className="header__content">
        <Link href="/" className="header__content__logo">
          <Image
          height={60}
          width={90}
          src={Logo}
          />
        </Link>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li>
              <Link onClick={linkClickHanlder} href="/">Home</Link>
            </li>
            <li>
              <Link onClick={linkClickHanlder}  href="/services">Services</Link>
            </li>
            <li>
              <Link  onClick={linkClickHanlder} href="#clients">Clients</Link>
            </li>
            <li>
              <Link onClick={linkClickHanlder}  href="#process">Process</Link>
            </li>
            <li>
              <Link onClick={linkClickHanlder}  href="#work">Our Work</Link>
            </li>
            <li>
              <Link onClick={linkClickHanlder}  href="#review">Reviews</Link>
            </li>
            <li>
              <Link onClick={linkClickHanlder}  href="/about">About Us</Link>
            </li>
          
          </ul>
          <Link onClick={linkClickHanlder}  href="/contact">
              <button className="btn btn__login">Contact Us</button>
            </Link>
        </nav>
        <div className="header__content__toggle">
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;