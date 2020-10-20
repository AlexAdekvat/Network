import React from 'react';
import userPhoto from '../../assets/images/user.png';
import s from './Users.module.css'
import { NavLink } from 'react-router-dom';




let User = ({ user, followingInProgress, unfollow, follow }) => {

    return (
        <div className={s.usersInfo}>
            <div className={s.test}>
                <div className={s.userphoto}>
                    <NavLink to={'/profile/' + user.id} >
                        <img src={user.photos.small != null ? user.photos.small : userPhoto} />
                    </NavLink>
                </div>
                <div  className={s.nick}>
                {user.name}
                </div>
                <div className={s.button} >
                    {user.followed
                        ? <button className={s.follow} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {unfollow(user.id) }}>
                            Unfollow</button>
                        : <button className={s.follow} disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => { follow(user.id) }}>
                            Follow</button>}

                </div>
            </div>
            <span className={s.nameStatus}>
                <span >
                    <div></div>
                    {/* <div>{user.status}</div> */}
                </span>
                {/* <span>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </span> */}
            </span>
        </div>
    )

}
export default User;