import React from 'react'

import cls from './footer.module.scss'
import { LogoScnd, TgIcon, BackNew, IngsIcon } from '@/components/svg'
import Banerer from '../Header/banner'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className={cls.backGroun}>
      <div className="innerContainer">
        <Banerer />

        <div className={cls.wrapFooter}>
          <div className={cls.firstPart}>
            <LogoScnd />
            <p className={cls.logoTiti}>
              Начните экономить до 80% на шопинге. Регистрируйтесь в Modagram, чтобы покупать со скидками в Турции
              одежду, обувь, гаджеты известных брендов и безопасно отправлять вещи в Узбекистан.
            </p>
            <div className={cls.operator}>
              <p>Operator:</p>
              <Link href={'https://t.me/modagramuz_bot'}>
                <div className={cls.icon}>
                  <TgIcon />
                  @modagramuz_bot
                </div>
              </Link>
            </div>
          </div>
          <div className={cls.scndPart}>
            <h3>Информация:</h3>
            <Link className="link" href={'/'}>
              <p>Главная</p>
            </Link>
            <Link className="link" href={'/services'}>
              <p>Сервиси</p>
            </Link>
            <Link className="link" href={'/magazine'}>
              <p>Магазины</p>
            </Link>
            <Link className="link" href={'/'}>
              <p>Заказ</p>
            </Link>
            <Link className="link" href={'/faq'}>
              <p>F.A.Q</p>
            </Link>
          </div>
          <div className={cls.lastPart}>
            <h3>Локация:</h3>
            <br />
            <br />
            <p>Tashkent, Yakkasaroy, Bog'iboston 186, Impactt Coworking Center</p>
            <br />
            <br />
            <h4>Рабочие время:</h4>
            <br />
            <p className={cls.time}>10:00 - 17:00</p>
            <p className={cls.time}>
              <a className={cls.time} href="tel:+998958853399">
                +998 95 885 33 99
              </a>
            </p>

            <p
              style={{
                paddingTop: '30px'
              }}
            >
              info@modagram.uz
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
