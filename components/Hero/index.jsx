import React from "react";
import cls from "./hero.module.scss";
import { ImageIcon } from "../svg";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="container">
      <div className={cls.background}>
        <img src="/BG.png" />
        <div className={cls.items}>
          <div className={cls.itemsOne}>
            <h3>Доставка товаров из Турции в Узбекистан</h3>
            <p>
              Начните экономить до 80% на шопинге. Регистрируйтесь в Modagram,
              чтобы покупать со скидками в Турции одежду, обувь, гаджеты
              известных брендов и безопасно отправлять вещи в Узбекистан.
            </p>
            <Link href={"/ @modagramuz_bot "}>
            <button className={cls.btnSignup}>Регистрация</button>
                </Link>
          </div>
          <div>
            <ImageIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
