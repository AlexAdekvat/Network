import React from 'react'
import { connect } from 'react-redux';
import Users from './Users';
import { followAC, unfollowAC, setUsersAC } from '../../Redux/UsersReducer';

let mapStateToProps = (state) =>{
    return{
        Users: state.UsersPage.Users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) =>{
            dispatch (followAC(userId));
        },
        unfollow: (userId) =>{
            dispatch (unfollowAC(userId));
        },
        setUsers:(users) =>{
            dispatch (setUsersAC(users));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);