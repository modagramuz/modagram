import React from "react";
import { ImageIcon, Logo, MenuIcon } from "@/components/svg";
import cls from "./header.module.scss";
import { headerData } from "@/shared/header";
import { useRouter } from "next/router";
import Link from "next/link";
import MobileMenu from "../MobileMenu";

const Header = () => {
  const router = useRouter();
  console.log(router, "router");
  return (
    <>
      <div className={cls.backgroundImage}>
        <div className="innerContainer">
          <div className={cls.header}>
            <div className={cls.wrapItems}>
              <div className={cls.logo}>
                <Link href={"/"}>
                  <Logo />
                </Link>
              </div>
              <div className={cls.rightPart}>
                {headerData.map((item) => (
                  <div className={cls.naviRouter} key={item.id}>
                    <Link href={item.navigaTe}>{item.name}</Link>
                  </div>
                ))}
              </div>
              <div className={cls.login}>
                <Link href={"https://my.modagram.uz/"}>
                  <div> Войти </div>
                </Link>
                <Link href={"https://t.me/modagramuz_bot"}>
                  <button> ЗАКАЗАТЬ </button>
                </Link>
              </div>
              <div className={cls.mobileMeny}>
                {/* <MenuIcon/> */}
                <MobileMenu />
              </div>
            </div>
          </div>
          <div className={cls.heroWrap}>
            <div className={cls.firstPart}>
              {(() => {
                switch (router.pathname) {
                  case "/services":
                    return (
                      <>
                        <h3 className={cls.servicesss}>
                          {" "}
                          Услуги доставки из Турции от
                        </h3>
                        <p className={cls.redTexts}>Modagram.uz</p>
                        <button className={cls.regularBTn}>
                          Cвязаться с нами
                        </button>
                      </>
                    );
                  case "/shops":
                    return (
                      <>
                        <h3> Лучшие магазины для онлайн-шопинга</h3>
                        <p>
                          Для участия в больших национальных распродажах с
                          огромными скидками до 80-90%. Зарегистрируйтесь на
                          Modagram.uz прямо сейчас, чтобы получить его бесплатно
                          (если вы этого еще не сделали).
                        </p>
                        <button className={cls.blueBtn}>
                          Cвязаться с нами
                        </button>
                      </>
                    );
                  case "/faq":
                    return (
                      <>
                        <h3> Часто задаваемые вопросы</h3>
                        <p>
                          Вы можете прочитать эти вопросы и ответы перед
                          покупкой и принять это как соглашение между нами.
                        </p>
                        <button className={cls.blueBtn}>
                          Cвязаться с нами
                        </button>
                      </>
                    );

                  case "/moreReview":
                    return (
                      <>
                        <h3>Узнайте больше о нас</h3>
                        <p>Вы можете узнать больше о нас из поста ниже</p>
                        <button className={cls.blueBtn}>
                          Cвязаться с нами
                        </button>
                      </>
                    );

                  default:
                    return (
                      <div className={cls.hero}>
                        <h3>Доставка товаров из Турции в Узбекистан</h3>
                        <p>
                          Начните экономить до 80% на шопинге. Регистрируйтесь в Modagram, чтобы покупать со скидками в Турции одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Узбекистан.
                        </p>
                        <Link href={"https://t.me/modagramuz_bot"}>
                          <button className={cls.regularBTn}>ЗАКАЗАТЬ</button>
                        </Link>
                      </div>
                    );
                }
              })()}
            </div>
            <div className={cls.imageBig}>
              <ImageIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
