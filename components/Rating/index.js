import React from "react";
import cls from './rating.module.scss';
import { ratingData } from "@/shared/rating";

const Rating = () => {
  return (
    <>
      <div className="innerContainer">
        <div className={cls.rating}>
          {ratingData.map((item) => (
            <div className={cls.ratingType}>
              <div key={item.id}>
                <div className={cls.ratingName}> {item.name}
                </div>
                <div className={cls.ratingTitle}> {item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Rating;