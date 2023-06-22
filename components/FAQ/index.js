import React, { useEffect, useState } from "react";
import cls from "./faq.module.scss";
import { PlusIcon } from "../svg";
import faqData from "@/shared/faqData";
import faqFilter from "@/shared/faqFilter";
import Link from "next/link";

export default function Faq() {
  const [roomNumber, setRoomNumber] = useState(1);
  const [sizeIndex, setSizeIndex] = useState(0);
  const [news, setNews] = useState(0);

  function handleRoomChange(roomNumber) {
    if (!faqData[roomNumber][sizeIndex]) {
      setRoomNumber(roomNumber);
      setSizeIndex(0);
      setNews(0);
    } else {
      setRoomNumber(roomNumber);
      setNews(0);
    }
  }

  console.log(roomNumber, "item");

  useEffect(() => {
    if (news == 8) {
      setRoomNumber(0);
    }
  }, [news]);

  const arr = {
    id: 673,
    name: "Новости",
    title1: "Офиса нету есть только пункт выдачи заказов",
    title2:
      "Адрес пункта самовывоза указан в боте. Вы можете забрать свои заказы в часы работы магазина Telegram бот: @modagramuz_bot",
    title3: "Наш бот Telegram запущен",
    title4:
      "Алхамдулиллах, теперь ответы будут приходить быстрее, ведь мы загрузили в боте много часто задаваемых вопросов. Например, откуда можно забрать? Какой курс? Сколько стоит 100TL? И подобные вопросы. Наш Telegram-бот:",
    title5: "Кто оператор? Какое имя?",
    title6:
      "Наш оператор Абдулла. Если у вас есть какие-либо вопросы о Modagram, не стесняйтесь спрашивать.@modagramuz_bot",
  };
  console.log(roomNumber, "nu,ber");
  return (
    <>
      <div className="innerContainer">
        <div className={cls.RoomSelect}>
          {faqFilter.map((room, index) => (
            <span
              key={index}
              className={`${
                room.value === roomNumber
                  ? `${cls.Room} ${cls.RoomActive}`
                  : cls.Room
              }`}
              onClick={() => handleRoomChange(room.value)}
            >
              {room.name}
            </span>
          ))}
          <span
            className={`${
              news === 8 ? `${cls.Room} ${cls.RoomActiveNew}` : cls.Room
            }`}
            onClick={() => setNews(8)}
          >
            Новости
          </span>
        </div>

        <div className={cls.wrapFaq}>
          {roomNumber == 0 ? null : (
            <>
              {faqData[roomNumber][sizeIndex]?.details?.map((item, i) => (
                <div key={item.id} className="c">
                  <input type="checkbox" id={item.id} />
                  <h1 className="titleNEw">
                    <label for={item.id}>{item.name}</label>
                  </h1>
                  <div className="p">
                    <p>{item.descr}</p>
                  </div>
                </div>
              ))}
            </>
          )}

          {news == 8 ? (
            <div className="a">
              <input type="checkbox" id={arr.id} />
              <h1 className="titleNEw">
                <label for={arr.id}>{arr.name}</label>
              </h1>
              <div className="pc">
                <p>{arr.title1}</p>
                <p>{arr.title2}</p>
                <p>{arr.title3}</p>
                <p>
                  {arr.title4}{" "}
                  <Link href={"https://t.me/modagramuz_bot"}>
                    @modagramuz_bot
                  </Link>
                </p>
                <p>{arr.title5}</p>
                <p>{arr.title6}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
