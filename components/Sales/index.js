import React from "react";
import cls from "./sales.module.scss";
import { salesData } from "@/shared/sales";
import { ArrowIcon } from "../svg";
import Link from "next/link";

const Sales = () => {
  return (
    <>
      <div className="innerContainer">
        <div className={cls.sales}>
          <div className={cls.leftSide}>
            {salesData.map((item) => (
              <div key={item.id} className={cls.salesImg}>
                <img src={item.imgPath} />
              </div>
            ))}
          </div>
          <div className={cls.rightSide}>
            <h1 className={cls.h1}>Где покупать?</h1>
            <p className={cls.parag}>
              Онлайн магазины Турции не доставляют товары в Узбекистан. Modagram
              с 2015 года решает эту проблему, помогает сделать покупки в
              Турецких онлайн магазинах и доставляет заказы курьером до двери.
            </p>
            <div>
              <p className={cls.scnd}>
                Шопинг в Турции — это сотни мультибрендовых и фирменных
                онлайн-магазинов, почти во всех имеются разделы со скидками. Вы
                можете покупать одежду, гаджеты, товары для дома и даже
                ювелирные изделия.
              </p>

              <Link href="/shops">
                <button>
                  Популярные магазины <ArrowIcon />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sales;
