const UserModel = require('../models/user.model')
const bcrypt = require('bcrypt')
const uuid = require('uuid')
const mailService = require('./mail.service')
const tokenService = require('./token.service')
const UserDto = require('../dtos/user.dto')
const ApiError = require('../exceptions/api.error')

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne( {email})

        if (candidate) {
            throw ApiError.BadRequest(`User with such email - ${candidate.email} already exists`)
        }

        const hashPassword = await bcrypt.hash(password, 10)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email, password: hashPassword, activationLink})
        await mailService.sendActivationMail(email, `${process.env.API_URL}/api/auth/activate/${activationLink}`)

        return this._authUser(user)
    }

    async activate(activationLink) {
        const user = await UserModel.findOne({activationLink})
        if (!user) {
            throw ApiError.BadRequest("Activation link is incorrect")
        }
        user.isActivated = true
        await user.save()
    }

    async login(email, password) {
        const user = await UserModel.findOne({email})
        if (!user) {
            throw ApiError.BadRequest('User with such email was not found')
        }

        const isPassEquals = await bcrypt.compare(password, user.password)
        if (!isPassEquals) {
            throw ApiError.BadRequest(`Incorrect password for ${user.email}`)
        }

        return this._authUser(user)
    }

    async logout(refreshToken) {
        const token = await tokenService.removeToken(refreshToken)
        return token
    }

    async refresh(refreshToken) {
        if (!refreshToken) {
            throw ApiError.UnauthorizedError()
        }

        const userData = tokenService.validateRefreshToken(refreshToken)
        const tokenFromDB = await tokenService.findToken(refreshToken)

        if (!userData || !tokenFromDB) {
            throw ApiError.UnauthorizedError()
        }

        const user = await UserModel.findById(userData.id)

        return this._authUser(user)
    }

    async getAllUsers() {
        const users = await UserModel.find()
        return users
    }

    async verifyUserById(userid) {
        const user = await UserModel.findById(userid)
        return user
    }
    async _authUser(user) {
        const userDto = new UserDto(user)
        const tokens = tokenService.generateTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)

        return {...tokens, user: userDto}
    }
}

module.exports = new UserService()