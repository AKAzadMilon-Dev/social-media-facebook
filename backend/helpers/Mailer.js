const nodemailer = require("nodemailer");
const { google } = require("googleapis");

require("dotenv").config();

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refreshToken: MAILING_REFRESH,
  });

  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });

  const mailOption = {
    from: EMAIL,
    to: email,
    subject: "Facebook Community Email Verification",
    html: `<div style="max-width:600px"><div style="display:flex;column-gap:24px;border-bottom:1px solid #000;padding-bottom:13px"><div><img src="https://i.ibb.co/McsYKt9/icon-1.png" alt=""></div><p style="font-family:sans-serif">Confirm Email</p></div><p style="font-family:sans-serif">Hi ${name},</p><p style="font-family:sans-serif">Thanks for sign up in Facebook. Please verify your email by click confirm to continue</p><p style="font-family:sans-serif">Verification Link:</p><a href="${url}" style="font-family:sans-serif;padding:5px 33px;color:#fff;background:#0c88ef;text-decoration:none;display:inline-block">Confirm</a><p style="font-family:sans-serif">from CIT ©️ Facebook. CIT Platforms, Inc., Attention: Community Support, 1 Facebook Way, Menlo Park, CA 94025 This message was sent to shawon@gmail.com. To help keep your account secure, please don't forward this email.</p></div>`,
  };

  stmp.sendMail(mailOption, (error, res) => {
    if (error) return error;
    return res;
  });
};
