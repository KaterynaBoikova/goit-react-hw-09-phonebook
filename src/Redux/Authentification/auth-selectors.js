const getIsLoggedIn = state => state.userData.isLoggedIn;
const getUserMail = state => state.userData.user.email;

export default {
    getIsLoggedIn,
    getUserMail,
};
