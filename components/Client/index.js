import React from "react";
import cls from "./client.module.scss";
import { clientData } from "@/shared/client";

const Client = () => {
    return (
        <>
        <div className="innerContainer">
            <div className={cls.client}>
                <h1>Узнайте об опыте Modagram.uz</h1>
                <div>
                    <img src="shape.png"/>
                    <div >
                    <h1>Наши клиенты говорят о нас</h1>
                    <a href="">Больше отзывов</a>
                    </div>
                </div>
                <div className={cls.clientSlider}>

                </div>

            </div>

        </div>
        </>
    )
}

export default Client;