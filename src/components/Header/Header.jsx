import React, {useState} from 'react';
import css from './Header.module.css'
import {NavLink} from "react-router-dom";
import {Divide as Hamburger} from 'hamburger-react'

const Header = (props) => {
    const [style, setStyle] = useState("burgerhide");
    const logout = () => {
        props.setIsLogin(false)
    }

    return (<header className={css.header}>
            <div>
                Velo-Scan
            </div>
            <div>
                <nav>
                    <ul className={css.ulist}>
                        <li>
                            <NavLink to='/*' className={({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive}>Главная</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about/*' className={({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive}>О нас</NavLink>
                        </li>
                        <li>
                            <NavLink to='/report/*' className={props.IsLogin === true ? (({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive) : css.buttonHide}>Сообщить о краже</NavLink>
                        </li>
                        <li>
                            <NavLink to='/display' className={props.IsLogin === true ? (({isActive}) =>     // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive) : css.buttonHide}>Случаи краж</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={css.hamburger}>
                <Hamburger color='#ff1b18' onToggle={toggled => {
                    if (toggled) {
                        setStyle("burgershow")
                    } else {
                        setStyle("burgerhide")
                    }
                }}/>
            </div>
            <div>
                <NavLink to='/login/*'>
                    <button className={props.IsLogin === false ? css.button : css.buttonHide}>
                        Войти
                    </button>
                </NavLink>
                <NavLink to='/*'>
                    <button className={props.IsLogin === true ? css.button : css.buttonHide} onClick={logout}>
                        Выход
                    </button>
                </NavLink>
            </div>
            <div className={css[style]}>
                <nav>
                    <ul>
                        <div className={css.logdiv}>
                            <NavLink to='/*' className={({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive}>Главная</NavLink>
                        </div>
                        <div className={css.logdiv}>
                            <NavLink to='/about/*' className={({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive}>О нас</NavLink>
                        </div>
                        <div className={css.logdiv}>
                            <NavLink to='/report/*' className={props.IsLogin === true ? (({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive) : css.buttonHide}>Сообщить о краже</NavLink>
                        </div>
                        <div className={css.logdiv}>
                            <NavLink to='/display' className={({isActive}) =>    // Стили для активного элемента
                                isActive ? css.activeStyle : css.unActive}>Случаи краж</NavLink>
                        </div>

                        <div className={css.logdiv}>
                            <NavLink to='/login/*' className={props.IsLogin === false ? css.unActive : css.buttonHide}>
                                Войти</NavLink>
                        </div>
                        <div className={css.logdiv}>
                        <NavLink to='/*' className={props.IsLogin === true ? css.unActive : css.buttonHide}
                                 onClick={logout}>Выход</NavLink>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
    )
}
export default Header