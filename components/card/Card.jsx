import React from "react";
import "./Card.scss";
import Image from "next/image";
import Link from "next/link";

const Card = ({ img, title, subtitle, des, aos }) => {
  return (
    <div data-aos={aos} className="card-containter">
      <Image className="service-image" src={img} alt="service-image" />
      <div className="card-heading">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
        <p className="desc">
        {des}
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
