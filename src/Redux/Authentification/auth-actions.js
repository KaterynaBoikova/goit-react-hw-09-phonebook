import { createAction } from '@reduxjs/toolkit';

const loginRequest = createAction('contacts/loginRequest');
const loginSuccess = createAction('contacts/loginSuccess');
const loginError = createAction('contacts/loginError');

const registerRequest = createAction('contacts/registerRequest');
const registerSuccess = createAction('contacts/registerSuccess');
const registerError = createAction('contacts/registerError');

const logoutRequest = createAction('contacts/logoutRequest');
const logoutSuccess = createAction('contacts/logoutSuccess');
const logoutError = createAction('contacts/logoutError');

const currentUserRequest = createAction('contacts/currentUserRequest');
const currentUserSuccess = createAction('contacts/currentUserSuccess');
const currentUserError = createAction('contacts/currentUserError');

export default {
    loginRequest,
    loginSuccess,
    loginError,
    logoutError,
    logoutRequest,
    logoutSuccess,
    registerError,
    registerRequest,
    registerSuccess,
    currentUserError,
    currentUserRequest,
    currentUserSuccess
};