const PostModel = require("../models/posts.model")
const ApiError = require("../exceptions/api.error")
const PostDto = require("../dtos/posts.dto")
const userService = require("./user.service")
const python = require("../python/python")
const fetch = require("node-fetch")

class PostsService {
    async create(postData) {
        // todo: тут должно быть овер дохуя проверок, но пока так

        if (!postData.title) throw ApiError.BadRequest('Post must be titled')

        const isVerify = await userService.verifyUserById(postData.userid)
        if (!isVerify) throw ApiError.BadRequest('User with such id was not found')

        // simple detection of bad words
        // const response = await fetch('http://www.wdylike.appspot.com/?q=shit')
        // console.log(response)

        const post = await PostModel.create({
            title: postData.title,
            description: postData.description,
            videoURLs: postData.videoURLs,
            creator: postData.userid
        })


        return new PostDto(post)
    }

    async getAllPosts() {
        // todo: have to be paginated
        const posts = await PostModel.find()
        return posts.map(post => new PostDto(post))
    }

    async getPostById(id) {
        const post = await PostModel.findById(id)
        return new PostDto(post)
    }

    async getPostsByUser(userid) {
        // todo: have to be paginated
        const posts = await PostModel.find({creator: userid})
        return posts.map(post => new PostDto(post))
    }
}

module.exports = new PostsService()