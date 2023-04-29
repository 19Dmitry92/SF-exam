import React from 'react';
import css from './Main.module.css';
import {NavLink} from "react-router-dom";


const Main = (props) => {
    return (<div className={css.main}>
            <div className={css.container}>
                <div>
                    <span className={css.txt}>СЕРВИС ПОИСКА ПРОПАВШИХ ВЕЛОСИПЕДОВ</span>
                </div>
                <div className={css.name}>
                    <span className={css.company}>ВЕЛО-СКАН</span>
                </div>
                <div>
                    <NavLink to='/about'>
                        <button className={props.IsLogin === false ? css.learnmore : css.buttonHide}>Узнать больше
                        </button>
                    </NavLink>
                    <NavLink to='/report'>
                        <button className={props.IsLogin === true ? css.learnmore : css.buttonHide}>Сообщить о краже
                        </button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
export default Main