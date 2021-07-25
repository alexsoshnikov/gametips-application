const UserModel = require('../models/user.module')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail.service')
const tokenService = require('./token.service')
const UserDto = require('../dtos/user.dto')

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne( {email})

        if (candidate) {
            throw new Error(`User with such email - ${candidate} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)

        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw new Error("Activation link is incorrect")
        }
        user.isActivated = true
        await user.save()
    }


}

module.exports = new UserService()