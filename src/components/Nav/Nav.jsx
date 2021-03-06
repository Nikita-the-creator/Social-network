import React from 'react'
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";

const Nav = () => {
    return <nav className={s.nav}>
        <div className={s.nav__item}>
            <NavLink activeClassName={s.active} to="/profile">Profile</NavLink>
        </div>
        <div className={`${s.nav__item} ${s.active}`}>
            <NavLink activeClassName={s.active} to="/dialogs">Messages</NavLink>
        </div >
        <div className={s.nav__item}>
            <NavLink activeClassName={s.active} to="/news">News</NavLink>
        </div>
        <div className={s.nav__item}>
            <NavLink activeClassName={s.active} to="/music">Music</NavLink>
        </div>
        <div className={s.nav__item}>
            <NavLink activeClassName={s.active} to="/users">Users</NavLink>
        </div>
        <div className={s.nav__item}>
            <NavLink activeClassName={s.active} to="/settings">Settings</NavLink>
        </div>
        <div className={s.friends}>
            <NavLink activeClassName={s.active} to="/friends">Friends</NavLink>
        </div>

    </nav>
}

export default Nav;