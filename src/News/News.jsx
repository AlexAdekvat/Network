import React from 'react';
import s from './News.module.css'
import Loader from '../componenst/common/preloader/Loader';

const News = (props) => {
    return (
        <div className={s.wrapper}>
            News is in development
            <Loader />
        </div>
    )
}

export default News;