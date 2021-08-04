const {Schema, model} = require('mongoose')

const PostsSchema = new Schema({
    creator: {type: Schema.Types.ObjectId, ref: "User"},
    title: {type: String, required: true, trim: true},
    description: {type: String, trim: true},
    game: {type: Schema.Types.ObjectId, ref: "Game"},
    images: [{
        filename: {type: String},
        contentType: {type: String},
        imageBase64: {type: String}
    }],
    videoURLs: [{type: String}],
    comments: [{
        user: {type: Schema.Types.ObjectId, ref: "User"},
        comment: {type: String, trim: true},
        createDate: {type: Schema.Types.Date, auto: true}
    }],
    likes: {type: Number, default: 0},
    createdDate: {type: Schema.Types.Date, default: Date.now()},
    status: {type: Number, default: 0}
})

//status 0 - pending, 1 - accepted, 2 - rejected

module.exports = model('Posts', PostsSchema)