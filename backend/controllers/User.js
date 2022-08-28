const User = require("../models/User.js")

exports.register = async (req, res)=>{
    const {
        first_name,
        last_name,
        username,
        email,
        password,
        birthYear,
        birthMonth,
        birthDay,
        gender,
    } = req.body

    const user = await new User({
        first_name,
        last_name,
        username,
        email,
        password,
        birthYear,
        birthMonth,
        birthDay,
        gender,
    }).save()

    res.json(user)

};