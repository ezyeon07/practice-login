const { User } = require('../../models')
const { 
    generateAccessToken,
    generateRefreshToken,
    sendAccessToken,
    sendRefreshToken
 } = require('../tokenFunctions')

module.exports = (req, res) => {
    // 로그아웃을 하면 엑세스토큰과 리프레쉬토큰을 삭제해버려야하는거 아닌가???
    
}