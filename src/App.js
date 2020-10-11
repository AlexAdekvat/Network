import React, { Suspense } from 'react';
import './App.css';
import { Route, withRouter } from "react-router-dom";
import Navbar from './componenst/Navbar/Navbar';
import UsersContainer from './componenst/Users/UsersContainer';
import HeaderContainer from './componenst/Header/HeaderContainer';
import LoginPage from './Login/login';
import { initializeApp } from './Redux/AppReduser'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Loader from './componenst/common/preloader/Loader';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./Redux/ReduxStore";
import { withSuspense } from './HOC/withSuspense';

const DialogsContainer = React.lazy(() => import('./componenst/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./componenst/Profile/ProfileContainer'))




class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Loader />
    }

    return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/dialogs'
            render={ withSuspense (DialogsContainer)} />
          <Route path='/profile/:userId?'
            render={ withSuspense(ProfileContainer)} />
          <Route path='/users'
            render={() => <UsersContainer />} />

          <Route path='/login'
            render={() => <LoginPage />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.App.initialized
})


let AppContainer = compose(withRouter,
  connect(mapStateToProps, { initializeApp }))(App);

const JsApp = (props) => {
  return (
    <BrowserRouter >
    {/* <BrowserRouter basename={}> */}
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default JsApp;



