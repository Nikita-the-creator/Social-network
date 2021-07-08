import React from 'react'
import s from "./Header.module.css"
import { NavLink } from "react-router-dom";
import defaultAvatar from "../../assets/images/defaultAvatar.png";

const Header = ({ logout, login, isAuth, profile }) => {
    return (<header className={s.header}>
        <img className={s.header} src='https://miro.medium.com/max/1000/1*Yafu7ihc1LFuP4azerAa4w.png' alt=""/>
        <div className={s.loginBlock}>
            {isAuth
                ?
                <div className={s.loginElem}>
                    <img className={s.headerPhoto} src={defaultAvatar} alt=""/>
                    <span>
                        {login} - <button onClick={logout}>Log out</button>
                    </span>
                </div>
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>);
}

export default Header;