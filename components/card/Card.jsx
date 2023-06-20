import React from "react";
import "./Card.scss";
import Image from "next/image";
import Link from "next/link";

const Card = ({ image, title, subtitle, desc }) => {
  return (
    <div className="card-containter">
      <Image className="service-image" src={image} alt="service-image" />
      <div className="card-heading">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <p className="desc">
        {desc}
        </p>
      </div>
      <div className="line"></div>

      <div className="card-btn">
      <Link href="/contact">
        <button className="call-us">Call Us</button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
