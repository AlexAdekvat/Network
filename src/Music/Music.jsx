import React from 'react';
import s from './Music.module.css'
import Loader from '../componenst/common/preloader/Loader';

const Music = (props) => {
    return (
        <div className={s.wrapper}>
            Music is in the process of recording :D
            <Loader />
        </div>
    )
}

export default Music;