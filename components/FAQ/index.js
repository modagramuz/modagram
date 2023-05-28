import React from "react";
import cls from "./faq.module.scss";
import { PlusIcon } from "../svg";

export default function Faq() {
  const data = [
    {
      id: 1,
      name: "Можем ли мы заказать только с сайта, который вы упомянули?",
    },
    {
      id: 1,
      name: "Вы купили заказ?",
    },
    {
      id: 1,
      name: "Можем ли мы сделать комиссию дешевле?",
    },
    {
      id: 1,
      name: "Курс обмена изменился после того, как мы его купили что теперь?",
    },
    {
      id: 1,
      name: "Как узнать, сколько будет стоить мой товар?",
    },
    {
        id: 1,
        name: "Курс обмена изменился после того, как мы его купили что теперь?",
      },
  ];
  return (
    <>
      <div className="innerContainer">
        <div className={cls.wrapFaq}>
            {data.map((item)=>(
 <div className={cls.grid}>
 <div>
   <PlusIcon />
 </div>
 <p>{item.name}</p>
</div>
            ))}
         
        </div>
      </div>
    </>
  );
}
