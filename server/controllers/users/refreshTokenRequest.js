//! 구현완료

const { User } = require('../../models')
const { 
    checkRefreshToken,
    generateAccessToken,
    resendAccessToken
 } = require('../tokenFunctions')

module.exports = (req, res) => {
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken) {
        res.json({ data: null, message: 'refresh token not provided' });
    } 

    const refreshTokenData = checkRefreshToken(refreshToken);
    if(!refreshTokenData) {
        res.json({ data: null, message: 'invalid refresh token, please log in again' })
    }

    const { email } = refreshTokenData;
    User.findOne({
        where: { email }
    })
    .then((userData) => {
        if(!userData) {
            res.json({ data: null, message: 'refresh token has been tempered' })
        }
        delete userData.dataValues.password;

        const newAccessToken = generateAccessToken(userData.dataValues)
        resendAccessToken(res, newAccessToken, userData.dataValues)
    })
    .catch((err) => {
        console.log(err)
    })
}