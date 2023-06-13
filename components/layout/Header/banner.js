import React from "react";
import {  Logo, IngsIcon } from "@/components/svg";
import cls from "./header1a.module.scss";
import Link from "next/link";

const Banerer = () => {
  return (
    <>
      <div className={cls.backgroundImage}>
        <div className="innerContainer">
          <div className={cls.heroWrap}>
            <div className={cls.firstPart}>
              <p>
                Каждый день мы публикуем примеры лучших, отобранных от вас
                заказов на нашей странице в Instagram. Большинство выбранных
                предметов, скорее всего, окажутся на большом скидках.
              </p>
            </div>
            <div className={cls.ssss}>
              <h3>Не забудьте подписаться на нас в социальных сетях</h3>
              
              <Link href={'https://www.instagram.com/modagramuz/'}>
              <div className={cls.insta}>
                <p>@modagramuz</p>
                <IngsIcon />
              </div>
              </Link>
            
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banerer;
