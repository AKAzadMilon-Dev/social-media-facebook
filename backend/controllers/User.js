const {
  validationEmail,
  validationLength,
  validationUsername,
} = require("../helpers/Validation.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/Tokens.js");
const { sendVerificationEmail } = require("../helpers/Mailer.js");

exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
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
    if (!validationLength(first_name, 3, 30)) {
      return res.status(400).json({
        message: "Your First name must be min 3 letter and max 30 letter",
      });
    }

    if (!validationLength(last_name, 3, 30)) {
      return res.status(400).json({
        message: "Your last name must be min 3 letter and max 30 letter",
      });
    }

    if (!validationLength(password, 6, 40)) {
      return res
        .status(400)
        .json({ message: "Your password must be 6 characters" });
    }

    // password cryption
    const cryptPassword = await bcrypt.hash(password, 12);

    // Unique username generation
    const tempUsername = first_name + last_name;
    const newUsername = await validationUsername(tempUsername);

    const user = await new User({
      first_name,
      last_name,
      username: newUsername,
      email,
      password: cryptPassword,
      birthYear,
      birthMonth,
      birthDay,
      gender,
    }).save();

    const emailVarificationToken = generateToken({ id: user._id }, "30m");
    const url = `${process.env.BASE_URL}/activate/${emailVarificationToken}`;
    sendVerificationEmail(user.email, user.first_name, url);

    const token = generateToken({ id: user._id.toString() }, "7d");

    res.send({
      id: user._id,
      username: username,
      first_name: first_name,
      last_name: last_name,
      token: token,
      verified: user.verified,
      message: "Register Success! Activate your email to start",
    });
    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
