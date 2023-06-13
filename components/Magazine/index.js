import React, { useState } from "react";
import flats from "@/shared/flats";
import rooms from "@/shared/room";
import cls from "./magazine.module.scss";
import Link from "next/link";
import ClampLines from 'react-clamp-lines';
export default function Magazine() {
  const [roomNumber, setRoomNumber] = useState(1);
  const [sizeIndex, setSizeIndex] = useState(0);

  function handleRoomChange(roomNumber) {
    if (!flats[roomNumber][sizeIndex]) {
      setRoomNumber(roomNumber);
      setSizeIndex(0);
    } else {
      setRoomNumber(roomNumber);
    }
  }
  return (
    <div className="innerContainer">
      <div className={cls.wrap}>
        <div className={cls.RoomSelect}>
          {rooms.map((room, index) => (
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
        </div>
        <div className={cls.card}>
          {flats[roomNumber][sizeIndex]?.details?.map((item, index) => (
            <div className={cls.inner} key={index}>
              <div className={cls.imagePart}>
                <img src={item.img} />
              </div>
              <div className={cls.text}>
                <p className={cls.textOne}>
                  <Link href={item.link}>{item?.name}</Link>
                </p>
                <p className={cls.textScnd}>
                  {item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
