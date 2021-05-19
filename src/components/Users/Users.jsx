import React from 'react';
import styles from './users.module.css';
import defaultAvatar from '../../assets/images/defaultAvatar.png'
import { NavLink } from "react-router-dom";
import Paginator from "../common/Paginator/Paginator";

const Users = ({ totalUsersCount, pageSize, users, followingInProcess,
                   follow, unfollow, onPageChanged, currentPage }) => {
    return (
        <div className={styles.users}>
            {
                users.map(u => <div key={u.id}>
                    <span>
                        <NavLink to={'/profile/' + u.id}>
                            <div>
                                <img src={u.photos.small != null ? u.photos.small : defaultAvatar} alt=""
                                     className={styles.userPhoto}/>
                            </div>
                        </NavLink>
                        <div>
                            {u.followed
                                ? <button disabled={followingInProcess.some(id => id === u.id)} onClick={() => {
                                    unfollow(u.id)
                                }}>UnFollow</button>
                                : <button disabled={followingInProcess.some(id => id === u.id)} onClick={() => {
                                    follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>u.location.country</div>
                        <div>u.location.city</div>
                    </span>
                </div>)
            }
            <div>
                <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize}
                           currentPage={currentPage} onPageChanged={onPageChanged}/>
            </div>
        </div>
    )
}

export default Users;