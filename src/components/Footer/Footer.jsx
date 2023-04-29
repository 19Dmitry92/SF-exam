import React from 'react';
import css from './Footer.module.css'
import tg from "./../../images/tg.svg"
import vk from "./../../images/vk.svg"
import {NavLink} from "react-router-dom";

const Footer = () => {
    return (<footer className={css.footer}>
            <div className={css.first}>
                <div className={css.imdiv}>
                    <NavLink to="https://t.me/skillfactory">
                        <img src={tg} className={css.svg} alt="Телеграм"/>
                    </NavLink>
                    <p>Telegram</p>
                </div>
                <div className={css.imdiv}>
                    <NavLink to="https://vk.com/skillfactoryschool">
                        <img src={vk} className={css.svg} alt="Вконтакте"/>
                    </NavLink>
                    <p>Vkontakte</p>
                </div>
            </div>
            <div className={css.txtdiv}>
                <p>Final project by Dmitry</p>
            </div>
        </footer>
    )
}
export default Footer