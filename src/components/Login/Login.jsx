import React from 'react';
import css from './Login.module.css';
import {useState} from 'react'
import clientID from "../../Clientid";
import axios from "axios";

const Login = (props) => {
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [data, setData] = useState("");

    let handleSubmit = async (e) => {
        e.preventDefault();
        let pw1 = password;
        let pw2 = password2;
        let valid = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        let clientId = clientID
        if (!email) {
            setMessage("Не введен адрес электронной почты")
        } else if (pw1 !== pw2) {
            setMessage("Пароли не совпадают!")
        } else if (!pw1 && !pw2) {
            setMessage("Введите и повторите пароль")
        } else if (!valid.test(email)) {
            setMessage("Введен некорректный адрес электронной почты")
        } else (
            axios.post('https://sf-final-project-be.herokuapp.com/api/auth/sign_in',
                {email, password},
                {
                    headers: {
                        "Content-Type": "application/json", Authorization: "Bearer" + localStorage.getItem("token")
                    },
                },
            )
                .then(
                    (response) => {
                        props.setIsLogin(true)
                        setData(response.data);
                        localStorage.setItem("token", response.data.data.token);
                        setEmail("");
                        setPassword("");
                        setMessage("Вы авторизованы");
                        console.log(response);
                    },
                     {
                         "Content-Type": "application/json",
                     Authorization: "Bearer " + localStorage.getItem("token"),
                     }
                )
        ) .catch((error) => {setMessage("Ошибка авторизации, проверьте введенные данные")})
    }
    return (<div className={css.main}>
            <form className={css.auth}>
                <div className={css.info}>Введите логин и пароль
                </div>

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
                    placeholder="Введите пароль"
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
                <button type="submit" className={css.button} onClick={handleSubmit}>Войти
                </button>
                <div className={css.message}>{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}
export default Login