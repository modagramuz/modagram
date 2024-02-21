import React from 'react'
import cls from './services.module.scss'
import { serviceData } from '@/shared/services'

const Services = () => {
  return (
    <>
      <div className="innerContainer">
        <h1 className={cls.h1}>Как это работает - шаг за шагом</h1>
        <div className={cls.subTitle}>1. Вы выбираете продукт с интернет магазинов Турции.</div>
        <div className={cls.subTitle}>2. Отправляете ваш заказ через наш телеграм бот.</div>
        <div className={cls.subTitle}>3. Оплачиваете счет который наш оператор отправил вам и мы выкупаем заказ.</div>
        <div className={cls.services}>
          {serviceData.map((item) => (
            <div key={item.id} className={cls.servicesDelivery}>
              <div className={cls.servicesName}>
                <div className={cls.inServicesName}>{item.name}</div>
                <div className={cls.inServicesTitle}>{item.title}</div>
                <div className={cls.inServicesP}>
                  <p>БЕСПЛАТНО</p>
                </div>
              </div>
              <div className={cls.servicesImg}>
                <img src={item.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Services
