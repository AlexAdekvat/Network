import React, { Suspense } from 'react';
import './App.css';
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
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
import Settings from './Settings/Settings';
import News from './News/News';
import Music from './Music/Music';

const DialogsContainer = React.lazy(() => import('./componenst/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./componenst/Profile/ProfileContainer'))




class App extends React.Component {
  catchAllUnhandleErrors = (promiseRejectionEvent) => {
    alert('Some error occured')
    //console.error(promiseRejectionEvent)
  }
  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandleError", this.catchAllUnhandleErrors)
  }
  componentWillUnmount() {
    window.removeEventListener("unhandleError", this.catchAllUnhandleErrors)

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
          <Switch>
            <Route exact path='/'
              render={() => <Redirect to={'/profile'} />} />

            <Route path='/dialogs'
              render={withSuspense(DialogsContainer)} />

            <Route path='/profile/:userId?'
              render={withSuspense(ProfileContainer)} />

            <Route path='/users'
              render={() => <UsersContainer />} />

            <Route path='/login'
              render={() => <LoginPage />} />

            <Route path='/news' component={News} />
            
            <Route path='/music' component={Music} />

            <Route path='/settings' component={Settings} />


            <Route path='*'
              render={() => <div>404 not found</div>} />
          </Switch>
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



