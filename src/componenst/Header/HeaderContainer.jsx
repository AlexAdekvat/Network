import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logout } from '../../Redux/AuthReduser';

class HeaderContainer extends React.Component {



    render() {
        return <Header {...this.props} />
    }
}

const mapStateToPropst = (state) => ({
    isAuth: state.Auth.isAuth,
    login: state.Auth.login,
});

export default connect (mapStateToPropst, {logout} )(HeaderContainer);