import React from 'react'
import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from '../../Redux/UsersReducer';
import Users from './Users';
import Loader from '../common/preloader/Loader';
import { compose } from 'redux';
import { getUser, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress, getUserSuperSelector  } from '../../Redux/UsersSelectors';
import s from './Users.module.css'


class UsersContainer extends React.Component {

    componentDidMount() {

        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize);
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Loader /> : null}
                <div className={s.test}>
                <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    Users={this.props.Users}
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress} />
                    </div>
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        Users: getUser(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount (state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)

    }
}


export default compose(
    connect(mapStateToProps,
        { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers }),
)(UsersContainer)