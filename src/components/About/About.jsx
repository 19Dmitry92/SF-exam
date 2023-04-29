import React from 'react';
import css from './About.module.css';
import wifi from "./../../images/wifi.svg"
import clock from "./../../images/clock.svg"
import battery from "./../../images/battery.svg"
import finger from './../../images/like.svg'
import {NavLink} from "react-router-dom";


const About = (props) => {
    return (<div className={css.main}>
            <div className={css.inner}>
                <div className={css.about}>
                    <img src={clock} className={css.img} alt="icon clock"/>
                    Потеряли велосипед? Мы работаем для вас в любую погоду 24/7.
                    Круглосуточная техническая поддержка ответит
                    на все интересующие вопросы
                </div>
                <div className={css.about}>
                    <img src={wifi} className={css.img} alt="icon wifi"/>
                    Наши спутники отследят транспорт
                    в любой точке города и даже страны.
                    Огромный радиус покрытия
                </div>
                <div className={css.about}>
                    <img src={battery} className={css.img} alt="icon battery"/>
                    Установленные на наши велосипеды
                    GPS-трекеры, имеют повышенный ресурс
                    аккумуляторных баттарей
                </div>
                <div className={css.about}>
                    <img src={finger} className={css.img} alt="icon thumbs up"/>
                    Отзывы наших клиентов говорят сами за себя.
                    Пройдите простую процедуру регистрации и
                    сообщайте нам о всех случаях краж
                </div>
             </div>
            <div>
                <NavLink to='/register'>
                    <button className={props.IsLogin === false ? css.button : css.buttonHide}>Регистрация</button>
                </NavLink>
            </div>
        </div>
    )
}
export default About