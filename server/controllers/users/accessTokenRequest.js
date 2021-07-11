//! 구현완료

const { User } = require('../../models')
const { 
    isAuthorized
 } = require('../tokenFunctions')

module.exports = (req, res) => {

    //* 로그인이 완료되고 크라이언트는 서버로부터 두가지 종류의 토큰을 받는다. 
    //* 유저는 서버에 무언가 요청을 할 때, 발급받은 액세스토큰을 헤더에 담아서 함께 보낸다. 
    //* 액세스토큰을 해독해서 서버가 발급한 토큰이라고 확인이 되면 요청을 처리하고 응답을 보낸다. 
    
    // 서버가 헤더에 담긴 액세스토큰의 유효성을 해독한 결과를 변수에 담는다
    const accessTokenData = isAuthorized(req)
    if(!accessTokenData) {
        res.json({ data: null, message: "invalid access token" })
    } else {
        const { email } = accessTokenData;

        User.findOne({
            where: { email }
        })
        .then((userData) => {
            if(!userData) {
                res.json({ data: null, message: "not authorized" })
            } else {
                delete userData.dataValues.password;
                res.json({
                    data: { userInfo: userData.dataValues },
                    message: "ok"
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
};