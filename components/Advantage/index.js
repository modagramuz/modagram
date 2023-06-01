import React from "react";
import cls from "./advantage.module.scss";
import { advantageData } from "@/shared/advantage";

const Advantage = () => {
  return (
    <>
      <div className="innerContainer">
        <div className={cls.advantage}>
          {advantageData.map((item) => (
            <div className={cls.advantageSquare}>
              <div key={item.id}>
                <div className={cls.advantageName}>
                  <p className={cls.titile}>{item.name}</p>
                  <img src={item.imgPath} />
                </div>
                <div className={cls.advantageTitle}>{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Advantage;
