import React from 'react';
import css from "./Report.module.css";
import {useState} from 'react';
import clientID from "../../Clientid";
import axios from "axios";

const Report = (props) => {

    const [licenseNumber, setLicenseNumber] = useState("");
    const [ownerFullName, setOwnerFullName] = useState("");
    const [typeBis, setTypeBis] = useState("");
    const [color, setColor] = useState("");
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [message, setMessage] = useState("")
    let type = typeBis;


    let handleSubmit = async (e) => {
        e.preventDefault();
     let clientId = clientID
        if (!licenseNumber) {
            setMessage("Не введен номер лицензии")
        } else if (!ownerFullName) {
            setMessage("Введите полное имя собственника")
        } else if (!typeBis) {
            setMessage("Вы не ввели тип велосипеда")
        } else (
            axios.post('https://sf-final-project-be.herokuapp.com/api/public/report',
                {licenseNumber, ownerFullName, type, color, date, clientId, description},
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                },
            )
                .then(
                    (response) => {
                        localStorage.setItem("data", JSON.stringify(response.data.data));
                        setLicenseNumber("");
                        setOwnerFullName("");
                        setTypeBis("");
                        setColor("");
                        setDate("");
                        setDescription("");
                        setMessage("Спасибо за обращение, сообщение отправлено");
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
                <div className={css.info}>Введите данные украденного велосипеда
                </div>
                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Номер лицензии - обязательное поле"
                    maxLength="40"
                    value={licenseNumber}
                    onChange={(e) =>setLicenseNumber(e.target.value)}
                />
                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Имя собственника - обязательное поле"
                    maxLength="40"
                    value={ownerFullName}
                    onChange={(e) => setOwnerFullName(e.target.value)}
                />

                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Тип велосипеда (sport/general)"
                    maxLength="40"
                    value={typeBis}
                    onChange={(e) =>setTypeBis(e.target.value)}
                />
                <input
                       className={css.inputField}
                       type="text"
                       placeholder="Цвет"
                       maxLength="40"
                       value={color}
                       onChange={(e) => setColor(e.target.value)}
                />
                <input
                    className={css.inputField}
                    type="date"
                    placeholder="Дата кражи"
                    maxLength="40"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />

                <input
                    className={css.inputField}
                    type="text"
                    placeholder="Описание"
                    maxLength="40"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit" className={css.button} onClick={handleSubmit}>Отправить сообщение
                </button>
                <div className={css.message}>{message ? <p>{message}</p> : null}</div>
            </form>
        </div>
    )
}
export default Report