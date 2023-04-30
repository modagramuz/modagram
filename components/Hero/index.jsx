import React from "react";

import cls from "./hero.module.scss";

const Hero = () => {
  return (
    <div className="container">
      <div className={cls.background}>
        <img src="/BG.png" />
      </div>
    </div>
  );
};

export default Hero;
