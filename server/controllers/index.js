module.exports = {
    login: require('./users/login'),
    logout: require('./users/logout'),
    accessTokenRequest: require('./users/accessTokenRequest'),
    refreshTokenRequest: require('./users/refreshTokenRequest'),
    signupRequest: require('./users/signupRequest')
}