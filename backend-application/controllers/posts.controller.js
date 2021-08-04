const ApiError = require('../exceptions/api.error')
const postsService = require("../services/posts.service")

class PostsController {
    async create (req, res, next) {
        try {
            const postData = await postsService.create(req.body)
            return res.json(postData)
        } catch (error) {
            next(error)
        }
    }

    async getPosts (req, res, next) {
        try {
            //...
        } catch (error) {
            next(error)
        }
    }

    async getPostById (req, res, next) {
        try {
            //...
        } catch (error) {
            next(error)
        }
    }

    async getPostsByUser (req, res, next) {
        try {
            //...
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new PostsController()