import React from "react";
import { Logo } from "@/components/svg";
import cls from "./header.module.scss";
import { headerData } from "@/shared/header";
const Header = () => {
  return (
    <>
      <div className="innerContainer">
        <div className={cls.header}>
          <div className={cls.wrapItems}>
            <div>
              <Logo />
            </div>
            <div className={cls.rightPart}>
              {headerData.map((item) => (
                <div key={item.id}>{item.name}</div>
              ))}
            </div>
            <div className={cls.login}>
              <onclick> Войти </onclick>
              <button> Регистрация </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
