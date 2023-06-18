import React from "react";
import "./SlideCard.scss";
import Image from "next/image";
import Demolish from '../../public/images/work/demolish.png'
import Shifting from '../../public/images/work/shifting.png'
const SlideCard = ({ image, title, desc }) => {
  return (
    <>
    <div className="slide-contain">
      <Image src={image} alt="slide" className="slide-img" />
      <div className="contain">
        <div className="title">{title}</div>
        <div className="desc">
         {desc}
        </div>
        <button className="btn-more">See More</button>
      </div>
    </div>
    </>
  );
};

export default SlideCard;
