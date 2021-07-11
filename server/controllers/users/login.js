//! 구현완료

const { User } = require('../../models')
const { 
    generateAccessToken,
    generateRefreshToken,
    sendAccessToken,
    sendRefreshToken
 } = require('../tokenFunctions')

module.exports = (req, res) => {
    // req.body로 유저의 이메일과 패스워드를 받는다. 
    const { email, password } = req.body;

    User.findOne({ // req.body와 일치하는 유저를 데이터베이스에서 찾는다
        where: {
            email,
            password
        }
    })
    .then((userData) => { 
        // 찾은 결과를 userData에 담아두고
        // 일치하는 정보가 없는 경우(데이터베이스에 유저정보가 없는 경우), 적절한 메세지를 보낸다
        if(!userData) { 
            res.json({ data: null, message: "not authorized" })
        } else { 
            // 일치하는 정보가 있는 경우. 정보를 바탕으로 액세스토큰과 리프레쉬토큰을 만들어서 보낸다.
            // 이때 비밀번호와 같은 민감한 정보가 전달되지 않도록 삭제를 해야한다(당연히 데이터베이스에서의 삭제가 아니라는 것은 알고있겠지?) 
            delete userData.dataValues.password;
            const accessToken = generateAccessToken(userData.dataValues); 
            const refreshToken = generateRefreshToken(userData.dataValues);만들고

            sendAccessToken(res, accessToken)
            sendRefreshToken(res, refreshToken)
        }
    })
    .catch((err) => {
        console.log(err)
    })
}