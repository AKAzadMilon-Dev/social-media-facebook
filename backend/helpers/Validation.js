const { text } = require("express");

exports.validationEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

exports.validationLength = (text, max, min) => {
    if (text.length > max || text.length < min){
        return false;
    };
    return true;
}