import React from "react";
import s from './contacts.module.css'

const Contacts = ({ contactTitle, contactValue }) => {
    return <div className={s.contacts}><b>{contactTitle}: {contactValue}</b></div>
}

export default Contacts;