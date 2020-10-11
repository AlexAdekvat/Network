import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return <header className={s.header}>
        <img src='https://f0.pngfuel.com/png/315/408/globe-illustration-png-clip-art.png' />

        <div className={s.loginBlock}>
            {props.isAuth 
            ? <div> {props.login} - <button onClick={props.logout} >LogOut</button> </div>
                : <NavLink to={'/login'}>
                    LOGIN
            </NavLink>}
        </div>
    </header>
}

export default Header;