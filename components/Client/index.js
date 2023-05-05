import React from "react";
import cls from "./client.module.scss";
import { clientData } from "@/shared/client";
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// const swiper = new Swiper(".clientSwiper", {
//   direction: 'vertical',
//   loop: true,

//   pagination: {
//     el: '.swiper-pagination',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

const Client = () => {
  return (
    <>
      <div className="innerContainer">
        <div className={cls.client}>
          <h1>Узнайте об опыте Modagram.uz</h1>
          <div className={cls.clientTitle}>
            <img src="shape.png" />
            <div className={cls.clientHeading}>
              <h1>Наши клиенты говорят о нас</h1>
              <button>Больше отзывов</button>
            </div>
          </div>
          <div className={cls.clientSwiper}>
            <div className={cls.swiperWrapper}>
              <div className={cls.swiperSlide}>Slide 1</div>
              <div className={cls.swiperSlide}>Slide 2</div>
              <div className={cls.swiperSlide}>Slide 3</div>
            </div>
            <div className={cls.swiperPagination}></div>
            <div className={cls.swiperButtonPrev}></div>
            <div className={cls.swiperButtonNext}></div>
            <div className={cls.swiperScrollbar}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Client;