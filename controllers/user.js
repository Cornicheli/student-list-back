const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")
const accountVerificationEmail = require("./accountVerificationEmail");
const {userSignedUpResponse } = require("../config/responses")



const controller = {

    registrar: async (req, res, next) => {
        let {nombre, apellido, email, password} = req.body
        let verified = false;
        let logged = false;
        let code = crypto.randomBytes(10).toString("hex");
        password = bcryptjs.hashSync(password, 10);

        try {
            await User.create({nombre, apellido, email, password,verified, logged, code,});
            await accountVerificationEmail(email, code);
            return userSignedUpResponse(req, res);
        } catch (error) {
        next(error);
        }

    },

}
module.exports = controller;
