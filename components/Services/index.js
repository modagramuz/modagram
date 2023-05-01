import React from "react";
import cls from "./services.module.scss";
import { serviceData } from "@/shared/services";

const Services = () => {
  return (
    <>
      <div className="innerContainer">
        <h1>Услуги доставки из Турции от Modagram.uz</h1>

        <div className={cls.services}>
          <div>
            {serviceData.map((item) => (
              <div key={item.id}  className={cls.servicesDelivery}>
                <div className={cls.servicesName}>
                  {item.name}
                  {item.title}
                  <p>БЕСПЛАТНО</p>
                </div>
                <div className={cls.servicesImg}>
                  <img src={item.img} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Services;