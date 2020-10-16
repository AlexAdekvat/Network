import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import dialogsReducer from "./DialogsReducer";
import profileReducer from "./ProfileReducer";
import usersReducer from "./UsersReducer";
import authReducer from "./AuthReduser";
import  thunkMiddlewera from "redux-thunk"
import {reducer as formReducer} from 'redux-form'
import appReducer from "./AppReduser";

let redusers = combineReducers({
    ProfilePage: profileReducer,
    DialogsPage: dialogsReducer,
    UsersPage: usersReducer,
    Auth: authReducer,
    form:formReducer,
    App: appReducer


});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddlewera)));

// let store = createStore(redusers, applyMiddleware(thunkMiddlewera));

 window.store = store;

export default store;