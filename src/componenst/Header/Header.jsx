import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAmericanSignLanguageInterpreting, faWalking } from '@fortawesome/free-solid-svg-icons';
import Loader from '../common/preloader/Loader';
library.add(faAmericanSignLanguageInterpreting)



const Header = (props) => {

    return (
        <header className={s.header}>
            <img src='https://o.remove.bg/downloads/35d77061-27bf-4e6f-a5db-d70fdd186eed/logo-removebg-preview.png' />
            <div className={s.loginBlock}>
                {props.isAuth
                    ? <div className={s.exit}> <div className={s.name}> {props.login}</div>  <button className={s.btn} onClick={props.logout} >Exit</button> </div>
                    : <div className={s.signIn}> <NavLink to={'/login'}>
                        Sign In
            </NavLink > </div>}
            </div>
        </header>
    )
}

export default Header;