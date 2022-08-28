const {
  validationEmail,
  validationLength,
} = require("../helpers/Validation.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");

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

    // Text length check
    if (!validationLength(first_name,3,30)) {
      return res.status(400).json({
        message: "Your First name must be min 3 letter and max 30 letter",
      });
    }

    if (!validationLength(last_name,3,30)) {
      return res.status(400).json({
        message: "Your last name must be min 3 letter and max 30 letter",
      });
    }

    if (!validationLength(password, 6, 40)) {
      return res
        .status(400)
        .json({ message: "Your password must be 6 characters" });
    }

    const cryptPassword = await bcrypt.hash(password, 12);
    console.log(cryptPassword);

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
