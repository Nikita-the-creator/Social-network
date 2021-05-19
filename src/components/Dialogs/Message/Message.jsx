import s from "../Dialogs.module.css";
import React from "react";

const Message = ({message}) => {
    return (
        <div className={s.dialog}>{message}</div>
    )
}

export default Message;