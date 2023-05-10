const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")
const accountVerificationEmail = require("./accountVerificationEmail");
const {userSignedUpResponse } = require("../config/responses")



const controller = {

    registro : async (req, res) =>{

    let {nombre, apellido, role, email, password, logged, code} = req.body
    let verify = false
    let online = false
    let codigo = crypto.randomBytes(10).toString("hex");
    password = bcryptjs.hashSync(password, 5);

    try {
        await User.create({nombre, apellido, role, email, password, logged, code})
        await accountVerificationEmail(email, codigo);
        return userSignedUpResponse(req, res)
    } catch (error) {
        next(error)
    }
}

}
module.exports = controller;
