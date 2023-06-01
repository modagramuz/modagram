import React from "react";

import cls from "./footer.module.scss";
import { LogoScnd, TgIcon, BackNew, IngsIcon } from "@/components/svg";
import Banerer from "../Header/banner";

const Footer = () => {
  return (
    <div className={cls.backGroun}>
      <div className="innerContainer">
        <Banerer />

        <div className={cls.wrapFooter}>
          <div className={cls.firstPart}>
            <LogoScnd />
            <p className={cls.logoTiti}>
              Начните экономить до 80% на шопинге. Регистрируйтесь в Modagram,
              чтобы покупать со скидками в Турции одежду, обувь, гаджеты
              известных брендов и безопасно отправлять вещи в Узбекистан.
            </p>
            <div className={cls.operator}>
              <p>Operator:</p>
              <div className={cls.icon}>
                <TgIcon />
                @modagramuz_bot
              </div>
            </div>
          </div>
          <div className={cls.scndPart}>
            <h3>Информация:</h3>
            <p>Главная</p>
            <p>Сервиси</p>
            <p>Магазины</p>
            <p>Заказ</p>
            <p>F.A.Q</p>
          </div>
          <div className={cls.lastPart}>
            <h3>Локация:</h3>
            <br />
            <br />
            <p>
              Tashkent, Yakkasaroy, Bog'iboston 186, Impactt Coworking Center
            </p>
            <br />
            <br />
            <h4>Рабочие время:</h4>
            <br />
            <p className={cls.time}>10:00 - 17:00</p>
            <br />
            <br />
            <br />
            <p>info@modagram.uz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
