const User = require("../models/User")
const bcryptjs = require("bcryptjs")
const crypto = require("crypto")
const jwt = require('jsonwebtoken')
const accountVerificationEmail = require("./accountVerificationEmail");
const {userSignedUpResponse, userNotFoundResponse, invalidCredentialsResponse, userSignedOutResponse } = require("../config/responses")



const controller = {

    register: async (req, res, next) => {
        let { nombre, apellido, email, password } = req.body
        let verified = false;
        let logged = false;
        let code = crypto.randomBytes(10).toString("hex");
        password = bcryptjs.hashSync(password, 10);
        try {
            await User.create({ nombre, apellido, email, password, verified, logged, code, });
            await accountVerificationEmail(email, code);
            return userSignedUpResponse(req, res);
        } catch (error) {
        next(error);
        }
    },

    verify: async (req, res) => {
        let { code } = req.params
        try {
            let user = await User.findOneAndUpdate({ code:code }, { verified:true}, { new:true})
            if(user){
                return res.redirect('http://localhost:5173/')
            }
            return userNotFoundResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    login: async (req, res, next) => {
        const { password } = req.body
        const { user } = req
        try {
            const verificacionPassword = bcryptjs.compareSync(password, user.password)

            if(verificacionPassword) {
                await User.findOneAndUpdate( {_id: user.id}, {online: true}, {new: true} )
                const token = jwt.sign( {
                    id: user._id,
                    nombre: user.nombre,
                    online: user.online,
                    }, process.env.KEY_JWT,
                    { expiresIn: 60 * 60 * 96 }
                )
                return res.status(200).json({
                    response: { user, token },
                    success: true,
                    message: ' Welcome ' + user.nombre
                })
            }
            return invalidCredentialsResponse(req, res)
        } catch (error) {
            next(error)
        }
    },

    loginWithToken: async (req, res) => {
        const { user } = req
        try {
            return res.json({
                response: {
                    user: {
                        id: user._id,
                        nombre: user.nombre,
                        email: user.email,
                    }
                },
                succes: true,
                message: 'Welcome' + user.nombre
            })
        } catch (error) {
            next(error)
        }
    },

    logOut: async (req, res) =>{
        const { id } = req.user
        try {
            await User.findOneAndUpdate( {_id: id}, {online : false} )
            return userSignedOutResponse(req, res)
        } catch (error) {
            next(error)
        }
    }

}
module.exports = controller;
