import React from 'react'
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";

const Header = ({ logout,login,isAuth }) => {
    return (<header className={s.header}>
        <img className={s.header} src='https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png' alt=""/>
        <div className={s.loginBlock}>
            {isAuth
                ? <div>{login } - <button onClick={logout}>Logout</button></div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>);
}

export default Header;