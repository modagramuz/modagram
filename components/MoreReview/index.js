import React from "react";
import cls from "./more.module.scss";
import { reviewData } from "@/shared/otziv";

export default function MoreReviewComponent() {
  return (
    <div className={cls.containers}>
      <div className={cls.wrapAll}>
        {reviewData.map((item) => (
          <div className={cls.innerItem}>
            <div className={cls.innerItem__img}>
              <img src={item.img} />
              <div>
                <p>{item.name}</p>
              </div>
              <br />
            </div>
            <div>{item.title}</div>
            <br />
            <div>
              <span>Дата:</span> {item.date}
            </div>
          </div>
        ))}

        {/* <div>fhskdjhf</div>
          <div>fhskdjhf</div>
          <div>fhskdjhf</div> */}
      </div>
    </div>
  );
}
