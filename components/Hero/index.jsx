import React from "react";

import cls from "./hero.module.scss";
// import Tablo from "../components/Tablo";


const Hero = () => {
  return (
    <div className="container">
      <div className={cls.tablo}>
        <img className={cls.tabloImg} src="/BG.png" />
        <div className={cls.tabloLeft}>
          <h1 className={cls.tabloLeftH1}>
            Доставка товаров из Турции в Узбекистан
          </h1>
          <span>
            Начните экономить до 80% на шопинге. Регистрируйтесь в Modagram, чтобы покупать со скидками в Турции одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Узбекистан.
          </span>
          <button>
            Регистрация
          </button>
        </div>
        <div className={cls.tabloRight}>
          <img src="headerImage.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
