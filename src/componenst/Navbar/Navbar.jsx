import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCogs, faComments, faHome, faMusic, faNewspaper, faUsers } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faMusic, faHome, faComments, faNewspaper, faCogs, faUsers )



const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to="/profile" activeClassName={s.activeLink}> <FontAwesomeIcon icon="home"/>  Profile</NavLink>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/dialogs" activeClassName={s.activeLink}> <FontAwesomeIcon icon="comments"/>  Messages</NavLink>
            </div>
            <div className={s.item}>
               <NavLink to='/news' activeClassName={s.activeLink}> <FontAwesomeIcon icon="newspaper"/>  News</NavLink> 
            </div>
            <div className={s.item}>
            <NavLink to='/music' activeClassName={s.activeLink}> <FontAwesomeIcon icon="music"/>  Music</NavLink> 
            </div>
            <div className={s.item}>
               <NavLink to='/settings' activeClassName={s.activeLink}> <FontAwesomeIcon icon="cogs"/>  Settings</NavLink> 
            </div>
            <div className={s.item}>
            <NavLink to='/users' activeClassName={s.activeLink}>  <FontAwesomeIcon icon="users"/> Users</NavLink> 
            </div>
        </nav>
    )
}

export default Navbar;