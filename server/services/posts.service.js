const PostModel = require("../models/posts.model")
const ApiError = require("../exceptions/api.error")
const PostDto = require("../dtos/posts.dto")
const python = require("../python/python")
const fetch = require("node-fetch")
const multer = require("multer")

class PostsService {
    async create(postData) {
        // todo: тут должно быть овер дохуя проверок, но пока так
        if (!postData.title) throw ApiError.BadRequest('Post must be titled')
        // simple detection of bad words
        // const response = await fetch('http://www.wdylike.appspot.com/?q=shit')
        // console.log(response)

        const post = await PostModel.create({
            title: postData.title,
            description: postData.description,
            videoURLs: postData.videoURLs,
            creator: postData.userid
        })
        //https://www.youtube.com/watch?v=l8aGNhOD91k&t=3520s
        //https://www.bezkoder.com/node-js-upload-store-images-mongodb/
        return new PostDto(post)
    }

    async update(postData) {
        if (!postData.title) throw ApiError.BadRequest('Post must be titled')
        // todo: тут должно быть овер дохуя проверок, но пока так
        // options new: true - возвращается обновленный объект, а не старый и после обновляет
        const post = await PostModel.findByIdAndUpdate(postData.id, postData, {new: true})
        return new PostDto(post)
    }

    async getAllPosts() {
        // todo: have to be paginated
        const posts = await PostModel.find({status: 1})
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