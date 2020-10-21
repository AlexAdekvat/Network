import React from 'react';
import s from './../Dialogs.module.css';
import { NavLink } from "react-router-dom";
import user from "./../../../assets/images/user.png"

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return <div className={s.dialog }>
        <NavLink to={path}> <img src ={user}/> {props.name}</NavLink>
    </div>
}

export default DialogItem;

