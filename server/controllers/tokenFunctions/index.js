//! 구현완료

require("dotenv").config();
const { sign, verify } = require("jsonwebtoken");

module.exports = {
    // process.env.ACCESS_SECRET
    // process.env.REFRESH_SECRET

    // accessToken 생성
    generateAccessToken: (data) => {
        return sign(data, process.env.ACCESS_SECRE, { expiresIn: "60s" } )
    },
    // refreshToken 생성
    generateRefreshToken: (data) => {
        return sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" })
    },
    // refreshToken 보내기
    sendRefreshToken: (res, refreshToken) => {
        res.cookie("refreshToken", refreshToken, { httpOnly: true })
    },
    // accessToken 보내기
    sendAccessToken: (res, accessToken) => {
        res.json({
            data: { accessToken },
            message: "ok"
        })
    },
    // accessToken 다시 보내기
    resendAccessToken: (res, accessToken, data) => {
        res.json({
            data: {
                accessToken,
                userInfo: data
            },
            message: "ok"
        })
    },
    // 토큰 유효성 확인
    isAuthorized: (req) => {
        const authorization = req.headers.authorization;
        if(!authorization) return null;
        const token = authorization.split(' ')[1];
        try {
            return verify(token, process.env.ACCESS_SECRET)
        } catch(err) {
            return null
        }
    },
    // refreshToken 검증하기
    checkRefreshToken: (refreshToken) => {
        try {
            return verify(refreshToken, process.env.REFRESH_SECRET)
        } catch (err) {
            return null
        }
    }
}