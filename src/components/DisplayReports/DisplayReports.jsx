import React from 'react';
import css from './DisplayReports.module.css';
import {useState} from 'react'
import axios from "axios";
import {NavLink} from "react-router-dom";

const DisplayReports = (props) => {
    const [data, setData] = useState("")
    const [activeState, setActiveState] = useState(false)
    const inseRT = async () => {
        const result = await
            axios.get('https://sf-final-project-be.herokuapp.com/api/cases',
                {
                    headers: {
                        "Content-Type": "application/json", Authorization: "Bearer " + localStorage.getItem("token")
                    },
                },
            )
        setData(result.data.data)
        setActiveState(true)
    }

    return (<div className={css.main}>
            <div><p className={activeState === true ? css.unActive : css.info}>Здесь вы можете вывести все сообщения о
                кражах. Для отображения результатов
                воспользуйтесь кнопкой ниже</p></div>
            <div>{data ? data.map((item) => {
                return <div className={css.answer}>
                    <p className={css.menuitem}>Номер лицензии:</p><p className={css.result}>{item.licenseNumber}</p>
                    <p className={css.menuitem}>Имя собственника:</p><p className={css.result}>{item.ownerFullName}</p>
                    <p className={css.menuitem}>Цвет велосипеда:</p><p className={css.result}>{item.color}</p>
                    <p className={css.menuitem}>Тип велосипеда:</p><p className={css.result}>{item.type}</p>
                </div>
            }) :  <div><p className={ css.info}>Что-то пошло не так, попробуйте еще раз</p></div>}</div>
            <button className={activeState === true ? css.unActive : css.button} onClick={inseRT}>Вывести полный список
                краж
            </button>
            <NavLink to='/report/*'>
                <button className={activeState === true ? css.button : css.unActive} onClick={inseRT}>Сообщить о новом случае краж
                </button>
            </NavLink>
        </div>
    )
}
export default DisplayReports