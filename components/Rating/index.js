import React from "react";
import cls from './rating.module.scss';
import { ratingData } from "@/shared/rating";

const Rating = () => {
  return (
    <>
      <div className="innerContainer">
        <div className={cls.rating}>
          {ratingData.map((item) => (
            <div key={item.id} className={cls.ratingType}>
                <div className={cls.ratingName}> {item.name}</div>
                <div className={cls.ratingTitle}> {item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Rating;