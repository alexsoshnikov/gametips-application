const {Schema, model} = require('mongoose')

const GamesSchema = new Schema({
    name: {type: String, required: true, trim: true},
    image: {
        filename: {type: String, unique: true},
        contentType: {type: String},
        imageBase64: {type: String}
    },
    totalPosts: {type: Number},
    refreshToken: {type: String, required: true}
})

module.exports = model('Games', GamesSchema)