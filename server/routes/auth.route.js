const Router = require('express').Router
const userController = require('../controllers/user.controller')
const router = new Router()
const {body} = require('express-validator')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 32}),
    userController.registration)

router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/activate/:link', userController.activate)
router.get('/refresh', userController.refresh)


// only for authorized users (doesn't necessary for JWT auth process)
router.get('/users', authMiddleware, userController.getUsers)

module.exports = router