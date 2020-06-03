import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import DialogsContainer from './componenst/Dialogs/DialogsContainer';
import Header from './componenst/Header/Header';
import Navbar from './componenst/Navbar/Navbar';
import Profile from './componenst/Profile/Profile';
import UsersContainer from './componenst/Users/UsersContainer';


const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/dialogs'
          render={() => <DialogsContainer />} />
        <Route path='/profile'
          render={() => <Profile />} />

        <Route path='/users'
          render={() => <UsersContainer/> }/>
      </div>
    </div>
  )
}

export default App;