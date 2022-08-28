const User = require("../models/User.js")

exports.register = async (req, res)=>{
    try{
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
    }catch(error){
        res.status(500).json({message:error.message})
    }

};