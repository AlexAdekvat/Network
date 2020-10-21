import React from 'react';
import s from './Settings.module.css'
import Loader from './../componenst/common/preloader/Loader';

const Settings = (props) => {
    return (
        <div className={s.wrapper}>
            Settings is in development
            <Loader />
        </div>
    )
}

export default Settings;