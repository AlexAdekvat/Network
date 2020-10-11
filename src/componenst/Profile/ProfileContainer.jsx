import React from 'react';
import Profile from './Profile';
import * as axios from 'axios'
import { connect } from 'react-redux';
import { getUserProfile, getStatus, updateStatus, savePhoto } from '../../Redux/ProfileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.authorizedUserId;
            if (userId) {
                this.props.history.push("/login");
            }
        };
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        
        this.refreshProfile()
    }

    componentDidUpdate() {
        if (this.props.match.params.userId != this.props.match.params.userId)
            this.refreshProfile()
    }

    render() {
        return (
            <Profile {...this.props}
            isOwner={!this.props.match.params.userId}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} 
                savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.ProfilePage.profile,
        status: state.ProfilePage.status,
        authorizedUserId: state.Auth.userId,
        isAuth: state.Auth.isAuth
    })
}

export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    //withAuthRedirect
)(ProfileContainer)


