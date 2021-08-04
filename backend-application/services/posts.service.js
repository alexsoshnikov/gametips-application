const PostModel = require("../models/posts.model")
const ApiError = require("../exceptions/api.error")
const PostDto = require("../dtos/posts.dto")
const userService = require("./user.service")

class PostsService {
    async create(postData) {
        // тут должно быть овер дохуя проверок, но пока так
        if (!postData.title) {
            throw ApiError.BadRequest('Post must be titled')
        }

        const isVerify = await userService.verifyUserById(postData.userid)
        if (!isVerify) {
            throw ApiError.BadRequest('User with such id was not found')
        }

        const post = await PostModel.create({
            title: postData.title,
            description: postData.description,
            videoURLs: postData.videoURLs,
            creator: postData.userid
        })

        return new PostDto(post)
    }

    // youtubeUrlsParser (videoUrls) {
    //     const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    //     return videoUrls.map(url => {
    //         const match = url.match(regExp)
    //         return (match && match[7].length === 11) ? match[7] : false;
    //     })
    // }
}

module.exports = new PostsService()