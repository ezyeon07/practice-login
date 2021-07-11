const { User } = require('../../models')

module.exports = (req, res) => {
    const { username, password, email, mobile } = req.body

    User.findOrCreate({
        where: { email },
        defaults: {
            username: username,
            password: password,
            email: email,
            mobile: mobile
        }
    })
    .then(([result, created]) => {
        if(!created) {
            res.json({ data: null, message: "Already exists user" })
        }
        res.json(result) //# 결과를 보내고 로그인페이지로 돌아가야할 것 같은데??????
    })
    .catch((err) => {
        console.log(err)
    })
}