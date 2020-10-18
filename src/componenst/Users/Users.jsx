import React from 'react';
import Paginator from '../common/Pagination/Pagination';
import User from './User';
import s from './Users.module.css'




let Users = ({ currentPage, onPageChanged, totalUsersCount, pageSize, Users, ...props }) => {

    return (
       // <div className={s.userLine}>
            <div>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                totalItemsCount={totalUsersCount} pageSize={pageSize} />
            <div>
                {Users.map(u => <User user={u}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow}
                    key={u.id} />)
                }
            </div>
        </div>
    )
}
export default Users;