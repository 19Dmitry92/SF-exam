import React from 'react';
import css from './Registration.module.css';
import {useState} from 'react'
import clientID from "../../Clientid";
import axios from "axios";

const Registration = (props) => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")

    let handleSubmit = async (e) => {
        e.preventDefault();
        let clientId = clientID
        let pw1 = password;
        let pw2 = password2;
        let valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        if (!email) {
            setMessage("Не введен адрес электронной почты")
        } else if (pw1 !== pw2) {
            setMessage("Пароли не совпадают!")
        } else if (!pw1 && !pw2) {
            setMessage("Введите и повторите пароль")
        } else if (!valid.test(email)) {
            setMessage("Введен некорректный адрес электронной почты")
        } else (
            axios.post('https://sf-final-project-be.herokuapp.com/api/auth/sign_up',
                {email, password, clientId, firstName, lastName},
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
                .then(
                    (response) => {
                        setEmail("");
                        setPassword("");
                        setFirstName("");
                        setLastName("");
                        setMessage("Регистрация прошла успешно!");
                        console.log(response);
                    },
                     {
                         "Content-Type": "application/json",
                     Authorization: "Bearer " + localStorage.getItem("token"),
                     }
                )
        ) .catch((error) => {setMessage("Ошибка отправки запроса")})
    }

    return (<div className={css.main}>
            <form className={css.auth}>
                <div className={css.info}>Для прохождения процедуры регистрации
                    введите адрес электронной почты и придумайте пароль
                </div>
                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Имя"
                    maxLength="40"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Фамилия"
                    maxLength="40"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input required
                       className={css.inputField}
                       type="text"
                       placeholder="E-mail"
                       maxLength="40"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className={css.inputField}
                    type="password"
                    placeholder="Придумайте пароль"
                    maxLength="40"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    className={css.inputField}
                    type="password"
                    placeholder="Повторите пароль"
                    maxLength="40"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                />
                <button type="submit" className={css.button} onClick={handleSubmit}>Зарегистрироваться
                </button>
                <div className={css.message}>{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}
export default Registration