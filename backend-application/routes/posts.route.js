const Router = require('express').Router
const router = new Router()
const postsController = require('../controllers/posts.controller')
const authMiddleware = require('../middlewares/auth.middleware')

router.post('/create', authMiddleware, postsController.create)
router.get('/posts', postsController.getPosts)
router.get('/post/:id', postsController.getPostById)
router.get('/posts/:userid', postsController.getPostsByUser)

module.exports = router 