import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import cls from "./slider.module.scss";
import Link from "next/link";
import { reviewData } from "@/shared/otziv";
const Slider = () => {
  return (
    <div className="innerContainer">
      <div className={cls.title}>
        <h3>Узнайте об опыте Modagram.uz</h3>
      </div>

      <div className={cls.wrapOtziv}>
        <div className={cls.titleOtziv}>
          <h3>Наши клиенты говорят о нас</h3>
        </div>
        <div className={cls.itemBtn}>
          <Link href={"/moreReview"}>
            <button>Все Отзывы (100+)</button>
          </Link>
        </div>
      </div>

      <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className={`mySwiper ${cls.swiperWrap}`}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 70 },
          320: { slidesPerView: 1, spaceBetween: 80 },
          480: { slidesPerView: 1, spaceBetween: 150 },
          768: { slidesPerView: 2, spaceBetween: 50 },
          1024: { slidesPerView: 2, spaceBetween: 150 },
        }}
      >
        {reviewData.slice(0, 5).map((item) => (
          <SwiperSlide key={item.id}>
            <div className={cls.imagePart}>
              <div className={cls.firstImage}>
                <img src={item.img} />
                <div className={cls.myPart}>
                  <h3>{item.name}</h3>
                  <div className={cls.name}>
                    {/* <span>Город:</span>
                  <p>Ташкент</p> */}
                  </div>
                </div>
              </div>
              <div className={cls.wrpa}>
                <p>{item.title}</p>
                <div className={cls.dateCls}>
                  <p>Дата: </p>
                  <p>{item.date}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* <SwiperSlide>
          <div className={cls.imagePart}>
            <div className={cls.firstImage}>
              <img src="/odam.png" />
              <div className={cls.myPart}>
                <h3>Димитрий</h3>
                <div className={cls.name}>
                  <span>Город:</span>
                  <p>Ташкент</p>
                </div>
              </div>
            </div>
            <div className={cls.wrpa}>
              <p>
                Спасибо за доставку. Заказывал первый раз кроссовки сыну для
                баскетбола. Всё идеально. Что касается сервиса вопросов нет
                абсолютно! Единственное что посоветовал бы добавить, это
                приблизительную стоимость доставки из магазина до склада.
                Рекомендую!
              </p>
              <div className={cls.dateCls}>
                <p>Дата: </p>
                <p>28 Апреля 2023</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={cls.imagePart}>
            <div className={cls.firstImage}>
              <img src="/odam.png" />
              <div className={cls.myPart}>
                <h3>Димитрий</h3>
                <div className={cls.name}>
                  <span>Город:</span>
                  <p>Ташкент</p>
                </div>
              </div>
            </div>
            <div className={cls.wrpa}>
              <p>
                Спасибо за доставку. Заказывал первый раз кроссовки сыну для
                баскетбола. Всё идеально. Что касается сервиса вопросов нет
                абсолютно! Единственное что посоветовал бы добавить, это
                приблизительную стоимость доставки из магазина до склада.
                Рекомендую!
              </p>
              <div className={cls.dateCls}>
                <p>Дата: </p>
                <p>28 Апреля 2023</p>
              </div>
            </div>
          </div>
        </SwiperSlide> */}
      </Swiper>
      <div className={cls.btn}>
        <Link href={"https://t.me/modagramuz_bot"}>
          <button>Заказать</button>
        </Link>
      </div>
    </div>
  );
};

export default Slider;
