import React from "react";
import cls from "./services.module.scss";
import { serviceData } from "@/shared/services";


const Services = () => {
  return (
    <>
      <div className="innerContainer">
        <h1 className={cls.h1}>Услуги доставки из Турции от Modagram.uz</h1>

        <div className={cls.services}>
          {serviceData.map((item) => (
            <div key={item.id} className={cls.servicesDelivery}>
              <div className={cls.servicesName}>
                <div className={cls.inServicesName}>{item.name}</div>
                <div className={cls.inServicesTitle}>{item.title}</div>
                <div className={cls.inServicesP}><p>БЕСПЛАТНО</p></div>
              </div>
              <div className={cls.servicesImg}><img src={item.img} /></div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services;