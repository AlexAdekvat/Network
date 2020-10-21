import React from 'react';
import s from './Post.module.css';
import user from './../../../../assets/images/user.png'

const Post = (props) => {
    return (
        <div className={s.item}>
            <div className={s.postItem}>
                <img src={props.smallPhoto || user}/>
                {/* <img src='https://wallbox.ru/resize/960x854/wallpapers/main2/201725/14978885465947f722ebfc13.12087046.jpg' /> */}
                <div className={s.message}>
                {props.message}
                </div>
            </div>
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;