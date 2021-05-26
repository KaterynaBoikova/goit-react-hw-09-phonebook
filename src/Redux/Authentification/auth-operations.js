import axios from "axios";
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const userRegister = inputData => dispatch=>{
    const newUser={
        name: inputData.name, email: inputData.email, password: inputData.password,
    };
    dispatch(authActions.registerRequest());

    axios.post('/users/signup', newUser)
        .then(({data})=>{
            token.set(data.token);
            dispatch(authActions.registerSuccess(data));
        })
        .catch(error=>dispatch(authActions.registerError(error.message)))
};

const userLogin = inputData => dispatch=>{
    const userData={
      email: inputData.email, password: inputData.password,
    };
    dispatch(authActions.loginRequest());

    axios.post('/users/login', userData)
        .then(({data})=>{
            token.set(data.token);
            dispatch(authActions.loginSuccess(data))})
        .catch(error=>dispatch(authActions.registerError(error.message)))
};

const userLogout = () => dispatch=>{
    dispatch(authActions.logoutRequest());
    axios.post('/users/logout')
        .then(()=>{
            token.unset();
            dispatch(authActions.logoutSuccess())})
        .catch(error=>dispatch(authActions.logoutError(error.message)))
};

const getCurrentUser = () => (dispatch, getState) =>{
    const tokenIn = getState().userData.token;
    if (!tokenIn) {return;}
    token.set(tokenIn);

    dispatch(authActions.currentUserRequest());

    axios.get('/users/current')
        .then(({data})=>dispatch(authActions.currentUserSuccess(data)))
        .catch(error=>dispatch(authActions.currentUserError(error.message)));
};

export default {userRegister, userLogin, userLogout, getCurrentUser};
