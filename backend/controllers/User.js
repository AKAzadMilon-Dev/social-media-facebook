const { validationEmail } = require("../helpers/Validation.js");
const User = require("../models/User.js");

exports.register = async (req, res) => {
  try {
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
    } = req.body;

    // email validation
    if (!validationEmail(email)) {
      return res.status(400).json({ message: "Invalid email address" });
    }

    // user email already use or not
    const check = await User.findOne({ email });
    if (check) {
      return res.status(400).json({
        message: "This email already in use. Please try another email.",
      });
    }
    return;

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
    }).save();

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
