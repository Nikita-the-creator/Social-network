import React from 'react'
import s from "./Post.module.css"
import defaultAvatar from '../../../../assets/images/defaultAvatar.png'

const Post = (props) => {
    return (
        <div className={s.item}>
            <img className={s.avatar} src={defaultAvatar} alt=""/>
            {props.message}
            <div> like {props.likeCount} </div>
        </div>
    )
}

export default Post;