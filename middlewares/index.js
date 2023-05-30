const accountExistsSignIn = require("./accountExistsSignIn");
const accountExistsSignUp = require("./accountExistsSignUp");
const accountHasBeenVerified = require("./accountHasBeenVerified");
const errorHandler = require("./errorHandler");
const mustSignin = require("./mustSignin");
const validate = require("./validator");
const verifyComment = require("./verifyComment");

module.exports = {
    accountExistsSignIn,
    accountExistsSignUp,
    accountHasBeenVerified,
    errorHandler,
    mustSignin,
    validate,
    verifyComment
};
