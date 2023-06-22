'use client'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import SlideCard from '../slide-card/SlideCard';
import  rightImagePath from '../../public/images/right.png';
import leftImagePath from '../../public/images/left.png'


register();

export const Slide = ({slides, navigation,num, customPagination, pagination, autoplay, leftMargin }) => {


  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: navigation,
      slidesPerView: num,
      pagination: pagination,
      autoplay: autoplay,
      spaceBetween: 0,

      
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 30px;
          height: 30px;
          background-color: transparent;
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }
        
        .swiper-button-next {
          right: 10px;
        }
        
        .swiper-button-prev {
          left: 10px;
          margin-left: -0.8rem;
        }
        
        .swiper-button-next::before,
        .swiper-button-prev::before {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 10px;
          height: 10px;
          transform: translate(-50%, -50%);
          border-top: 2px solid #A8B4E5;
          border-right: 2px solid #A8B4E5;
          transition: border-color 0.3s;
        }
        
        .swiper-button-next::before {
          transform: translate(-50%, -50%) rotate(45deg);
        }
        
        .swiper-button-prev::before {
          transform: translate(-50%, -50%) rotate(-135deg);
        }
        
        /* Hover effect */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #A8B4E5;
        }
        
        .swiper-button-next:hover::before,
        .swiper-button-prev:hover::before {
          border-color: #fff;
        }
        .swiper-pagination{
          position: static;
          margin-top: ${customPagination ? '0.8rem' : '0.1rem'};
          margin-left: ${customPagination ? '-1rem' : '0.1rem'};
          
        }
        .swiper-horizontal {
          touch-action: pan-y;
          margin-left: ${leftMargin ? '3rem': ''};
      }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          content: "";
        }
        `,
      ],
    };
    

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <swiper-container class='swiper-container' ref={swiperRef} init="false"> 
    {slides?.map((slide, index) => (
      <swiper-slide>
        {slide}
      </swiper-slide>
    ))}
      
    </swiper-container>
  );


}