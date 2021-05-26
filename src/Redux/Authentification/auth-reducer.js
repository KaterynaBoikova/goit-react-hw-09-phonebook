import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const initialStateUser = {name: null, email: null};

const user = createReducer(initialStateUser, {
    [authActions.registerSuccess]: (state, action)=>{return action.payload.user},
    [authActions.loginSuccess]: (state, action)=>{return action.payload.user},
    [authActions.logoutSuccess]: () => initialStateUser,
    [authActions.currentUserSuccess]: (state, action) => action.payload,
});

const token = createReducer('', {
    [authActions.registerSuccess]: (state, action) => action.payload.token,
    [authActions.loginSuccess]: (state, action) => action.payload.token,
    [authActions.logoutSuccess]: () => null,
});

const isLoggedIn = createReducer('', {
    [authActions.registerSuccess]: () => true,
    [authActions.loginSuccess]: () => true,
    [authActions.registerError]: () => false,
    [authActions.loginError]: () => false,
    [authActions.logoutSuccess]: () => false,
    [authActions.currentUserError]: () => false,
    [authActions.currentUserSuccess]: () => true,
});

const error = createReducer('', {
    [authActions.registerError]: (state, action)=>{return action.payload},
    [authActions.loginError]: (state, action)=>{return action.payload},
    [authActions.logoutError]: (state, action)=>{return action.payload},
    [authActions.currentUserError]: (state, action)=>{return action.payload},
});

export default combineReducers({
    user,
    isLoggedIn,
    token,
    error,
});