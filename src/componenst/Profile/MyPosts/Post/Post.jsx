import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://wallbox.ru/resize/960x854/wallpapers/main2/201725/14978885465947f722ebfc13.12087046.jpg' />
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;